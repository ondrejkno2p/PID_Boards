<script>
  /**
     * @type {{ route: { short_name: any; }; trip: { headsign: any; }; arrival_timestamp: {scheduled: string | number | Date; predicted: string | number | Date; minutes: any; }; departure_timestamp: {scheduled: string | number | Date; predicted: string | number | Date; minutes: any; }; delay: any; }}
  */
  export let departure;
  export let arivals=false;
    $: linka = departure.route.short_name;
    $: stanice = departure.trip.headsign;
    $: odjezd=odj(departure);
    $: za = departure.departure_timestamp.minutes  
    $: spozdeni =departure.delay
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


  import {isPhone} from './store';
</script>

<tr class="departure">
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
      {za+" m."}
    </td>
    <td>
    {#if spozdeni.is_available}
    {spozdeni.minutes > 0 ? spozdeni.minutes%60 + ' m. ' : '' }
    {spozdeni.seconds > 0 ? spozdeni.seconds%60 + ' s.' : '' }
    {/if}
    </td>
    {/if}
</tr>

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

</style>
