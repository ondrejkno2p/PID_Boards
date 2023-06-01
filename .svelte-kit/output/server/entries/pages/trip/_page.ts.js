async function load({ url, fetch }) {
  const trip_id = url.searchParams.get("trip_id");
  const trip = await (await fetch("/api/trip?trip_id=" + trip_id)).json();
  const position = await (await fetch("/api/position?trip_id=" + trip_id)).json();
  const route_id = "L" + trip_id.split("_")[0];
  const route = await (await fetch("/api/route?route_id=" + route_id)).json();
  return { trip, position, route };
}
export {
  load
};
