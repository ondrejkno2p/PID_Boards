<script>
  const route_type_names=["tram", "metro", "train","bus","ferry","funicular", "trolleybus"]
  import { onMount } from 'svelte';
  import { to_number } from 'svelte/internal';
  import Clock from '../Clock.svelte';
  export let data;
  let position=data.position
  let interval;
  let trip_id=data.trip.trip_id;
  $: dmin=Math.floor(position.delay/60)
  $: dsec=position.delay%60
  $: type= (data.route.is_night?"night ":"")+route_type_names[data.route.route_type]
  onMount(()=>{
    interval = setInterval(async () => {
        position=await(await fetch("/api/position/?trip_id="+trip_id)).json();
		}, 5000);
  });
  function good_time(bad_time){
    let shr=bad_time.split(':')[0]
    let hr =to_number(shr)
    hr=hr%24;
    return hr+":"+bad_time.split(':')[1]+":"+bad_time.split(':')[2];
  }
  console.log(data)
</script>
<div class="header">
  <Clock></Clock>
  <h1>
    <a href="/">{data.route.route_short_name} směr {data.trip.trip_headsign}</a>
  </h1>
</div>
<table class="stop">
{#each data.trip.stop_times as stop_time (stop_time.stop.properties.stop_id)}
<tr>
  <td class="first">
    {stop_time.stop_sequence}
  </td>
  <td>
    <a href={"/single?ids="+stop_time.stop.properties.stop_id}>{stop_time.stop.properties.stop_name}</a>
  </td>
  <td>
    {good_time(stop_time.arrival_time)}
  </td>
  <td>
    {#if stop_time.departure_time!=stop_time.arrival_time}
    {good_time(stop_time.departure_time)}
    {/if}
  </td>
</tr>
{#if position.last_stop.id==stop_time.stop.properties.stop_id}
<tr>
  <td class="first"> 
    {#if type=="tram"}
      <img class="icon" src="tram.png" alt="tram">
    {:else if type=="night tram"}
    <img class="icon_night" src="tram.png" alt="tram">
    {:else if type=="bus"}
    <img class="icon" src="bus.png" alt="bus">
    {:else if type=="night bus"}
    <img class="icon_night" src="bus.png" alt="bus">
    {:else if type=="metro"}
    <img class="icon" src="metro.png" alt="metro">
    {:else if type=="ferry"}
    <img class="icon" src="kotva.png" alt="ferry">
    {:else if type=="train"}
    <img class="icon" src="train.png" alt="train">
    {/if}
  </td>
  {#if position.delay>0}
  <td class="stop" style="color:red;">+{(dmin>0? dmin +" m. ":"")+(dsec>0? dsec +" s. ":"")}</td><td></td><td></td>
  {:else}
  <td></td><td></td><td></td>
  {/if}
</tr>
{/if}
  
{/each}
</table>
<style>
img.icon{
  height: 34px;
  margin: -4px;
  padding: 0px;
  border: 0;
  border-radius: 10%;
  background-color: white;
}

img.icon_night{
  height: 34px;
  width: 34px;
  margin-bottom: -4px;
  padding: 0px 0px;
  border: 0px;
  -webkit-filter: invert(1);
  filter: invert(1);
  background-color: white;
}

table.stop{
    color: rgb(0, 0, 0);
    background-color: rgb(0, 0, 0);
    margin: 0px 0px;
    padding: 0px 0px;
    float:left;
    font-size: 16px;
    position: absolute;
    top:98px;
    z-index: -1;
}
table.stop tr{
    color: rgb(0, 0, 0);
    background-color: rgb(0, 0, 0);
    margin: 0px 0px;
    padding: 0px 0px;
    height: 34px;
}
table.stop td{
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    text-align: center;  
    height: 34px;
    padding: 0;

}
td.first{
  width: 34px;
  height: 34px;
  padding: 0px;

}

a{
  color:inherit;
  text-decoration: inherit;
  display: block;
}
.header {
  background-color: #000;
  color:white;
  width: 100%-8px;
  position: fixed;
  height: 90px;
  top:4px;
  right:8px;
  left:4px
}
.header h1{
  background-color: #000;
  color:white;
  width: 35%;
  height: 50%;
  padding: 0 0;
  margin-top: 22.5px;
  margin-bottom: 22.5px;
  margin-left: 20px;
  margin-right: 20px;
  float: left;
  text-align: left;
  display: block;
}
</style>