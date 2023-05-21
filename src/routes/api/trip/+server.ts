import { error,json } from '@sveltejs/kit';
import { has_prop } from 'svelte/internal';
import { options, url_table, url_table_arival,url_trip, url_position,url_stop_by_id} from '../../golem'

/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {
    const trip_id = String(url.searchParams.get('trip_id') ?? '');
    const trip = await (await fetch(url_trip+trip_id+"?includeStops=true&includeStopTimes=true", options)).json()
    
    return json(trip);
}