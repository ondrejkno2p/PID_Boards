export const url_table 			= 'https://api.golemio.cz/v2/pid/departureboards?mode=departures&minutesAfter=600&total=8&ids=';
export const url_stop  		  	= 'https://api.golemio.cz/v2/gtfs/stops?limit=8&names=';
export const url_table_arival 	= 'https://api.golemio.cz/v2/pid/departureboards?mode=arrivals&minutesAfter=600&total=8&ids=';
export const options = {
	method: 'GET',
	headers: {
		'accept': 'application/json',
		'X-Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZHJlamtubzJwQGdtYWlsLmNvbSIsImlkIjoxOTMzLCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2ODQwODQ1MzMsImV4cCI6MTE2ODQwODQ1MzMsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiI1NDMwZTRjNi03MTcwLTRlZGMtOGU2OC05ZjgzNzU4MTRhOGEifQ.NPkA_5EJY43JHBp5MUmqx-AeXCM5RbFRHXoAdlIgZP0'
	}
};
// https://api.golemio.cz/v2/pid/docs/openapi/#/
