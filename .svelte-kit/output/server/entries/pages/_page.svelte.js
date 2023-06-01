import { c as create_ssr_component, a as subscribe, b as set_store_value, o as onDestroy, d as add_styles, f as add_attribute, e as escape, i as each, v as validate_component, j as merge_ssr_styles } from "../../chunks/index3.js";
import { C as Clock } from "../../chunks/Clock.js";
import { s as stations, a as sidebar, i as isPhone, D as Departure, p as posible_stops } from "../../chunks/Departure.js";
import { setCookie } from "typescript-cookie";
function store_cookies(stations2) {
  let cookie = "";
  for (let i = 0; i < stations2.length; i++) {
    cookie += stations2[i] + "-";
  }
  if (stations2.length > 0) {
    cookie = cookie.slice(0, -1);
  }
  setCookie("stations", cookie, { expires: 7, path: "", SameSite: "Lax" });
}
const Station_Board_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".board.svelte-1284akv.svelte-1284akv{display:block;padding:0px 0px;width:49%;height:auto;background-color:rgb(0, 0, 0);color:white;float:left;border:0px solid rgb(223, 222, 222);margin:4px;overflow:scroll}.close.svelte-1284akv.svelte-1284akv{background-color:rgb(0, 0, 0);color:#fff;float:inline-end;align-self:center;text-align:center;height:26px;width:26px;font-size:23px;margin:2px;border:1px solid white}.close.svelte-1284akv.svelte-1284akv:hover{background-color:#fff;color:#000;border-color:(0, 0, 0)}.board_header.svelte-1284akv.svelte-1284akv{display:block;top:0px;height:60px;margin:0px;border-bottom:12px solid white}.board_header.svelte-1284akv h1.svelte-1284akv{display:block;height:40px;margin-top:10px;margin-bottom:10px;margin-left:10px;padding:0px;float:inline-start\n}.time-table.svelte-1284akv.svelte-1284akv{width:100%;height:100%;overflow-y:scroll}.time-table.svelte-1284akv table.svelte-1284akv{width:100%;font-size:large}tr.first.svelte-1284akv.svelte-1284akv{font-size:x-large}a.svelte-1284akv.svelte-1284akv{color:#fff}",
  map: null
};
const width = "49%";
const mobile_width = "98%";
const Station_Board = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $stations, $$unsubscribe_stations;
  let $sidebar, $$unsubscribe_sidebar;
  let $isPhone, $$unsubscribe_isPhone;
  $$unsubscribe_stations = subscribe(stations, (value) => $stations = value);
  $$unsubscribe_sidebar = subscribe(sidebar, (value) => $sidebar = value);
  $$unsubscribe_isPhone = subscribe(isPhone, (value) => $isPhone = value);
  let { bus_departures } = $$props;
  let { ids } = $$props;
  let platform = "";
  let load_int;
  let arivals = false;
  if (ids.search("S") > 0) {
    close();
  }
  function close() {
    clearInterval(load_int);
    set_store_value(
      stations,
      $stations = $stations.filter(function(value, index, arr) {
        if (value != ids)
          return value;
      }),
      $stations
    );
    if ($isPhone) {
      set_store_value(stations, $stations = [], $stations);
      set_store_value(sidebar, $sidebar = true, $sidebar);
    }
  }
  let station_name = "Stanice";
  onDestroy(() => {
    clearInterval(load_int);
    store_cookies($stations);
  });
  if ($$props.bus_departures === void 0 && $$bindings.bus_departures && bus_departures !== void 0)
    $$bindings.bus_departures(bus_departures);
  if ($$props.ids === void 0 && $$bindings.ids && ids !== void 0)
    $$bindings.ids(ids);
  $$result.css.add(css$3);
  $$unsubscribe_stations();
  $$unsubscribe_sidebar();
  $$unsubscribe_isPhone();
  return `<div class="board svelte-1284akv"${add_styles({ "width": $isPhone ? mobile_width : width })}><div class="board_header svelte-1284akv"><a${add_attribute("href", "/single?ids=" + ids, 0)} class="svelte-1284akv"><h1 style="float:left" class="svelte-1284akv">${escape(station_name)}${escape(", " + platform)}</h1></a>
  <p class="close svelte-1284akv">X</p></div>
${bus_departures.length > 0 ? `<div class="time-table svelte-1284akv"><table class="svelte-1284akv"><tr class="first svelte-1284akv"><td style="width:6%;">Linka
      </td>
      <td>Směr
      </td>
      <td style="width:12%;">${escape("Odjezd")}</td>
      ${!$isPhone ? `<td style="width:16%;">Za
      </td>
      <td>Zpoždění
      </td>` : ``}</tr>
    
    
      ${each(bus_departures, (dep) => {
    return `${validate_component(Departure, "Departure").$$render($$result, { size: 0, arivals, departure: dep }, {}, {})}`;
  })}</table></div>` : `<div class="time-table svelte-1284akv"><table class="svelte-1284akv"><tr class="first svelte-1284akv"><td style="with:12%">Zádný ${escape(" Odjezd")}</td></tr></table></div>`}
</div>`;
});
const Posible_Stop_svelte_svelte_type_style_lang = "";
const Stop_Group_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "li.autocomplete-items.svelte-1e4ctj9{list-style:none;border-bottom:1px solid #d4d4d4;z-index:3;top:100%;left:0;right:0;padding:2px;padding-top:10px;padding-bottom:10px;font-size:16px;cursor:pointer;background-color:#fff;overflow:hidden}li.autocomplete-items.svelte-1e4ctj9:hover{background-color:#81921f;color:white}li.autocomplete-items.svelte-1e4ctj9:active{background-color:DodgerBlue !important;color:#ffffff}",
  map: null
};
const Stop_Group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stop_group_name } = $$props;
  if ($$props.stop_group_name === void 0 && $$bindings.stop_group_name && stop_group_name !== void 0)
    $$bindings.stop_group_name(stop_group_name);
  $$result.css.add(css$2);
  return `<li class="autocomplete-items svelte-1e4ctj9">${escape(stop_group_name)}
</li>`;
});
const Station_Picker_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.autocomplete.svelte-1p3n1hm{position:static;display:block;z-index:3;position:relative;margin:0;padding:0;top:0;width:324px;border:1px solid #ddd;background-color:#ddd}ul.posible_stop.svelte-1p3n1hm{z-index:3;margin:0;padding:0;top:0;width:390px;height:fit-content;border:1px solid #ddd;background-color:#ddd}input.svelte-1p3n1hm{border:1px solid transparent;background-color:#f1f1f1;padding-top:10px;padding-bottom:10px;padding-left:0;font-size:16px;margin:0;width:320px}button.svelte-1p3n1hm{border:1px solid transparent;margin-left:3px;padding:10px;font-size:16px;background-color:DodgerBlue;color:#fff}button.svelte-1p3n1hm:active{border:1px solid transparent;margin-left:3px;padding:10px;font-size:16px;background-color:black;color:#FFF}.stop_scroll.svelte-1p3n1hm{display:block;top:150px;bottom:8px;width:398px;overflow-y:scroll;position:fixed}",
  map: null
};
const Station_Picker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $posible_stops, $$unsubscribe_posible_stops;
  let $isPhone, $$unsubscribe_isPhone;
  let $$unsubscribe_stations;
  $$unsubscribe_posible_stops = subscribe(posible_stops, (value) => $posible_stops = value);
  $$unsubscribe_isPhone = subscribe(isPhone, (value) => $isPhone = value);
  $$unsubscribe_stations = subscribe(stations, (value) => value);
  let station_name = "";
  let { station_names } = $$props;
  let filtred_stops = new Array();
  onDestroy(() => {
    set_store_value(posible_stops, $posible_stops = [], $posible_stops);
  });
  if ($$props.station_names === void 0 && $$bindings.station_names && station_names !== void 0)
    $$bindings.station_names(station_names);
  $$result.css.add(css$1);
  $$unsubscribe_posible_stops();
  $$unsubscribe_isPhone();
  $$unsubscribe_stations();
  return `<form><input placeholder="Vyber Stanici" class="svelte-1p3n1hm"${add_styles({ "width": $isPhone ? "70%" : "320px" })}${add_attribute("value", station_name, 0)}>
  <button class="svelte-1p3n1hm">Hledej</button></form>

${filtred_stops.length > 0 ? `<ul class="autocomplete svelte-1p3n1hm"${add_styles(merge_ssr_styles("z-index:3;position:sticky;", { "width": $isPhone ? "70%" : "324px" }))}>${each(filtred_stops, (sn) => {
    return `${validate_component(Stop_Group, "StopGroup").$$render($$result, { stop_group_name: sn.name }, {}, {})}`;
  })}</ul>` : ``}

${``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-1j6uheg.svelte-1j6uheg{background-color:#000;color:white;width:100%-8px;position:fixed;height:90px;top:4px;right:8px;left:4px\n}.header.svelte-1j6uheg h1.svelte-1j6uheg{background-color:#000;color:white;width:35%;height:50%;padding:0 0;margin-top:22.5px;margin-bottom:22.5px;margin-left:20px;margin-right:20px;float:left;text-align:left;display:block}.header.svelte-1j6uheg h2.svelte-1j6uheg{background-color:#000;color:white;width:100%;height:30px;padding:0 0;margin-top:20px;margin-bottom:20px;float:left;display:block;text-align:center}.sidebar.svelte-1j6uheg.svelte-1j6uheg{margin-top:4px;height:100%-98px;float:left;width:402px;position:fixed;top:98px}.boards.svelte-1j6uheg.svelte-1j6uheg{float:left;width:100%}.main.svelte-1j6uheg.svelte-1j6uheg{display:block;position:fixed;left:420px;top:98px;right:8px;bottom:8px;display:block;overflow-y:scroll}.main_only.svelte-1j6uheg.svelte-1j6uheg{display:block;position:fixed;top:98px;right:12px;bottom:8px;left:8px;margin:0px;display:block;overflow-y:scroll}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $stations, $$unsubscribe_stations;
  let $isPhone, $$unsubscribe_isPhone;
  let $sidebar, $$unsubscribe_sidebar;
  $$unsubscribe_stations = subscribe(stations, (value) => $stations = value);
  $$unsubscribe_isPhone = subscribe(isPhone, (value) => $isPhone = value);
  $$unsubscribe_sidebar = subscribe(sidebar, (value) => $sidebar = value);
  let { bus_departures = new Array() } = $$props;
  stations.set([]);
  let { data } = $$props;
  if ($$props.bus_departures === void 0 && $$bindings.bus_departures && bus_departures !== void 0)
    $$bindings.bus_departures(bus_departures);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_stations();
  $$unsubscribe_isPhone();
  $$unsubscribe_sidebar();
  return `<div class="header svelte-1j6uheg"${add_styles({ "height": $isPhone ? "70px" : "90px" })}>
    ${!$isPhone ? `<h1 class="svelte-1j6uheg">Odjezdové Tabule PID
    </h1>

    ${validate_component(Clock, "Clock").$$render($$result, {}, {}, {})}` : `<h2 style="width:93%" class="svelte-1j6uheg">Odjezdové Tabule PID
    </h2>`}</div>
${$sidebar ? `<div class="sidebar svelte-1j6uheg"${add_styles({ "width": $isPhone ? "100%" : "402px" })}><div style="display: block ; float: left;">${validate_component(Station_Picker, "StationPicker").$$render($$result, { station_names: data.station_names }, {}, {})}</div></div>
<div class="main svelte-1j6uheg"><div class="boards svelte-1j6uheg">${each($stations, (station) => {
    return `${validate_component(Station_Board, "StationBoard").$$render($$result, { ids: station, bus_departures }, {}, {})}`;
  })}</div></div>` : `<div class="main_only svelte-1j6uheg"><div class="boards svelte-1j6uheg">${each($stations, (station) => {
    return `${validate_component(Station_Board, "StationBoard").$$render($$result, { ids: station, bus_departures }, {}, {})}`;
  })}</div></div>`}`;
});
export {
  Page as default
};
