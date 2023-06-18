<script lang="ts">
    import { onMount } from "svelte";
    import Clock from "$lib/Clock.svelte";
    import StationBoard from '$lib/Station_Board.svelte';
    import StationPicker from "$lib/Station_Picker.svelte";
    export let bus_departures= new Array;
    import { sidebar,stations, isPhone} from "$lib/store";
    import {getCookie} from 'typescript-cookie';
    import Device from 'svelte-device-info'
    stations.set([])
    export let data:{station_names:Array<string>};
    onMount(()=>{
      $isPhone=Device.isMobile || Device.isPhone || Device.isTablet || Device.isLegacyTouchDevice;
      load_cookies();
    });
    function load_cookies(){
      let cookie=getCookie('stations');
      if(cookie != undefined && cookie?.length>0) {
        let cookie_split=cookie.split('-');
        for (let i = 0; i < cookie_split?.length; i++) {
          $stations[i]=cookie_split[i];
        }
      }
    }
</script>
<div class="header" style:height={$isPhone?"70px":"90px"}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    {#if !$isPhone}
    <h1 on:click={() => {if(!$isPhone){$sidebar=!$sidebar;}else{$sidebar=true;$stations=[];}}}>
      Odjezdové Tabule PID
    </h1>

    <Clock></Clock>
    {:else}
    <h2 style="width:93%" on:click={() => {if(!$isPhone){$sidebar=!$sidebar;}else{$sidebar=true;$stations=[];}}}>
      Odjezdové Tabule PID
    </h2>
    {/if}
</div>
{#if $sidebar}
<div class="sidebar" style:width={$isPhone?"100%":"402px"}>
  <div style="display: block ; float: left;">
    <StationPicker station_names={data.station_names}></StationPicker>
  </div>
</div>
<div class="main">
  <div class="boards">
    {#each $stations as station (station)}
    <StationBoard ids={station} bus_departures={bus_departures}></StationBoard>
    {/each}
  </div>
</div>
{:else}
<div class="main_only">
  <div class="boards">
    {#each $stations as station (station)}
    <StationBoard ids={station} bus_departures={bus_departures}></StationBoard>
    {/each}
  </div>
</div>
{/if}

<style>
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
.header h2{
  background-color: #000;
  color:white;
  width: 100%;
  height: 30px;
  padding: 0 0;
  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  display: block;
  text-align: center;
}
.sidebar{
  margin-top: 4px;
  height: 100%-98px;
  float: left;
  width: 402px;
  position: fixed;
  top:98px;
}
.boards{
  float:left;
  width: 100%;
}
.main {
    display: block;
    position: fixed;
    left:420px;
    top:98px;
    right: 8px; 
    bottom: 8px;
    display: block;
    overflow-y:scroll;
}
.main_only {
    display: block;
    position: fixed;
    top:98px;
    right:12px; 
    bottom: 8px;
    left:8px;
    margin: 0px;
    display: block;
    overflow-y:scroll;
}
</style>
