import { error,json } from '@sveltejs/kit';
import { options, url_stop} from '../../golem';
import static_stop_data from '../../stops.json';
interface stationdata {
    stopGroups:Array<any>;
}
interface stop {
    ids:string;
    lines:Array<line>;
}

interface line {
    name:string;
    direction:string;
    type:string;
}


/** @type {import('./$types').RequestHandler} */

function sub_stations_data(name:string) {
    const substations:Array<stop>=[];
    let lines:Array<any>=[];
    let n=0;
    for (let i = 0; i < static_stop_data.stopGroups.length; i++) {
        if(static_stop_data.stopGroups[i].name==name) {
            for (let j = 0; j < static_stop_data.stopGroups[i].stops.length; j++){
                lines=[]
                for (let k=0; k < static_stop_data.stopGroups[i].stops[j].lines.length; k++){
                    lines[k]={direction:static_stop_data.stopGroups[i].stops[j].lines[k].direction,
                            name     :static_stop_data.stopGroups[i].stops[j].lines[k].name,
                            type     :static_stop_data.stopGroups[i].stops[j].lines[k].type
                            };
                }
                substations[n]=
                {
                    ids:static_stop_data.stopGroups[i].stops[j].gtfsIds[0],
                    lines:lines
                };
                n+=1
            }
        }
    }   
    return substations;
}

export async function GET({ url }) {
    const station_name = String(url.searchParams.get('station_name') ?? '');
    const url_name = encodeURI(station_name.trim());
    const results = await (await fetch(url_stop+url_name, options)).json()
    console.log(station_name);
    return json({search_results:results, static_data:sub_stations_data(station_name)});
}