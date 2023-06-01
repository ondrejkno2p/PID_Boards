import { c as create_ssr_component, o as onDestroy, d as add_styles, e as escape, i as each, v as validate_component } from "../../../chunks/index3.js";
import { D as Departure } from "../../../chunks/Departure.js";
import "typescript-cookie";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".board.svelte-szjjwt.svelte-szjjwt{display:block;padding:0px 0px;width:90%;height:auto;background-color:rgb(0, 0, 0);color:white;float:left;border:0px solid rgb(223, 222, 222);margin:0px}.board_header.svelte-szjjwt.svelte-szjjwt{display:block;top:0px;height:80px;margin:0px;border-bottom:12px solid white}.board_header.svelte-szjjwt h1.svelte-szjjwt{display:block;height:60px;margin:0;margin-top:10px;margin-bottom:10px;padding:0px;font-size:xxx-large;text-align:center;width:100%}.time-table.svelte-szjjwt.svelte-szjjwt{width:100%;height:100%}.time-table.svelte-szjjwt table.svelte-szjjwt{width:100%;font-size:large}tr.first.svelte-szjjwt.svelte-szjjwt{font-size:xxx-large}a.svelte-szjjwt.svelte-szjjwt{color:#fff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bus_departures = [];
  let { data } = $$props;
  data.ids;
  let load_int;
  let arivals = false;
  let platform = "";
  let station_name = "Stanice";
  onDestroy(() => {
    clearInterval(load_int);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="board svelte-szjjwt"${add_styles({ "width": "100%" })}><div class="board_header svelte-szjjwt"><a href="/" class="svelte-szjjwt"><h1 style="float:left" class="svelte-szjjwt">${escape(station_name)}${escape(", " + platform)}</h1></a></div>
${bus_departures.length > 0 ? `<div class="time-table svelte-szjjwt"><table class="svelte-szjjwt"><tr class="first svelte-szjjwt"><td style="width:6%;">Linka
      </td>
      <td>Směr
      </td>
      <td style="width:12%;">${escape("Odjezd")}</td>
      <td style="width:12%;">Za
      </td>
      <td>Zpoždění
      </td></tr>
    
    
      ${each(bus_departures, (dep) => {
    return `${validate_component(Departure, "Departure").$$render($$result, { size: 1, arivals, departure: dep }, {}, {})}`;
  })}</table></div>` : `<div class="time-table svelte-szjjwt"><table class="svelte-szjjwt"><tr class="first svelte-szjjwt"><td style="with:12%">Zádný ${escape(" Odjezd")}</td></tr></table></div>`}
</div>`;
});
export {
  Page as default
};
