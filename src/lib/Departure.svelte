<script>
    import { onMount,onDestroy } from 'svelte';
  /**
     * @type {{ route: any; trip: any; departure_timestamp: any; delay: any; arrival_timestamp?: any; }}
     */
   export let departure;
  export let arivals=false;
  /**
     * @type {any}
     */
   export let size;
    $: linka = departure.route.short_name;
    $: stanice = departure.trip.headsign;
   // @ts-ignore
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
  /**
     * @type {{ last_stop: { id: null; name: any; time: string | number | Date; }; next_stop: { name: any; time: string | number | Date; }; }}
     */
  let position;
  import {isPhone} from './store';
  async function load_position(){
    if(!info){
      position=await(await fetch("/api/position/?trip_id="+departure.trip.id)).json();
    }
    info=!info;
  }
  let info=false;
  /**
     * @type {number | undefined}
     */
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
      {(Math.floor(za/60)>0?Math.floor(za/60)+" h. ":"")+za%60+" m."}
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

<tr class="info" style:font-size={size?"xx-large":"large"}>
<td></td>

{#if position.last_stop.id == null}
    <td><a href={"/trip?trip_id="+trip_id}>Detail spoje</a></td><td></td>
{:else if position.last_stop.id == null}
    <td><a href={"/trip?trip_id="+trip_id}>{position.next_stop.name}</a></td><td>{(new Date(position.next_stop.time)).toLocaleTimeString().slice(0,-3)}</td>
{:else}
    <td><a href={"/trip?trip_id="+trip_id}>{position.last_stop.name}</a></td><td>{(new Date(position.last_stop.time)).toLocaleTimeString().slice(0,-3)}</td>    
{/if}
</tr>
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

tr.info a{
  color:inherit;
  text-decoration: inherit;
  display: block;
}

tr.info{
  text-align: center;
  color:white;
  background-color: black;
}

</style>
