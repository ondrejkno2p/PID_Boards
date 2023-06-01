import { prisma } from "$lib/server/prisma"
import { options, url_all_stops, url_route } from "./golem"
import static_route_data from './route_stops.json'
const route_type_names=["tram", "metro", "train","bus","ferry","funicular", "trolleybus"]

async function parse_route_stop_data(stop_id:string) {
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
        }
    }
    return lines;
}

export async function preload_db(){
    const result1 = await (await fetch(url_all_stops+"?number=10000&offset=0", options)).json()
    const result2 = await (await fetch(url_all_stops+"?number=10000&offset=10000", options)).json()
    const features = result1.features.concat(result2.features)
    for (let i = 0; i < features.length; i++) {
        if(features[i].properties.stop_name!=null){
            const db_gtfsid=await prisma.Stop.findMany({where:{gtfsid:features[i].properties.stop_id}})
            if(db_gtfsid.length==0){
            console.log(db_gtfsid);
            try {
                await prisma.Stop.create(
                    {
                        data:{
                            gtfsid:  features[i].properties.stop_id,
                            name:    features[i].properties.stop_name,
                            lat:     features[i].geometry.coordinates[0],
                            lon:     features[i].geometry.coordinates[1],
                            platform:features[i].properties.platform_code || ""
                        }
                    }
                )
                const lines=await parse_route_stop_data(features[i].properties.stop_id);
                for (let j = 0; j< lines.length; j++) {
                    try {
                        await prisma.LineInfo.create(
                            {
                                data:{
                                    gtfsid:     lines[j].id,
                                    stop_gtfsid:features[i].properties.stop_id,
                                    name:       lines[j].name,
                                    headsign:   lines[j].direction,
                                    type:       lines[j].type
                                }
                            }
                        )      
                    } 
                    catch (error) {
                        console.log(features[i].properties.stop_id, features[i].properties.stop_name)
                    }
                }      
            } 
            catch (error) {
                console.log(features[i].properties.stop_id, features[i].properties.stop_name)
                // console.error(error)
            }
        }
        }
    }
}