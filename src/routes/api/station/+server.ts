import { error,json } from '@sveltejs/kit';
import { options, url_all_stops, url_route, url_stop} from '../../golem';
import static_stop_data from '../../stops.json';
import static_route_data from '../../route_stops.json'
import { prisma } from "$lib/server/prisma";

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

interface route_info{
    name: string;
    direction: string;
    type: string;
}

const route_type_names=["tram", "metro", "train","bus","ferry","funicular", "trolleybus"]

/** @type {import('./$types').RequestHandler} */

function sub_stations_data(name:string) {
    const substations:Array<stop>=[];
    let lines:Array<any>=[];
    let n=0;
    for (let i = 0; i < static_stop_data.stopGroups.length; i++) {
        for (let j = 0; j < static_stop_data.stopGroups[i].stops.length; j++){
            lines=[]
            for (let k=0; k < static_stop_data.stopGroups[i].stops[j].lines.length; k++){
                lines[k]={direction:static_stop_data.stopGroups[i].stops[j].lines[k].direction,
                        name     :static_stop_data.stopGroups[i].stops[j].lines[k].name,
                        type     :(static_stop_data.stopGroups[i].stops[j].lines[k].isNight==true?"night ":"" )+static_stop_data.stopGroups[i].stops[j].lines[k].type
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
    return substations;
}

async function parse_route_stop_data(stop_id:string) {
    const substations:Array<line>=[];
    let lines:Array<any>=[];
    let line:Array<any>=[];
    let n=0;
    let direction_id:Array<string>=[];
    let direction_stop:Array<any>=[];
    let route_id:Array<string>=[];
    let route:Array<string>=[];
    const routes=static_route_data.filter(function(value, index, arr){ 
        if (value.stop_id == stop_id) return value;
    })
    for (let i = 0; i < routes.length; i++) {
        line = static_route_data.filter(
            function(value, index, arr){ 
                if (value.direction_id == routes[i].direction_id && value.route_id == routes[i].route_id) return value
            }
        );
        route_id[i]=line[line.length-1].route_id;
        direction_id[i]=line[line.length-1].stop_id;
        direction_stop[i]=await (await fetch(url_all_stops+"/"+direction_id[i], options)).json();
        route[i]=await (await fetch(url_route+route_id[i], options)).json();
        lines[i]={
            id: route_id[i],
            name: route[i].route_short_name,
            type: (route[i].is_night?"night ":"")+route_type_names[route[i].route_type],
            direction: direction_stop[i].properties.stop_name,
            direction_id: direction_id[i]
        }
    }
    return lines;
}

export async function GET({ url }) {
    const station_name = String(url.searchParams.get('station_name') ?? '');
    const results = await prisma.Stop.findMany({where:{name:station_name.trim()}});
    // console.log(results)
    // const url_name = encodeURI(station_name.trim());
    // const results = await (await fetch(url_stop+url_name, options)).json()
    let line_results = [];
    for (let i = 0; i < results.length; i++) {
        line_results[i]={
            ids:results[i].gtfsid,
            lines: await prisma.LineInfo.findMany({where:{stop_gtfsid:results[i].gtfsid}})
            // lines: await parse_route_stop_data(results.features[i].properties.stop_id)
        }
    }
    return json({search_results:results, static_data:line_results});
}