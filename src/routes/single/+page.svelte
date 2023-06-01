<script lang="ts">
    let bus_departures=[];
    export let data;
    let ids=data.ids;
    import Departure from "../Departure.svelte";
    import {onDestroy, onMount } from 'svelte';
    import {store_cookies} from '../cookies'
    import {getCookie} from 'typescript-cookie';
    let load_int:number;
    let arivals=false;
    let platform="";
    async function load(){
      let bus;
      if(arivals){
        bus = await (await fetch("/api/departure_board/?ids="+ids+"&type=arivals"+"&number="+"18")).json();
      }
      else{
        bus = await (await fetch("/api/departure_board/?ids="+ids+"&number="+"18")).json();
      }
      station_name=bus.stops[0].stop_name;
      platform=bus.stops[0].platform_code;
      bus_departures=bus.departures;
    }
    let station_name='Stanice';
    let test = new Object;
    let test_name = new String;
    onMount(
      async () => {
        load_cookies();
        if(stations.find((value)=>{if(value==ids) return value;})){
        }
        else{
          stations[stations.length]=ids;
        }
        store_cookies(stations);
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
	});
  let stations=[];
  function load_cookies(){
    let cookie=getCookie('stations');
    if(cookie != undefined && cookie?.length>0) {
      let cookie_split=cookie.split('-');
      for (let i = 0; i < cookie_split?.length; i++) {
        stations[i]=cookie_split[i];
      }
    }
  }
</script>

<div class="board" style:width={"100%"}>
<div class="board_header">
  <a href="/"><h1 style="float:left">{station_name}{platform==null?"":", "+platform}</h1></a>
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
      <td style="width:12%;">
      Za
      </td>
      <td>
      Zpoždění
      </td>

    </tr>
    <!-- svelte-ignore empty-block -->
    
      {#each bus_departures as dep (dep.trip.id)}
      <Departure size={1} arivals={arivals} departure={dep} ></Departure>
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
  width: 90%;
  height: auto;
  background-color:rgb(0, 0, 0);
  color: white;
  float: left;
  border: 0px solid rgb(223, 222, 222);
  margin: 0px;
}

.board_header {
  display: block;
  top:0px;
  height: 80px;
  margin:0px;
  border-bottom: 12px solid white;
}
.board_header h1{
  display: block;
  height: 60px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px;
  font-size:xxx-large;
  text-align: center;
  width: 100%;
}
.time-table{
  width: 100%;
  height: 100%;
}

.time-table table {
  width: 100%;
  font-size: large;
}

tr.first {
  font-size: xxx-large;
}



a{
    color:#fff;
}
</style>
