export const url_table 			= 'https://api.golemio.cz/v2/pid/departureboards?mode=departures&minutesAfter=1200&ids=';
export const url_stop  		  	= 'https://api.golemio.cz/v2/gtfs/stops?limit=8&names=';
export const url_table_arival 	= 'https://api.golemio.cz/v2/pid/departureboards?mode=arrivals&minutesAfter=1200&ids=';
export const url_position		= 'https://api.golemio.cz/v2/vehiclepositions/'
export const url_stop_by_id		= 'https://api.golemio.cz/v2/gtfs/stops/'
export const url_trip			= 'https://api.golemio.cz/v2/gtfs/trips/'
export const url_all_stops		= 'https://api.golemio.cz/v2/gtfs/stops'
export const url_route			= 'https://api.golemio.cz/v2/gtfs/routes/'
export const options = {
	method: 'GET',
	headers: {
		'accept': 'application/json',
		'X-Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZHJlamtubzJwQGdtYWlsLmNvbSIsImlkIjoxOTMzLCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2ODQwODQ1MzMsImV4cCI6MTE2ODQwODQ1MzMsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiI1NDMwZTRjNi03MTcwLTRlZGMtOGU2OC05ZjgzNzU4MTRhOGEifQ.NPkA_5EJY43JHBp5MUmqx-AeXCM5RbFRHXoAdlIgZP0'
	}
};
// https://api.golemio.cz/v2/pid/docs/openapi/#/
