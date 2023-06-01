import { c as create_ssr_component, v as validate_component, e as escape, i as each, f as add_attribute, t as to_number } from "../../../chunks/index3.js";
import { C as Clock } from "../../../chunks/Clock.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.icon.svelte-f2bixu.svelte-f2bixu{height:34px;margin:-4px;padding:0px;border:0;border-radius:10%;background-color:white}img.icon_night.svelte-f2bixu.svelte-f2bixu{height:34px;width:34px;margin-bottom:-4px;padding:0px 0px;border:0px;-webkit-filter:invert(1);filter:invert(1);background-color:white}table.stop.svelte-f2bixu.svelte-f2bixu{color:rgb(0, 0, 0);background-color:rgb(0, 0, 0);margin:0px 0px;padding:0px 0px;float:left;font-size:16px;position:absolute;top:98px;z-index:-1}table.stop.svelte-f2bixu tr.svelte-f2bixu{color:rgb(0, 0, 0);background-color:rgb(0, 0, 0);margin:0px 0px;padding:0px 0px;height:34px}table.stop.svelte-f2bixu td.svelte-f2bixu{color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);text-align:center;height:34px;padding:0}td.first.svelte-f2bixu.svelte-f2bixu{width:34px;height:34px;padding:0px}a.svelte-f2bixu.svelte-f2bixu{color:inherit;text-decoration:inherit;display:block}.header.svelte-f2bixu.svelte-f2bixu{background-color:#000;color:white;width:100%-8px;position:fixed;height:90px;top:4px;right:8px;left:4px\n}.header.svelte-f2bixu h1.svelte-f2bixu{background-color:#000;color:white;width:35%;height:50%;padding:0 0;margin-top:22.5px;margin-bottom:22.5px;margin-left:20px;margin-right:20px;float:left;text-align:left;display:block}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dmin;
  let dsec;
  let type;
  const route_type_names = ["tram", "metro", "train", "bus", "ferry", "funicular", "trolleybus"];
  let { data } = $$props;
  let position = data.position;
  data.trip.trip_id;
  function good_time(bad_time) {
    let shr = bad_time.split(":")[0];
    let hr = to_number(shr);
    hr = hr % 24;
    return hr + ":" + bad_time.split(":")[1] + ":" + bad_time.split(":")[2];
  }
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  dmin = Math.floor(position.delay / 60);
  dsec = position.delay % 60;
  type = (data.route.is_night ? "night " : "") + route_type_names[data.route.route_type];
  return `<div class="header svelte-f2bixu">${validate_component(Clock, "Clock").$$render($$result, {}, {}, {})}
  <h1 class="svelte-f2bixu"><a href="/" class="svelte-f2bixu">${escape(data.route.route_short_name)} směr ${escape(data.trip.trip_headsign)}</a></h1></div>
<table class="stop svelte-f2bixu">${each(data.trip.stop_times, (stop_time) => {
    return `<tr class="svelte-f2bixu"><td class="first svelte-f2bixu">${escape(stop_time.stop_sequence)}</td>
  <td class="svelte-f2bixu"><a${add_attribute("href", "/single?ids=" + stop_time.stop.properties.stop_id, 0)} class="svelte-f2bixu">${escape(stop_time.stop.properties.stop_name)}</a></td>
  <td class="svelte-f2bixu">${escape(good_time(stop_time.arrival_time))}</td>
  <td class="svelte-f2bixu">${stop_time.departure_time != stop_time.arrival_time ? `${escape(good_time(stop_time.departure_time))}` : ``}
  </td></tr>
${position.last_stop.id == stop_time.stop.properties.stop_id ? `<tr class="svelte-f2bixu"><td class="first svelte-f2bixu">${type == "tram" ? `<img class="icon svelte-f2bixu" src="tram.png" alt="tram">` : `${type == "night tram" ? `<img class="icon_night svelte-f2bixu" src="tram.png" alt="tram">` : `${type == "bus" ? `<img class="icon svelte-f2bixu" src="bus.png" alt="bus">` : `${type == "night bus" ? `<img class="icon_night svelte-f2bixu" src="bus.png" alt="bus">` : `${type == "metro" ? `<img class="icon svelte-f2bixu" src="metro.png" alt="metro">` : `${type == "ferry" ? `<img class="icon svelte-f2bixu" src="kotva.png" alt="ferry">` : `${type == "train" ? `<img class="icon svelte-f2bixu" src="train.png" alt="train">` : ``}`}`}`}`}`}`}</td>
  ${position.delay > 0 ? `<td class="stop svelte-f2bixu" style="color:red;">+${escape((dmin > 0 ? dmin + " m. " : "") + (dsec > 0 ? dsec + " s. " : ""))}</td><td class="svelte-f2bixu"></td><td class="svelte-f2bixu"></td>` : `<td class="svelte-f2bixu"></td><td class="svelte-f2bixu"></td><td class="svelte-f2bixu"></td>`}
</tr>` : ``}`;
  })}
</table>`;
});
export {
  Page as default
};
