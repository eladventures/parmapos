import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter"
];
const _sfc_main = {
  setup() {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem("daisyui-theme", value);
    });
    return {
      theme,
      themes: THEMES
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ "data-theme": $setup.theme }, _attrs))}><div class="navbar fixed bg-base-100 z-40 shadow-sm"><div class="navbar-start"><a class="btn btn-ghost md:text-xl">Nuxt + Tailwind + DaisyUI Template</a></div><div class="navbar-center hidden lg:flex"></div><div class="navbar-end"><select class="select select-primary md:w-full md:max-w-xs"><option disabled selected>Select Theme</option><!--[-->`);
  ssrRenderList($setup.themes, (theme) => {
    _push(`<option${ssrRenderAttr("value", theme)}><span class="uppercase">${ssrInterpolate(theme)}</span></option>`);
  });
  _push(`<!--]--></select></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<footer class="footer footer-center p-10 bg-base-50"><div><h1 class="text-2xl md:text-3xl font-bold">Nuxt + Tailwind + DaisyUI Template</h1><p class="md:font-bold"> Create beautiful and fast websites without the tedious setup </p><p>Copyright \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} - All right reserved</p></div><div><div class="grid grid-flow-col gap-4"><a href="#" target="_blank"><i class="lab la-twitter text-4xl"></i></a><a href="https://github.com/mycurelabs/nuxt-tailwind-template" target="_blank"><i class="lab la-github text-4xl"></i></a><a href="#" target="_blank"><i class="lab la-facebook text-4xl"></i></a></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const default_copy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_copy as default };
//# sourceMappingURL=default copy-kHM1DbdQ.mjs.map
