import { j as json } from "../../../../chunks/index.js";
import "../../../../chunks/index3.js";
import { d as url_route, o as options } from "../../../../chunks/golem.js";
async function GET({ url }) {
  const route_id = String(url.searchParams.get("route_id") ?? "");
  const route = await (await fetch(url_route + route_id, options)).json();
  return json(route);
}
export {
  GET
};
