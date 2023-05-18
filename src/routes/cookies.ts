import { setCookie } from "typescript-cookie";
export function store_cookies(stations:Array<string>){
    let cookie=''
    for (let i = 0; i < stations.length; i++) {
      cookie+=stations[i]+'-';
    }
    if (stations.length>0){
      cookie=cookie.slice(0,-1);
    }
    setCookie('stations',cookie,{ expires: 7, path: '',SameSite:'Lax' });
}