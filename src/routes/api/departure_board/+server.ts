import { error,json } from '@sveltejs/kit';
import { options, url_table, url_table_arival} from '../../golem'
import { prisma } from '$lib/server/prisma';

const route_type_names=["tram", "metro", "train","bus","ferry","funicular", "trolleybus"]


/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {
    const ids       = String(url.searchParams.get('ids') ?? '');
    const type      = String(url.searchParams.get('type') ?? 'departures');
    const number    = String(url.searchParams.get('number') ?? '8');
    let table;
    if(type=='departures'){
        table = await (await fetch(url_table+ids+"&total="+number, options)).json()
    }
    else if (type=='arivals') {
        table = await (await fetch(url_table_arival+ids+"&total="+number, options)).json()
    }
    for (let i = 0; i < table.departures.length; i++) {
        const route_name=table.departures[i].route.short_name
        const headsign  =table.departures[i].trip.headsign
        const gtfsid    ="L"+table.departures[i].trip.id.split('_')[0]
        const type      =(table.departures[i].route.is_night?"night ":"")+route_type_names[table.departures[i].route.type]
        // console.log(table.departures)
        // console.log(route_name,headsign,gtfsid,type);
        const db_res=await prisma.LineInfo.findMany({where:{
            headsign: headsign,
            stop_gtfsid:ids.trim(),
            gtfsid:gtfsid,
            type:type,
            name:route_name
        }});
        // console.log(db_res)
        if(db_res.length==0){
            try {
                await prisma.LineInfo.create(
                    {
                        data:{
                            headsign: headsign,
                            stop_gtfsid:ids.trim(),
                            gtfsid:gtfsid,
                            type:type,
                            name:route_name
                        }
                    }
                )     
            } catch (error) {
                
            }
        }
    }
    return json(table);
}