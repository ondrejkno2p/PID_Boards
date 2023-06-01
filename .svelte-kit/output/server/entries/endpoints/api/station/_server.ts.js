import { j as json } from "../../../../chunks/index.js";
import { p as prisma } from "../../../../chunks/prisma.js";
async function GET({ url }) {
  const station_name = String(url.searchParams.get("station_name") ?? "");
  const results = await prisma.Stop.findMany({ where: { name: station_name.trim() } });
  let line_results = [];
  for (let i = 0; i < results.length; i++) {
    line_results[i] = {
      ids: results[i].gtfsid,
      lines: await prisma.LineInfo.findMany({ where: { stop_gtfsid: results[i].gtfsid } })
      // lines: await parse_route_stop_data(results.features[i].properties.stop_id)
    };
  }
  return json({ search_results: results, static_data: line_results });
}
export {
  GET
};
