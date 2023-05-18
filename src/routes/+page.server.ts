
import static_stop_data from './stops.json'

export const load= async() => {
    const fetchStationGroupsNames = async () =>{
        const all_station_names=new Array<string>;
        for (let i = 0; i < static_stop_data.stopGroups.length; i++) {
            all_station_names[i]=static_stop_data.stopGroups[i].name;
        }
        return all_station_names;
    };
    return {
        station_names: fetchStationGroupsNames()
    };
}
