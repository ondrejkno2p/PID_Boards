<script>
    import { onMount } from "svelte";
     /**
     * @type {{ stop_name: any; stop_id: any; platform_code: any; }}
     */
    export let stop;
    /**
     * @type {any}
     */
     export let lines;
     import Device from 'svelte-device-info'

    import {posible_stops, sidebar, isPhone} from "./store";

    $: name=stop.stop_name;
    $: ids=stop.stop_id;
    $: platform=stop.platform_code;
    import { stations } from "./store";
    function add_station() {
      let l=$stations.length;
      if($isPhone){
        $posible_stops=[];
        $stations[0]=ids;
        $sidebar=false;
      }
      else{
        $stations[l]=ids;
      }
    }
    onMount(
      () => {
        if(lines.length==0){
          // $posible_stops = $posible_stops.filter(
          //   function(value, index, arr){ 
			    //     if (value != stop) return value;
		      //   }
          // );
        };return 0;
      }
    )
    
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->

<li style:width={$isPhone?"100%":"398px"} class="posible_stop" on:click={add_station}>
  <p>
    {name}, {platform}
  </p>
  <table class="lines">
    {#if lines.length>0}
    {#each lines as line}
    <tr>
    <td> 
      {#if line.type=="tram"}
        <img class="icon" src="tram.png" alt="tram">
      {:else if line.type=="bus"}
      <img class="icon" src="bus.png" alt="bus">
      {:else if line.type=="metro"}
      <img class="icon" src="metro.png" alt="metro">
      {:else if line.type=="ferry"}
      <img class="icon" src="kotva.png" alt="ferry">
      {/if}
    </td>
    <td>
      {line.name}
    </td>
    <td>
     {line.direction}
    </td>
    </tr>
    {/each}
    {:else}
    <tr>
      <td style="width:30%">
      </td>
      <td>
        Konečná
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
    background-color: #81921f;
    color: white;
}

li.posible_stop:active {
  background-color: DodgerBlue !important;
  color: #ffffff;
}
table.lines{
  list-style: none;
  padding: 0;
  margin:0;
  border:0;
}
table.lines tr{
  padding: 0;
  margin:0;
  height: 34px;
  font-size: 10px;
  text-align: left;
}
table.lines td{
  padding: 0;
  margin:0;
  height: 34px;
  font-size: 18px;
  text-align: left;
}
img.icon{
  height: 34px;
  margin: 0px;
  padding: 0px;
  border: 0;
}
p{
  margin:0px;
  padding-top:2px;
  padding-bottom: 2px;
  padding-left:4px;
  font-size:20px;
  color: white;
  background-color: black;
}
</style>