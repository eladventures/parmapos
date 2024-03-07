import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './parmazip-logo-DNMBOJQA.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="container flex justify-between items-center h-12 mx-auto"><div class="flex items-center"><a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2"><img${ssrRenderAttr("src", _imports_0)} alt="Your Logo" class="object-contain h-6 mt-1 w-auto"></a><ul class="items-stretch hidden space-x-3 lg:flex"><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1">How it works</a></li><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1">Features</a></li><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1">Pricing</a></li><li class="flex"><a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1">About Us</a></li></ul></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BPT2S-zR.mjs.map
