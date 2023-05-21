<script>
    import { onMount,onDestroy } from 'svelte';
  /**
     * @type {{ route: { short_name: any; }; trip: { headsign: any; }; arrival_timestamp: {scheduled: string | number | Date; predicted: string | number | Date; minutes: any; }; departure_timestamp: {scheduled: string | number | Date; predicted: string | number | Date; minutes: any; }; delay: any; }}
  */
  export let departure;
  export let arivals=false;
  export let size;
    $: linka = departure.route.short_name;
    $: stanice = departure.trip.headsign;
    $: odjezd=odj(departure);
    $: za = departure.departure_timestamp.minutes  
    $: spozdeni =departure.delay
    $: trip_id =departure.trip.id;
    /**
     * @param {{ route?: { short_name: any; }; trip?: { headsign: any; }; arrival_timestamp: any; departure_timestamp: any; delay?: any; }} dep
     */
    function odj (dep){
      if(arivals){
        return new Date(dep.arrival_timestamp.scheduled);
      }
      else{
        return new Date(dep.departure_timestamp.scheduled);
      }
    }
  let position;
  import {isPhone} from './store';
  async function load_position(){
    if(!info){
      position=await(await fetch("/api/position/?trip_id="+departure.trip.id)).json();
    }
    info=!info;
  }
  let info=false;
  let interval;
  onMount(() => {
		interval = setInterval(async () => {
			if(info){
        position=await(await fetch("/api/position/?trip_id="+departure.trip.id)).json();
      }
		}, 5000);});
  onDestroy(() => {clearInterval(interval)});
</script>

<tr style:font-size={size?"xx-large":"large"} class="departure" on:keydown={load_position} on:click={load_position}>
    <td>
      {linka}
    </td>
    <td>
      {stanice}
    </td>
    <td>
      {odjezd.toLocaleTimeString().slice(0,-3)}
    </td>
    {#if !$isPhone}
    <td>
      {za+" m."}
    </td>
    <td>
    {#if spozdeni.is_available}
    {spozdeni.minutes > 0 ? spozdeni.minutes%60 + ' m. ' : '' }
    {spozdeni.seconds > 0 ? spozdeni.seconds%60 + ' s.' : '' }
    {/if}
    </td>
    {/if}
</tr>
{#if info}
{#if position.last_stop.id == null}
<tr style:font-size={size?"xx-large":"large"}>
  <td colspan="3">
    Zádné informace o spoji
  </td>
</tr>
{:else if position.last_stop.id == null}
<tr style:font-size={size?"xx-large":"large"}>
  <td colspan="3">
    Vyrazí z stanice {position.next_stop.name} v {(new Date(position.next_stop.time)).toLocaleTimeString().slice(0,-3)}
  </td>
</tr>
{:else}
<tr style:font-size={size?"xx-large":"large"}>
  <td colspan="3">
    Poslední stanice {position.last_stop.name} v {(new Date(position.last_stop.time)).toLocaleTimeString().slice(0,-3)}
    <a href={"http://localhost:3333/trip?trip_id="+trip_id}>
      (detail)
    </a>
  </td>
</tr>
{/if}
{/if}
<style>

.departure{
    color: rgb(0, 0, 0);
    background-color: rgb(0, 0, 0);
    margin: 0px 0px;
    padding: 0px 0px;
    float:none;
}

.departure td{
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    text-align: center;  
}

</style>
