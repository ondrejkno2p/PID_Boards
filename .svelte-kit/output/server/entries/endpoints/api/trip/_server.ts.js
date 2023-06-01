import { j as json } from "../../../../chunks/index.js";
import "../../../../chunks/index3.js";
import { e as url_trip, o as options } from "../../../../chunks/golem.js";
async function GET({ url }) {
  const trip_id = String(url.searchParams.get("trip_id") ?? "");
  const trip = await (await fetch(url_trip + trip_id + "?includeStops=true&includeStopTimes=true", options)).json();
  return json(trip);
}
export {
  GET
};
