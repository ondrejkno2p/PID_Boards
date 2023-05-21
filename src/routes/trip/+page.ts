/** @type {import('./$types').PageLoad} */
export async function load({url, route,fetch }) {
    const trip_id= url.searchParams.get('trip_id');
    const trip = await (await fetch("/api/trip?trip_id="+trip_id)).json();
    const position = await (await fetch("/api/position?trip_id="+trip_id)).json();
    return {trip:trip,position:position};
}