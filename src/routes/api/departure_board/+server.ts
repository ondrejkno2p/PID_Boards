import { error,json } from '@sveltejs/kit';
import { options, url_table, url_table_arival} from '../../golem'

/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {
    const ids = String(url.searchParams.get('ids') ?? '');
    const type = String(url.searchParams.get('type') ?? 'departures');
    let table;
    if(type=='departures'){
        table = await (await fetch(url_table+ids, options)).json()
    }
    else if (type=='arivals') {
        table = await (await fetch(url_table_arival+ids, options)).json()
    }
    return json(table);
}