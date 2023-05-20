import { error,json } from '@sveltejs/kit';
import { options, url_table, url_table_arival} from '../../golem'

/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {
    const ids = String(url.searchParams.get('ids') ?? '');
    const type = String(url.searchParams.get('type') ?? 'departures');
    const number = String(url.searchParams.get('number') ?? '8');
    let table;
    if(type=='departures'){
        table = await (await fetch(url_table+ids+"&total="+number, options)).json()
    }
    else if (type=='arivals') {
        table = await (await fetch(url_table_arival+ids+"&total="+number, options)).json()
    }
    return json(table);
}