import { c as create_ssr_component, a as subscribe, o as onDestroy, d as add_styles, e as escape } from "./index3.js";
import { w as writable } from "./index2.js";
let stations = writable(["U669Z1P", "U669Z2P"]);
let posible_stops = writable(new Array());
let sidebar = writable(true);
let isPhone = writable(false);
const Departure_svelte_svelte_type_style_lang = "";
const css = {
  code: ".departure.svelte-1a1kvxo.svelte-1a1kvxo{color:rgb(0, 0, 0);background-color:rgb(0, 0, 0);margin:0px 0px;padding:0px 0px;float:none}.departure.svelte-1a1kvxo td.svelte-1a1kvxo{color:rgb(0, 0, 0);background-color:rgb(255, 255, 255);text-align:center}tr.info.svelte-1a1kvxo a.svelte-1a1kvxo{color:inherit;text-decoration:inherit;display:block}tr.info.svelte-1a1kvxo.svelte-1a1kvxo{text-align:center;color:white;background-color:black}",
  map: null
};
const Departure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linka;
  let stanice;
  let odjezd;
  let za;
  let spozdeni;
  let $isPhone, $$unsubscribe_isPhone;
  $$unsubscribe_isPhone = subscribe(isPhone, (value) => $isPhone = value);
  let { departure } = $$props;
  let { arivals = false } = $$props;
  let { size } = $$props;
  function odj(dep) {
    if (arivals) {
      return new Date(dep.arrival_timestamp.scheduled);
    } else {
      return new Date(dep.departure_timestamp.scheduled);
    }
  }
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  if ($$props.departure === void 0 && $$bindings.departure && departure !== void 0)
    $$bindings.departure(departure);
  if ($$props.arivals === void 0 && $$bindings.arivals && arivals !== void 0)
    $$bindings.arivals(arivals);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  linka = departure.route.short_name;
  stanice = departure.trip.headsign;
  odjezd = odj(departure);
  za = departure.departure_timestamp.minutes;
  spozdeni = departure.delay;
  departure.trip.id;
  $$unsubscribe_isPhone();
  return `<tr class="departure svelte-1a1kvxo"${add_styles({ "font-size": size ? "xx-large" : "large" })}><td class="svelte-1a1kvxo">${escape(linka)}</td>
    <td class="svelte-1a1kvxo">${escape(stanice)}</td>
    <td class="svelte-1a1kvxo">${escape(odjezd.toLocaleTimeString().slice(0, -3))}</td>
    ${!$isPhone ? `<td class="svelte-1a1kvxo">${escape((Math.floor(za / 60) > 0 ? Math.floor(za / 60) + " h. " : "") + za % 60 + " m.")}</td>
    <td class="svelte-1a1kvxo">${spozdeni.is_available ? `${escape(spozdeni.minutes > 0 ? spozdeni.minutes % 60 + " m. " : "")}
    ${escape(spozdeni.seconds > 0 ? spozdeni.seconds % 60 + " s." : "")}` : ``}</td>` : ``}</tr>

${``}`;
});
export {
  Departure as D,
  sidebar as a,
  isPhone as i,
  posible_stops as p,
  stations as s
};
