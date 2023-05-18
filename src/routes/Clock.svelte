<script lang="ts">
    import { onMount } from 'svelte';
    export let time:Date = new Date() 

    onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 500);

		return () => {
			clearInterval(interval);
		};
	});
</script>
<h1 style="float: right;">{time.toLocaleString()}</h1>
<style>
h1{
  background-color: #000;
  color:white;
  width: 40%;
  height: 50%;
  padding: 0 0;
  margin-top: 22.5px;
  margin-bottom: 22.5px;
  margin-left: 20px;
  margin-right: 20px;
  float:right;
  text-align: right;
  display: block;
}
</style>
