<script lang="ts">
  import {onMount} from 'svelte';
  import {posible_stops,isPhone } from './store';
  import PosibleStop from './Posible_Stop.svelte';
  import StopGroup from './Stop_Group.svelte';
  import { each } from 'svelte/internal';
  import Device from 'svelte-device-info'
	let station_name = '';
  export let station_names:Array<string>;
  let mouted =false;
  let station_id = '';
  let pressed=false;
  let filtred_stops=new Array<{id:number,name:string}>;
  let results: { search_results: any; static_data:any};
  let stops:{features:any};
  let sub_stations: any[];
  async function find_first(){
    $posible_stops=new Array();
    let url_station_name=encodeURI(station_name.trim());
    results = await (await fetch("/api/station/?station_name="+url_station_name)).json();
    stops=results.search_results;
    sub_stations=results.static_data;
    let index=0;
    for (let i = 0; i < stops.features.length; i++) {
      if (stops.features[i].properties.stop_id.search('S')>0) {
        continue;
      }
      $posible_stops[index]=stops.features[i].properties;
      index+=1;
    }
    if (stops.features.length==0){
      pressed=true;
    }
    filtred_stops=new Array<{id:number,name:string}>;
  }
  function clear() {
    pressed=false;
    $posible_stops=new Array();
  }
  const filterstations = () => {
    filtred_stops=new Array<{id:number,name:string}>
    let storageArr=new Array<string>;
    if (station_name) {
      station_names.forEach(
        sn => {
          if (sn.toLowerCase().startsWith(station_name.toLowerCase())) {
            storageArr = [...storageArr, makeMatchBold(sn)];
          }
        }
      );
    }
    for (let i = 0; i < storageArr.length; i++) {
      filtred_stops[i] = {id:i, name:storageArr[i]};
    }
  }
  const makeMatchBold = (str:string) => {
      // replace part of (country name === inputValue) with strong tags
      let matched = str.substring(0, station_name.length);
      let makeBold = `${matched}`;
      let boldedMatch = str.replace(matched, makeBold);
      return boldedMatch;
    }
  function pickGroup(name:string){
    station_name=name;
    filtred_stops=new Array<{id:number,name:string}>;
    find_first()
  }
  onMount(() => {
    mouted=true});
  function getLines(stop_ids:string){
    let station=sub_stations.filter(function(value, index, arr){ 
			if (value.ids == stop_ids) return value;
		  }
    )
    if(station.length>0) {return station[0].lines;}
    else{
      
      return [];
    }
  }

</script>
<form>
  <input placeholder="Vyber Stanici" style:width={$isPhone?"70%":"320px"} on:click={filterstations} on:input={filterstations} on:keyup={filterstations} bind:value={station_name}>
  <button on:click={find_first}>Hledej</button>
</form>

{#if filtred_stops.length>0}
<ul class="autocomplete" style="z-index:3;position:sticky;" style:width={$isPhone?"70%":"324px"}>
{#each filtred_stops as sn (sn.id)}
<StopGroup on:click={()=>{pickGroup(sn.name)}} stop_group_name={sn.name}>
</StopGroup>
{/each}
</ul>
{/if}

{#if mouted}
<div class="stop_scroll" style:width={$isPhone?"90%":"400px"}>
  <ul class="posible_stop"  style:width={$isPhone?"99%":"398px"}>
    {#each $posible_stops as posible_stop (posible_stop.stop_id)}
    <PosibleStop lines={getLines(posible_stop.stop_id)} stop={posible_stop}>
    </PosibleStop>
  {/each}
  </ul>
</div>
{#if $posible_stops.length>0}

<!-- <button on:click={clear}>Vyčisti</button> -->
{:else if pressed}
<!-- Nic nenalezeno -->
{/if}
{/if}
<style>
ul.autocomplete {
  position: static;
  display: block;
  z-index: 3;
	position: relative;
	margin: 0;
	padding: 0;
	top: 0;
	width: 324px;
	border: 1px solid #ddd;
	background-color: #ddd;
}
ul.posible_stop {
  z-index: 3;
	margin: 0;
	padding: 0;
	top: 0;
	width: 398px;
  height: fit-content;
	border: 1px solid #ddd;
	background-color: #ddd;
}	
input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left:0;
  font-size: 16px;
	margin: 0;
  width: 320px;
}
button {
  border: 1px solid transparent;
  margin-left: 3px;
  padding: 10px;
  font-size: 16px;
  background-color: DodgerBlue;
  color: #fff;
}
.stop_scroll{
  display: block;
  top:150px;
  bottom:8px;
  width:400px;
  overflow-y:scroll;
  position:fixed;
}
</style>