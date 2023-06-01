import { j as json } from "../../../../chunks/index.js";
import { h as has_prop } from "../../../../chunks/index3.js";
import { b as url_position, o as options, c as url_stop_by_id } from "../../../../chunks/golem.js";
async function GET({ url }) {
  const trip_id = String(url.searchParams.get("trip_id") ?? "");
  const position = await (await fetch(url_position + trip_id, options)).json();
  if (has_prop(position, "error_status")) {
    return json({
      delay: null,
      position: null,
      type: null,
      last_stop: {
        time: null,
        id: null,
        name: null,
        position: null,
        platform_code: null
      },
      next_stop: {
        time: null,
        id: null,
        name: null,
        position: null,
        platform_code: null
      }
    });
  }
  const last_stop_id = position.properties.last_position.last_stop.id;
  const next_stop_id = position.properties.last_position.next_stop.id;
  let last_stop = {
    time: null,
    id: null,
    name: null,
    position: null,
    platform_code: null
  };
  if (last_stop_id == null) {
    last_stop = last_stop;
  } else {
    const last_stop_info = await (await fetch(url_stop_by_id + last_stop_id, options)).json();
    last_stop = {
      time: position.properties.last_position.last_stop.departure_time,
      id: last_stop_id,
      name: last_stop_info.properties.stop_name,
      position: last_stop_info.geometry.coordinates,
      platform_code: last_stop_info.properties.platform_code
    };
  }
  const next_stop_info = await (await fetch(url_stop_by_id + next_stop_id, options)).json();
  return json(
    {
      delay: position.properties.last_position.delay.actual,
      position: position.geometry.coordinates,
      last_stop,
      type: null,
      next_stop: {
        time: position.properties.last_position.next_stop.departure_time,
        id: next_stop_id,
        name: next_stop_info.properties.stop_name,
        position: next_stop_info.geometry.coordinates,
        platform_code: next_stop_info.properties.platform_code
      }
    }
  );
}
export {
  GET
};
