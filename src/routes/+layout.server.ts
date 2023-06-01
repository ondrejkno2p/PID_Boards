import { url_all_stops,options } from './golem';


export const load= async() => {
    const fetchStationGroupsNames = async () =>{
        const result1 = await (await fetch(url_all_stops+"?number=10000&offset=0", options)).json()
        const result2 = await (await fetch(url_all_stops+"?number=10000&offset=10000", options)).json()
        const features = result1.features.concat(result2.features)
        const result={features:features}
        let n=0;
        const all_station_names=new Array<string>;
        for (let i = 0; i < result.features.length; i++) {
            if(result.features[i].properties.stop_name!=null && !all_station_names.includes(result.features[i].properties.stop_name) ){
                    all_station_names[n]=result.features[i].properties.stop_name;
                    n+=1;
                }
        }
        return all_station_names;
    };
    return {
        station_names: fetchStationGroupsNames()
    };
}
