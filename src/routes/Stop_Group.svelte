<script lang="ts">
    export let stop_group_name:string;
</script>
<li class="autocomplete-items" on:click on:keydown on:keyup>
{stop_group_name}
</li>
<style>
    li.autocomplete-items {
    list-style: none;
      border-bottom: 1px solid #d4d4d4;
      z-index: 3;
      /*position the autocomplete items to be the same width as the container:*/
      top: 100%;
      left: 0;
      right: 0;
      padding: 2px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 16px;
      cursor: pointer;
      background-color: #fff;
    overflow: hidden;
    }
    
    li.autocomplete-items:hover {
      /*when hovering an item:*/
      background-color: #81921f;
        color: white;
    }
    
    li.autocomplete-items:active {
      /*when navigating through the items using the arrow keys:*/
      background-color: DodgerBlue !important;
      color: #ffffff;
    }
</style>