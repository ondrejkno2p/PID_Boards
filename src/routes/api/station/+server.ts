import { error,json } from '@sveltejs/kit';
import { url_stop, options, url_stop_times, url_departures } from '../../../lib/server/golem'

interface line {
    name:string;
    headsign:string;
    type:string;
}

const route_type_names=["tram", "metro", "train","bus","ferry","funicular", "trolleybus"]

export async function GET({ url }) {
    const station_name = String(url.searchParams.get('station_name') ?? '');
    const results = await (await fetch(url_stop+station_name, options)).json();
    let stop_info = [];
    for (let i = 0; i < results.features.length; i++) {
        const {departures} = await (await fetch(url_departures+results.features[i].properties.stop_id, options)).json();
        let lines = [];
        for (let j = 0; j < departures.length; j++) {
            lines[j]={
                name: departures[j].route.short_name,
                headsign: departures[j].trip.headsign,
                type: (departures[j].route.is_night?"night ":"") + route_type_names[departures[j].route.type],
            } as line;
        }
        stop_info[i]={
            name: results.features[i].properties.stop_name,
            platform: results.features[i].properties.platform_code,
            id:results.features[i].properties.stop_id,
            lines:lines,
        }
    }
    return json({stops: stop_info});
}