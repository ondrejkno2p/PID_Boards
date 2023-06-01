import { c as create_ssr_component, e as escape } from "./index3.js";
const Clock_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-14en61h{background-color:#000;color:white;width:40%;height:50%;padding:0 0;margin-top:22.5px;margin-bottom:22.5px;margin-left:20px;margin-right:20px;float:right;text-align:right;display:block}",
  map: null
};
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { time = /* @__PURE__ */ new Date() } = $$props;
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  $$result.css.add(css);
  return `<h1 style="float: right;" class="svelte-14en61h">${escape(time.toLocaleString())}</h1>`;
});
export {
  Clock as C
};
