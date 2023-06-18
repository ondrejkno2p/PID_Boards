import { GOLEM_API_KEY } from '$env/static/private'

export const url_table 			= 'https://api.golemio.cz/v2/pid/departureboards?mode=departures&minutesAfter=1200&ids=';
export const url_stop  		  	= 'https://api.golemio.cz/v2/gtfs/stops?limit=8&names=';
export const url_table_arival 	= 'https://api.golemio.cz/v2/pid/departureboards?mode=arrivals&minutesAfter=1200&ids=';
export const url_position		= 'https://api.golemio.cz/v2/vehiclepositions/'
export const url_stop_by_id		= 'https://api.golemio.cz/v2/gtfs/stops/'
export const url_trip			= 'https://api.golemio.cz/v2/gtfs/trips/'
export const url_all_stops		= 'https://api.golemio.cz/v2/gtfs/stops'
export const url_route			= 'https://api.golemio.cz/v2/gtfs/routes/'
export const url_stop_times		= 'https://api.golemio.cz/v2/gtfs/stoptimes/'
export const url_departures		= 'https://api.golemio.cz/v2/pid/departureboards?minutesBefore=30&minutesAfter=20080&mode=mixed&order=timetable&filter=routeHeadingOnce&total=30&ids='
export const options = {
	method: 'GET',
	headers: {
		'accept': 'application/json',
		'X-Access-Token': GOLEM_API_KEY
	}
};
// https://api.golemio.cz/v2/pid/docs/openapi/#/
