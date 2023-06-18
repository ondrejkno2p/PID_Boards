import { error,json } from '@sveltejs/kit';
import { has_prop } from 'svelte/internal';
import { options, url_table, url_table_arival,url_trip, url_position,url_stop_by_id, url_route} from '../../../lib/server/golem'

/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {
    const route_id = String(url.searchParams.get('route_id') ?? '');
    const route = await (await fetch(url_route+route_id, options)).json()
    return json(route);
}