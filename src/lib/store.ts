import { writable } from 'svelte/store';
export let stations = writable(['U669Z1P','U669Z2P']);
export let posible_stops = writable(new Array<Stop>);
export let sidebar=writable(true);
export let isPhone=writable(false)
interface Stop {
    name: string;
    id: string;
    platform: string;
    lines: Array<any>
}
