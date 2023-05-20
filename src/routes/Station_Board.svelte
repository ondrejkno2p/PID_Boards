<script lang="ts">
    export let bus_departures:Array<any>;
    export let ids:String;
    import Departure from "./Departure.svelte";
    import {afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';
    import { stations, isPhone,sidebar} from "./store";
    import {store_cookies} from './cookies'
    import Device from 'svelte-device-info'
    const width="49%";
    const mobile_width="98%";
    let load_int:number;
    let arivals=false;
    if (ids.search('S')>0) {
      close()
    }
    function close() {
      clearInterval(load_int);
      $stations = $stations.filter(
        function(value, index, arr){ 
			if (value != ids) return value;
		    }
      );
      if($isPhone){
        $stations=[];
        $sidebar=true;
      }
    }
    async function load(){
      let bus;
      if(arivals){
        bus = await (await fetch("/api/departure_board/?ids="+ids+"&type=arivals")).json();
      }
      else{
        bus = await (await fetch("/api/departure_board/?ids="+ids)).json();
      }
      station_name=bus.stops[0].stop_name;
      // +"("+bus.stops[0].platform_code+")";
      bus_departures=bus.departures;
    }
    let station_name='Stanice';
    let test = new Object;
    let test_name = new String;
    onMount(
      async () => {
        store_cookies($stations);
        if(load_int>0){
          clearInterval(load_int);
        }
        load();
        load_int = setInterval( async () => {load()}, 1000);
        // return async () => {clearInterval(load_int);};
      }
    );
    onDestroy(() => {
		clearInterval(load_int);
    store_cookies($stations);
	  });
</script>

<div class="board" style:width={$isPhone ? mobile_width: width}>
<div class="board_header">
  <a href={"/single?ids="+ids}><h1 style="float:left">{station_name}</h1></a>
  <p class ="close" on:keydown={close} on:click={close}>X</p>
</div>
{#if bus_departures.length>0}
<div class="time-table">
  <table>
    <tr class="first">
      <td style="width:6%;">
      Linka
      </td>
      <td>
      Směr
      </td>
      <td on:keydown on:click={async ()=>{arivals=!arivals; load()}} style="width:12%;">
      {arivals?'Příjezd':'Odjezd'}
      </td>
      {#if !$isPhone}
      <td style="width:12%;">
      Za
      </td>
      <td>
      Zpoždění
      </td>
      {/if}

    </tr>
    <!-- svelte-ignore empty-block -->
    
      {#each bus_departures as dep}
      <Departure arivals={arivals} departure={dep} ></Departure>
      {/each}
  </table>
</div>
{:else}
<div class="time-table">
  <table>
    <tr class="first">
      <td on:keydown on:click={async ()=>{arivals=!arivals; load()}} style="with:12%">
        Zádný {arivals?" Příjezd":" Odjezd"}
      </td>
    </tr>
  </table>
</div>
{/if}
</div>
<style>

.board{
  display: block;
  padding: 0px 0px;
  width: 49%;
  height: auto;
  background-color:rgb(0, 0, 0);
  color: white;
  float: left;
  border: 0px solid rgb(223, 222, 222);
  margin: 4px;
  overflow: scroll;
}

.close {
  background-color: rgb(0, 0, 0);
  color: #fff;
  float:inline-end;
  align-self: center;
  text-align: center;
  height: 26px;
  width: 26px;
  font-size: 23px;
  margin: 2px;
  border: 1px solid white;
}
.close:hover {
  background-color: #fff;
  color: #000;
  border-color: (0, 0, 0);
}
.board_header {
  display: block;
  top:0px;
  height: 60px;
  margin:0px;
  border-bottom: 12px solid white;
}
.board_header h1{
  display: block;
  height: 40px;
  margin-top:10px;
  margin-bottom:10px;
  margin-left: 10px;
  padding: 0px;
  float:inline-start
}
.time-table{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.time-table table {
  width: 100%;
  font-size: large;
}

tr.first {
  font-size: x-large;
}

a{
  color:#fff;
}

</style>
