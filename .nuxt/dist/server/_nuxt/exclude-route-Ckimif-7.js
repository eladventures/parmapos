import { d as defineNuxtRouteMiddleware, e as abortNavigation, b as navigateTo } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "./client-only-DDIRjsuf.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "vue/server-renderer";
const excludeRoute = defineNuxtRouteMiddleware((to, from) => {
  const excludeRoutes = [
    // TODO: add the routes you want to exclude here
  ];
  if (excludeRoutes.includes(to.name)) {
    return abortNavigation();
  }
  return navigateTo("/");
});
export {
  excludeRoute as default
};
//# sourceMappingURL=exclude-route-Ckimif-7.js.map
