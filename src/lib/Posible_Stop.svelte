<script>
    import { onMount } from "svelte";
    /**
     * @type {{ name: string; id: string; platform: string; lines: Array<any>; }}
     */
     export let stop;
    import Device from 'svelte-device-info'

    import {posible_stops, sidebar, isPhone} from "./store";

    $: name=stop.name;
    $: id=stop.id;
    $: platform=stop.platform;
    $: lines=stop.lines;
    import { stations } from "./store";
    function add_station() {
      let l=$stations.length;
      if($isPhone){
        $posible_stops=[];
        $stations[0]=id;
        $sidebar=false;
      }
      else{
        $stations[l]=id;
      }
    }
    
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->

<li style:width={$isPhone?"100%":"398px"} class="posible_stop" on:click={add_station}>
  <p>
    {name}{platform==null?"":", "+platform}
  </p>
  <table class="lines">
    {#if lines.length>0}
    {#each lines as line}
    <tr style="height:34px">
    <td style="width:34px"> 
      {#if line.type=="tram"}
        <img class="icon" src="tram.png" alt="tram">
      {:else if line.type=="night tram"}
      <img class="icon_night" src="tram.png" alt="tram">
      {:else if line.type=="bus"}
      <img class="icon" src="bus.png" alt="bus">
      {:else if line.type=="night bus"}
      <img class="icon_night" src="bus.png" alt="bus">
      {:else if line.type=="metro"}
      <img class="icon" src="metro.png" alt="metro">
      {:else if line.type=="ferry"}
      <img class="icon" src="kotva.png" alt="ferry">
      {:else if line.type=="train"}
      <img class="icon" src="train.png" alt="train">
      {/if}
    </td>
    <td>
      {line.name}
    </td>
    <td>
     {line.headsign}
    </td>
    </tr>
    {/each}
    {:else}
    <tr>
      <td style="width:30%">
        Žádné informace o linkách
      </td>
    </tr>
    {/if}
  </table>
</li>

<style>
li.posible_stop {
  list-style: none;
  border: 0px solid #d4d4d4;
  margin:0;
  padding: 0px;
  cursor: pointer;
  background-color: #fff;
}

li.posible_stop:hover {
  background-color:  dodgerblue  ;
  color: #FFFFFF;
}

li.posible_stop:active table{
  background-color: black ;
  color: white;
}

table.lines{
  list-style: none;
  padding: 0;
  margin:0;
  border:0;
  width: 100%;
}
table.lines tr{
  padding: 0;
  margin:0;
  height: 34px;
  font-size: 9px;
  text-align: left;
}
table.lines td{
  padding: 0;
  margin:0;
  height: 34px I !important;
  font-size: 18px;
  text-align: left;
}
img.icon{
  height: 34px;
  height: 34px;
  margin: 0px;
  padding: 0px;
  border: 0;
  border-radius: 10%;
  background-color: white;
}
p{
  margin:0px;
  padding-top:2px;
  padding-bottom: 2px;
  padding-left:4px;
  font-size:20px;
  color: white;
  background-color: black;
  border-bottom: white 1px solid;
}
img.icon_night{
  height: 34px;
  height: 34px;
  margin: 0px;
  padding: 0px;
  border: 0;
  -webkit-filter: invert(1);
  filter: invert(1);
  background-color: white;
  border-radius: 10%;
}
</style>