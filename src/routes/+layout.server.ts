import { url_all_stops,options } from '$lib/server/golem';

export const load = async() => {
    const result1 = await (await fetch(url_all_stops+"?number=10000&offset=0", options)).json()
    const result2 = await (await fetch(url_all_stops+"?number=10000&offset=10000", options)).json()
    let features=[];
    for (let i = 0; i < result1.features.length; i++) {
        features[i] = result1.features[i];
    }
    for (let i = 0; i < result2.features.length; i++) {
        features[i+result1.features.length] = result2.features[i];
    }
    let n=0;
    const all_station_names=new Array<string>;
    for (let i = 0; i < features.length; i++) {
        if(features[i].properties.stop_name!=null && !all_station_names.includes(features[i].properties.stop_name) ){
                all_station_names[n]=features[i].properties.stop_name;
                n+=1;
            }
    }
    return {
        station_names: all_station_names
    };
};
