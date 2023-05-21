<script>
  import { onMount } from 'svelte';
  import { to_number } from 'svelte/internal';
  import Clock from '../Clock.svelte';
  export let data;
  let position=data.position
  let interval;
  let trip_id=data.trip.trip_id;
  $: dmin=Math.floor(position.delay/60)
  $: dsec=position.delay%60
  onMount(()=>{
    console.log(data);

    interval = setInterval(async () => {
        position=await(await fetch("/api/position/?trip_id="+trip_id)).json();
		}, 5000);
  });
  function good_time(bad_time){
    let shr=bad_time.slice(0,2);
    let hr =to_number(shr)
    hr=hr%24;
    let srest =bad_time.slice(2,5);
    return hr+srest;
  }
</script>
<Clock></Clock>
<h1>
  {data.trip.route_id}
</h1>
<table>
{#each data.trip.stop_times as stop_time (stop_time.stop.properties.stop_id)}
<tr>
  <td>
    {stop_time.stop_sequence}
  </td>
  <td>
    <a href={"/single?ids="+stop_time.stop.properties.stop_id}>{stop_time.stop.properties.stop_name}</a>
  </td>
  <td>
    {good_time(stop_time.arrival_time)} ---
  </td>
  <td>
    {good_time(stop_time.departure_time)}
  </td>
</tr>
{#if position.last_stop.id==stop_time.stop.properties.stop_id}
<tr>
  <td><img class="icon" src="tram.png" alt="tram"></td>
  {#if position.delay>0}
  <td style="color:red;">+{(dmin>0? dmin +" m. ":"")+(dsec>0? dsec +" s. ":"")}</td>
  {/if}
</tr>
{/if}
  
{/each}
</table>
<style>
img.icon{
  height: 34px;
  margin: 0px;
  padding: 0px;
  border: 0;
}
</style>