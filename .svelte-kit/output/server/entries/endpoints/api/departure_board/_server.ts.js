import { j as json } from "../../../../chunks/index.js";
import { u as url_table, o as options, a as url_table_arival } from "../../../../chunks/golem.js";
import { p as prisma } from "../../../../chunks/prisma.js";
const route_type_names = ["tram", "metro", "train", "bus", "ferry", "funicular", "trolleybus"];
async function GET({ url }) {
  const ids = String(url.searchParams.get("ids") ?? "");
  const type = String(url.searchParams.get("type") ?? "departures");
  const number = String(url.searchParams.get("number") ?? "8");
  let table;
  if (type == "departures") {
    table = await (await fetch(url_table + ids + "&total=" + number, options)).json();
  } else if (type == "arivals") {
    table = await (await fetch(url_table_arival + ids + "&total=" + number, options)).json();
  }
  for (let i = 0; i < table.departures.length; i++) {
    const route_name = table.departures[i].route.short_name;
    const headsign = table.departures[i].trip.headsign;
    const gtfsid = "L" + table.departures[i].trip.id.split("_")[0];
    const type2 = (table.departures[i].route.is_night ? "night " : "") + route_type_names[table.departures[i].route.type];
    const db_res = await prisma.LineInfo.findMany({ where: {
      headsign,
      stop_gtfsid: ids.trim(),
      gtfsid,
      type: type2,
      name: route_name
    } });
    if (db_res.length == 0) {
      try {
        await prisma.LineInfo.create(
          {
            data: {
              headsign,
              stop_gtfsid: ids.trim(),
              gtfsid,
              type: type2,
              name: route_name
            }
          }
        );
      } catch (error2) {
      }
    }
  }
  return json(table);
}
export {
  GET
};
