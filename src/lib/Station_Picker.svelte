<script lang="ts">
  interface line {
    name:string;
    headsign:string;
    type:string;
  }
  import {onMount} from 'svelte';
  import {stations, posible_stops,isPhone } from './store';
  import PosibleStop from './Posible_Stop.svelte';
  import StopGroup from './Stop_Group.svelte';
  import { each, onDestroy } from 'svelte/internal';
  import Device from 'svelte-device-info'
	let station_name = '';
  export let station_names:Array<string>;
  let mouted =false;
  let station_id = '';
  let pressed=false;
  let filtred_stops=new Array<{id:number,name:string}>;
  let results;
  let stops;
  async function search(){
    $posible_stops=new Array();
    let url_station_name=encodeURI(station_name.trim());
    results = await (await fetch("/api/station/?station_name="+url_station_name)).json();
    stops=results.stops;
    let index=0;
    for (let i = 0; i < stops.length; i++) {
      if (stops[i].id.search('S')>0) {
        continue;
      }
      $posible_stops[index]=stops[i];
      index+=1;
    }
    filtred_stops=new Array<{id:number,name:string}>;
  }
  function clear() {
    pressed=false;
    $posible_stops=new Array();
  }
  const filterstations = () => {filtred_stops
    filtred_stops=new Array<{id:number,name:string}>
    let storageArr=new Array<string>;
    if (station_name.length>1) {
      for (let i = 0; i < station_names.length; i++) {
        if ((station_names[i]).toLowerCase().startsWith(station_name.toLowerCase())) {
          storageArr = [...storageArr, makeMatchBold(station_names[i])];
        }
      }
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
    search()
  }
  onMount(() => {mouted=true;$posible_stops=[]});
  onDestroy(()=> {$posible_stops=[]})

</script>
<form>
  <input placeholder="Vyber Stanici" style:width={$isPhone?"70%":"320px"} on:click={filterstations} on:input={filterstations} on:keyup={filterstations} bind:value={station_name}>
  <button on:click={search}>Hledej</button>
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
    {#each $posible_stops as posible_stop (posible_stop.id)}
    {#if !$stations.find((element)=>element==posible_stop.id)}
    <PosibleStop stop={posible_stop}>
    </PosibleStop>
    {/if}
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
	width: 390px;
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
button:active {
  border: 1px solid transparent;
  margin-left: 3px;
  padding: 10px;
  font-size: 16px;
  background-color: black;
  color: #FFF;
}
.stop_scroll{
  display: block;
  top:150px;
  bottom:8px;
  width:398px;
  overflow-y:scroll;
  position:fixed;
}
</style>