const url_table = "https://api.golemio.cz/v2/pid/departureboards?mode=departures&minutesAfter=1200&ids=";
const url_table_arival = "https://api.golemio.cz/v2/pid/departureboards?mode=arrivals&minutesAfter=1200&ids=";
const url_position = "https://api.golemio.cz/v2/vehiclepositions/";
const url_stop_by_id = "https://api.golemio.cz/v2/gtfs/stops/";
const url_trip = "https://api.golemio.cz/v2/gtfs/trips/";
const url_all_stops = "https://api.golemio.cz/v2/gtfs/stops";
const url_route = "https://api.golemio.cz/v2/gtfs/routes/";
const options = {
  method: "GET",
  headers: {
    "accept": "application/json",
    "X-Access-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZHJlamtubzJwQGdtYWlsLmNvbSIsImlkIjoxOTMzLCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2ODQwODQ1MzMsImV4cCI6MTE2ODQwODQ1MzMsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiI1NDMwZTRjNi03MTcwLTRlZGMtOGU2OC05ZjgzNzU4MTRhOGEifQ.NPkA_5EJY43JHBp5MUmqx-AeXCM5RbFRHXoAdlIgZP0"
  }
};
export {
  url_table_arival as a,
  url_position as b,
  url_stop_by_id as c,
  url_route as d,
  url_trip as e,
  url_all_stops as f,
  options as o,
  url_table as u
};
