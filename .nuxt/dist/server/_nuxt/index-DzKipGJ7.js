import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, openBlock, createBlock } from "vue";
import "hookable";
import { u as useHead } from "./index-BabADJUJ.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { _ as _export_sfc } from "../server.mjs";
import "./client-only-DDIRjsuf.js";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./parmazip-logo-DNMBOJQA.js";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto md:max-w-6xl px-5 py-5 md:py-7" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/commons/GenericPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GenericPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ogBanner = "" + __buildAssetsURL("nuxtwind-daisy-og-banner.C8-CIcPr.jpg");
const featuresInventory = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5ASURBVHgB3VsJdFTVGf7umzfJkDAJkJCEBMhCWAICIQkECZZok6NFAbFWa7ELmADSo0esa20FLK0tIvUoFSG4gkoVFGRVlCg7ZANRA1HIDkGSQBYmme3d/u9h0ryZSWbJjEK+c955791371v++Zfv/+8dhh8BizkXBxaWD5UklgING8Y4nwSwaLoUDEh6OvZTOjKYwFkTHdVwxmsg8TzBKhUxrVi667vDRe/fdZcVPgaDj7A6/1Qo4HerhglpnONX9KQ+6AYYY9UcfKfArbu1rQGf/y4t4nv4AF4XyBsF5ckWxh7gnE+n077wARhIeyDsIu1alpUcUwwvwmsCeb2oMt3C+SJwno4fE4x9braYnlowIf4gvIBuC+S142VJFjOeJ5VOx08KvotB80BW8qDv0A14LBAyCfbascq/SRJ/ClcPTIyzZYbvjUsfnDrUCA/gkUBWHjkzzF8jbCB1HYerEydFLs6cnRJ1Em5CgJvIKai8V6fVHLmKhSFjhBXm3FcLy38HN+GWQHIKK58hz76Owmi3QuiPAc5YhMTxZk5B2aPujHPZZHIKK5aT4/gTrk0syU6OXuxKR5c0ZG1BxXPXsDBkLMopqlzsSkenAllTWPEXYoiP4FqHJC1ak1/5tLNuXZoMacZCEsYK9CAwEdOzxkZv7fR6ZxdeKawaK3BLLgPzCf3+6cBqRZN2/OzrB5Q5uurQZLbm8wBBsnzY84Qhg4da/E3rO7vqUCDnWeVSouKx6KngSFtTWO7Qn9iZzNqCswkc5q/gAWnzFhobL6OpsQUGQ6tyrtNpERbeD/7+WngNRKa4KA6fmziwpGOzaNcPplUkJ5UwRofrMSykN5FT+AzHTlbjnZ0F2FvwHarO1qG11ay6rtf3QnxMONISYzH/zsmI6K+3u4eFmFh1Yyvyqi85f6D8MVbLP+noDlVzxxNidTdR02cd2+JDApEeHQJfYcf+b/Cv1z/DgWNnXB4jf8usqSl4et4tiIuyf7cDFfUorm126V5Wq3XK/Alxe9vO1RrC2d9tjSi2T0D7MdU7UHbRAKNVQndhMJjw8msfY922PLgLeg2s356P/35chKfvn4q7Z0zE4D69IP6gwnF9A10WiEajWUS7n7edt3/+qrzqcaJgKbQdMH1EBMICrpQ8c0vrcPriZXQXtbUNWPniZtScq4c3cMPPRuOx+VNxy/AI5YPqWsz4sPica4M5rGJAr4TZI8O+lU/bfYVWY1nY1TgTaYU3hFFf34QXVmxyKgw/PxF9+gRCHxQg11O77Ltv7wksW7UDl1rMcBtUVbIaLv+x7VQxmVf3V0SSP/qFLK7O0GYm/be8g765O1XXamfcg4YJN2DIUwtU7daAQJz+xyvt5xLdI2f1dtReaHD4jL599Zhy4xiMn5CAfv16twtCkiRUVnyPI4eLcfTIKTQ3t9iN3bfvBJ59ZSeWLZwOdyExds/q/NOL5qUMaVAEwnVSOokq1JXBfrXn0euMuu4iNlwEs1js2i1B6irBzh15KD1jr8qiqMHMOyZjSvoYiFq7wAdBEBAdE6Fst06bhM0f7FO0whYr1ufitimjMCphMNwBEdAwxoV0OtzSZjKZ8DHq6hqxbat9HVin88dDD/8SP89MshOGtv4CBLPaDAID/THrtxm4bdr1Dk3pvsXvwuKJ0+e4Sd4JublcpDvfAh9j146jSnSwxW/uvQnxQ6NUbYEnv0Tc4gcxYt4dGL7gVwjf+AaEVrWZ3DZ9Im68KdHufqXVddj6ub32OAMX2DR5L5Toy5LpPSPgQ1gtVsX+bTEpbRQmpI5Qjhn5iaDCQ4h/PAvxj90HPR0Lxlb4na9GxFv/QUL2DAx440U6P9s+/q670zFoUH+7+656fz/chZyqrC08Ey2KgiZW4tzlgbU3z0Rj0kRVmzEqhhxob5xZ8qKqnYtXqPbRo6dgMllU1+Qocjv5DRnBh3IRsW4VdFWlnT5X9lNhH6xTtjp6h7P3PQxJpyNNuR6r/vORqu9XxZUwXDYigMzLHQhWzXiBGH2iW4PMJmguG1Qbs5ggG6Ftu8ZgUMY4cqQjR0YjiEJq8JG9CNm9BaaowbAG9nb6/EuTM0Fzw4h88yXl/LrRsfThOlUfK/mQE1+6znzbIHFrjEj3Hu/OoH57tiOUQm9HnJvzEOpvnIroZU+o2uUo05C6GzU1F+3uM3HSSGXPzEbo8w9A6hWA5tEpypjgQ3tIoGqm2ZQ8CeZ+/RFYfBz+VWVoSkxV2jUaAQkUVQryVTkaausch/auQMlekij7Dx/mbArastaOkLWjI4QWA4KO7pVfCo2pUxQT1BcdhnHAIBgHDlbMSl/geLZySHyknUAaGtwnkSSL60SKu+GuexDPYDLaM8iAwF4O+8p8JvjAlfyyasETCNv4JnqfyEdX0Ppp7NpkR+4uyLEHkw+BHj6GTKxsYTE7f2FddTn8vneekxhb7QXuiOA5BwsUyVy07miIiey4JT7Brk2GbXsbUw2inKSmRp27nDtXh4GDXCLHTlFRccGuLdDG0boCCjDB5ENkcbjuRS7MvFfZHKFkxVsO28P690HJyUpV27Fj31HOMpx8hWcKKlGe1IZTxRV21yMHuF/DIQrPRJotN3IGl8UZ8vGHCN63W9V28ebb0TD+BsQsVc9lcX8dSv+6gphoJPbvU7PHb74uR2MDhWXiNCUvvI2wzesRvPdjhaB1hcsjxqA+czptM5TzYrqPrQOVKX1c/AB4gAZRYmgm/XBZIDoKefov1UWd5pQ0hVXatreZzOgxcdCSTZvN/ydnLQajIqSpt6WiJW4Yyh9+Bro7/4Dw915DHxKMLUxhA3D+19m4dEMmJP8rr8uJM2zauM+u74hhUZQtB8FdkLU0CozD/YDtJmR7HkNCscVOym9KSqraz1sHx6H8kaU49dIGNCanKW3m0HBULlyCk2s2oz5jWrswZOzYdgRVVfb+484MzxYmkGbVCExg7lM6D3ArJWO22amsMTmvbMdZKip3RGv0EJQuegHVcxaiOGeLQvq4TaTa/UkBtn50yOGznl29w2F5wBno/coFUjuvrM1yhsjIEGRk2v9yTU0GPPfPDTh44Gv7QSRArlFzDLlYtPG9L7Dp/b2dPstCHOTdt/eQwA6CS27EUM4L2dqiyt9wSXq7sz5tNdVmSs42fHUWuspSaOvUKyJbB8VSHqJX0nbVy5N6X04Y234uM9YVy99HVWWtw2dFRoUqKf2E1ASag1HzCLmeIgvtEG1yGdJVJCUNRdbcqRA0zqeZOKRb2Mt5Z4ZrBU2nS4/aBGIlSa8/UQWztXu8to5yjOeXbaSPauyyX38K1YG9dQqBa2o2oOGS5/XckJBgPPzonbTv2tFKfixe8/vMtEvGflH3yyzNUSd5gqo3UWOB1FdHkeICRQeL5LlQAgJ0SEyKx/Gi02hp6XxdnKxNly410yyewSETdQfyc/KpBBE/dCDVbTvNqIvnJkYvVbxcTmH5KtKX+Y56TRrUFyNtZskkLyQ/F2m6cu4z/8UWD6pbbRAEhozU4fjkkGtr6+Ta7V2/TsfPpoyxu0a+9KW5KTEPKobFJL6vs5uU1F1WJqhUL8K6v4UEB2LT83Pw+jOzEBvlPqvMSB2GA288hB0r5+FfD7lWaZed7TvrP8MHH9h/rlaDXfJe0ZC1BytpJlkqoc92+GZ6qm5FBemgE303/72fpjLf3XIUZWXnUFdr719kbQgNDca4cfG4m6YxR8aFq65/Slqy/OXtipm5gj/Mvrm9JkPR7LQkacbMS4kytBODVwsqV0uQ5sJHiNTrkBwZ3GWfT05fgNEi0US3iZK/enKkzUoBSGadYeF9FLbbFeQZwX8v36hEJGdIJMHOXzCt7XRNdnL0PPmg/QkWblopMDEbPvqHhB99WLiTGqeWtEB2szqdH2Jj3a97yxr06BN3410yi+PHu+abFzuEbtHk92zbsXr2v7Ai15uL94OIS2QMuVIa8CemGeigkNMRDUYLrD/4q09JWxqNFngCiby+TMp2bj/aaR+52j8n6xdy763ZybHtTkitg1brEjLWdHgJGvrF++lcX+QS3IGMdWctiuxvZtyeBp2/Hz7aclApOneErIEZmclXnuPn/3jHaw5WEJVvo9/oVngBOgpzCaHOK+mO8E1tk+JPuouK8vNY99anytywjMHRYbh95mSMHBUt/+9mQ1ZyzD0d+9sJZM2x8lHMiq/QgyCXCc7SjJ7MQ0LIz4hytOS8UdT4j509Tr0a0S6OEluTs6wl6EGQs+yogaEIj+h7RRiQZ/yFxbbCUPp2dhMynYNkOtejZ+JQVtLgNBKUHefulGlxkc8iadWhx4FXwOI/y5EwZHQqkOyxMaXEsbPQ02DB7OzUiE4nkbvk4lnjBm+m3WL0EFBUeSA7NWZPV32cJidEaZeQR/4brnVI/DEKsSuddXMpW8tOiZGXQV+7kYfjyezxMc+50tUtPrgmv+wRckYu3fhqASWsj89Ljl3man+3CXJOXsU9EPhyOozE1Y0aquvPyk6O3+POII8yhjXHqoYJVmkTTexch6sRjH/BIP0+KymuHG7C4xRqdX6+liHsccqj/kyC6YWrAEQsJIHjL1kp0c/CQ3T/r+5Hy+OsIltBkWgGfkLIiZpZ4E/ePy62DN2A14pBa49Vj+NW6z/od/L5Es8OMJFWfM7M0qLsibGH4QV4vTq2Or9iiADpScqoMug0Gj4AA5PXZr4jWPmqOROivToV67PlZesPfxtk0PinC4J0swSWSQ8aim6AUvgSIk3brLDuEVvNe++bPML16Ts34Ov1du14Na96OBekWM6lRMqrUujBA61gVDrnwfSLy9VnK71OA11r5hJrpP1x8pFFDGKZv8jy7h07sAo/Av4Hjw5OpR1VsBcAAAAASUVORK5CYII=";
const featuresPOS = "data:image/png;base64,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";
const featuresReports = "data:image/png;base64,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";
const _imports_0 = "" + __buildAssetsURL("parmazip-hero.BrG5NuCK.png");
const _imports_1 = "" + __buildAssetsURL("parmazip-problem-1.CwD1R32M.png");
const _imports_2 = "" + __buildAssetsURL("parmazip-problem-2.DR-w1Xwx.png");
const _imports_3 = "" + __buildAssetsURL("parmazip-problem-3.QSFXPOz9.png");
const _imports_5 = "" + __buildAssetsURL("parmazip-fly.B140QJeI.png");
const _imports_6 = "" + __buildAssetsURL("parmazip-feature-1.DeXDH1-W.png");
const _imports_7 = "" + __buildAssetsURL("parmazip-feature-2.Fd5wHBhD.png");
const _imports_8 = "" + __buildAssetsURL("parmazip-feature-3.SF75Clfy.png");
const _imports_9 = "" + __buildAssetsURL("parmazip-video.1tr7eg7K.png");
const _imports_10 = "" + __buildAssetsURL("pharmacy-pos-screenshot.1_xE5jgZ.png");
const _imports_11 = "" + __buildAssetsURL("parmazip-lady.BroKemsb.png");
const _sfc_main = {
  components: {
    GenericPanel
  },
  setup() {
    useHead({
      title: "Parmazip",
      description: "The 'All-in-One' Pharmacy Management System.",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: ogBanner
        }
      ]
    });
    const features = [
      {
        src: featuresPOS,
        title: "Powerful Point-of-Sale",
        description: "Description here",
        alt: "Point-of-sales"
      },
      {
        src: featuresInventory,
        title: "Inventory Tracking",
        description: "DEscription here",
        alt: "Inventory tracking"
      },
      {
        src: featuresReports,
        title: "Pharmacy Tools",
        description: "Description here",
        alt: "Smart reports"
      }
    ];
    return {
      features
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_generic_panel = resolveComponent("generic-panel");
  _push(`<!--[--><section class="dark:bg-gray-800 dark:text-gray-100" data-v-2f108e6d><div class="max-w-8xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between" data-v-2f108e6d><div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-2xl lg:text-left" data-v-2f108e6d><span class="block mb-2 dark:text-violet-400 text-xl" data-v-2f108e6d>Pharmacy Management System (PMS)</span><h1 class="text-5xl font-bold leadi sm:text-5xl" data-v-2f108e6d> The &#39;All-in-One&#39; PMS for community drugstores. </h1><p class="mt-6 mb-8 text-lg sm:mb-12" data-v-2f108e6d> Modernize your pharmacy operations with a BIR-accredited POS and Inventory system designed for local pharmacies. It works offline, too! </p><div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" data-v-2f108e6d><a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white" data-v-2f108e6d>Join the waitlist</a></div></div><div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]" data-v-2f108e6d><img${ssrRenderAttr("src", _imports_0)} alt="" class="rounded-3xl object-contain h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]" data-v-2f108e6d></div></div></section><section class="bg-white mb-20" data-v-2f108e6d><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white" data-v-2f108e6d><h1 class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800" data-v-2f108e6d> Pharmacy Challenges </h1><p class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500" data-v-2f108e6d> Getting things organized to grow and establish a pharmacy business can be tough.... </p></div>`);
  _push(ssrRenderComponent(_component_generic_panel, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-20" data-v-2f108e6d${_scopeId}><div class="flex flex-col items-center" data-v-2f108e6d${_scopeId}><img class="mb-4" width="max"${ssrRenderAttr("src", _imports_1)} alt="parmazip" data-v-2f108e6d${_scopeId}><h2 class="uppercase text-lg text-center font-bold mb-4" data-v-2f108e6d${_scopeId}> Generic POS Setup </h2><p class="text-center text-md" data-v-2f108e6d${_scopeId}> Still using a generic POS to run &amp; manage your pharmacy needs? It’s like trying to fit a square peg into a round hole! </p></div><div class="flex flex-col items-center" data-v-2f108e6d${_scopeId}><img class="mb-4" width="max"${ssrRenderAttr("src", _imports_2)} alt="parmazip" data-v-2f108e6d${_scopeId}><h2 class="uppercase text-lg text-center font-bold mb-4" data-v-2f108e6d${_scopeId}> Monthly Payments </h2><p class="text-center text-md" data-v-2f108e6d${_scopeId}> Tired of paying for monthly hosting and cloud services only to be let down by poor internet connectivity? </p></div><div class="flex flex-col items-center" data-v-2f108e6d${_scopeId}><img class="mb-4" width="max"${ssrRenderAttr("src", _imports_3)} alt="parmazip" data-v-2f108e6d${_scopeId}><h2 class="uppercase text-lg text-center font-bold mb-4" data-v-2f108e6d${_scopeId}> Manual Workflows </h2><p class="text-center text-md" data-v-2f108e6d${_scopeId}> Tired of using Excel sheets and manual paperwork to collect, organize, and manage data? </p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 justify-center gap-20" }, [
            createVNode("div", { class: "flex flex-col items-center" }, [
              createVNode("img", {
                class: "mb-4",
                width: "max",
                src: _imports_1,
                alt: "parmazip"
              }),
              createVNode("h2", { class: "uppercase text-lg text-center font-bold mb-4" }, " Generic POS Setup "),
              createVNode("p", { class: "text-center text-md" }, " Still using a generic POS to run & manage your pharmacy needs? It’s like trying to fit a square peg into a round hole! ")
            ]),
            createVNode("div", { class: "flex flex-col items-center" }, [
              createVNode("img", {
                class: "mb-4",
                width: "max",
                src: _imports_2,
                alt: "parmazip"
              }),
              createVNode("h2", { class: "uppercase text-lg text-center font-bold mb-4" }, " Monthly Payments "),
              createVNode("p", { class: "text-center text-md" }, " Tired of paying for monthly hosting and cloud services only to be let down by poor internet connectivity? ")
            ]),
            createVNode("div", { class: "flex flex-col items-center" }, [
              createVNode("img", {
                class: "mb-4",
                width: "max",
                src: _imports_3,
                alt: "parmazip"
              }),
              createVNode("h2", { class: "uppercase text-lg text-center font-bold mb-4" }, " Manual Workflows "),
              createVNode("p", { class: "text-center text-md" }, " Tired of using Excel sheets and manual paperwork to collect, organize, and manage data? ")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_generic_panel, { class: "max-w-7xl border rounded-3xl border-gray-500" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section class="dark:bg-gray-800 dark:text-gray-100" data-v-2f108e6d${_scopeId}><div class="logo-container" data-v-2f108e6d${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" class="logo mt-20" data-v-2f108e6d${_scopeId}></div><div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl" data-v-2f108e6d${_scopeId}><div data-v-2f108e6d${_scopeId}><h2 class="-mt-10 text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50" data-v-2f108e6d${_scopeId}> Here comes Parmazip! </h2><p class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400" data-v-2f108e6d${_scopeId}> The &#39;All-in-One&#39; Pharmacy Management System for your needs. </p></div><div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-v-2f108e6d${_scopeId}><div data-v-2f108e6d${_scopeId}><div class="mt-5 space-y-12" data-v-2f108e6d${_scopeId}><div class="flex" data-v-2f108e6d${_scopeId}><div class="flex-shrink-0" data-v-2f108e6d${_scopeId}><div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" data-v-2f108e6d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" data-v-2f108e6d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-2f108e6d${_scopeId}></path></svg></div></div><div class="ml-4" data-v-2f108e6d${_scopeId}><h4 class="text-3xl font-medium leadi dark:text-gray-50" data-v-2f108e6d${_scopeId}> Offline-based System </h4><p class="mt-2 dark:text-gray-400" data-v-2f108e6d${_scopeId}> Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim. </p></div></div><div class="flex" data-v-2f108e6d${_scopeId}><div class="flex-shrink-0" data-v-2f108e6d${_scopeId}><div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" data-v-2f108e6d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" data-v-2f108e6d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-2f108e6d${_scopeId}></path></svg></div></div><div class="ml-4" data-v-2f108e6d${_scopeId}><h4 class="text-3xl font-medium leadi dark:text-gray-50" data-v-2f108e6d${_scopeId}> POS and Inventory Management Syystem in one </h4><p class="mt-2 dark:text-gray-400" data-v-2f108e6d${_scopeId}> Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis. </p></div></div><div class="flex" data-v-2f108e6d${_scopeId}><div class="flex-shrink-0" data-v-2f108e6d${_scopeId}><div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" data-v-2f108e6d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" data-v-2f108e6d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-2f108e6d${_scopeId}></path></svg></div></div><div class="ml-4" data-v-2f108e6d${_scopeId}><h4 class="text-3xl font-medium leadi dark:text-gray-50" data-v-2f108e6d${_scopeId}> BIR-accredited software </h4><p class="mt-2 dark:text-gray-400" data-v-2f108e6d${_scopeId}> At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus. </p></div></div><div class="flex" data-v-2f108e6d${_scopeId}><div class="flex-shrink-0" data-v-2f108e6d${_scopeId}><div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" data-v-2f108e6d${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7" data-v-2f108e6d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-2f108e6d${_scopeId}></path></svg></div></div><div class="ml-4" data-v-2f108e6d${_scopeId}><h4 class="text-3xl font-medium leadi dark:text-gray-50" data-v-2f108e6d${_scopeId}> Made for community pharmacies </h4><p class="mt-2 dark:text-gray-400" data-v-2f108e6d${_scopeId}> Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim. </p></div></div></div></div><div aria-hidden="true" class="mt-10 lg:mt-0" data-v-2f108e6d${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="mx-auto dark:bg-gray-500" data-v-2f108e6d${_scopeId}></div></div></div></section>`);
      } else {
        return [
          createVNode("section", { class: "dark:bg-gray-800 dark:text-gray-100" }, [
            createVNode("div", { class: "logo-container" }, [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Logo",
                class: "logo mt-20"
              })
            ]),
            createVNode("div", { class: "container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl" }, [
              createVNode("div", null, [
                createVNode("h2", { class: "-mt-10 text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50" }, " Here comes Parmazip! "),
                createVNode("p", { class: "max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400" }, " The 'All-in-One' Pharmacy Management System for your needs. ")
              ]),
              createVNode("div", { class: "grid lg:gap-8 lg:grid-cols-2 lg:items-center" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "mt-5 space-y-12" }, [
                    createVNode("div", { class: "flex" }, [
                      createVNode("div", { class: "flex-shrink-0" }, [
                        createVNode("div", { class: "flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            class: "w-7 h-7"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M5 13l4 4L19 7"
                            })
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "ml-4" }, [
                        createVNode("h4", { class: "text-3xl font-medium leadi dark:text-gray-50" }, " Offline-based System "),
                        createVNode("p", { class: "mt-2 dark:text-gray-400" }, " Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim. ")
                      ])
                    ]),
                    createVNode("div", { class: "flex" }, [
                      createVNode("div", { class: "flex-shrink-0" }, [
                        createVNode("div", { class: "flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            class: "w-7 h-7"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M5 13l4 4L19 7"
                            })
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "ml-4" }, [
                        createVNode("h4", { class: "text-3xl font-medium leadi dark:text-gray-50" }, " POS and Inventory Management Syystem in one "),
                        createVNode("p", { class: "mt-2 dark:text-gray-400" }, " Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis. ")
                      ])
                    ]),
                    createVNode("div", { class: "flex" }, [
                      createVNode("div", { class: "flex-shrink-0" }, [
                        createVNode("div", { class: "flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            class: "w-7 h-7"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M5 13l4 4L19 7"
                            })
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "ml-4" }, [
                        createVNode("h4", { class: "text-3xl font-medium leadi dark:text-gray-50" }, " BIR-accredited software "),
                        createVNode("p", { class: "mt-2 dark:text-gray-400" }, " At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus. ")
                      ])
                    ]),
                    createVNode("div", { class: "flex" }, [
                      createVNode("div", { class: "flex-shrink-0" }, [
                        createVNode("div", { class: "flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            class: "w-7 h-7"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M5 13l4 4L19 7"
                            })
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "ml-4" }, [
                        createVNode("h4", { class: "text-3xl font-medium leadi dark:text-gray-50" }, " Made for community pharmacies "),
                        createVNode("p", { class: "mt-2 dark:text-gray-400" }, " Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim. ")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", {
                  "aria-hidden": "true",
                  class: "mt-10 lg:mt-0"
                }, [
                  createVNode("img", {
                    src: _imports_5,
                    alt: "",
                    class: "mx-auto dark:bg-gray-500"
                  })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section data-v-2f108e6d><div class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white" data-v-2f108e6d><h1 class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800" data-v-2f108e6d> Why Parmazip? </h1><p class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500" data-v-2f108e6d> aka the &#39;All-in-One&#39; Pharmacy Management System </p></div><div class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100 text-gray-700" data-v-2f108e6d><div class="flex flex-col md:flex-row justify-center mt-4" data-v-2f108e6d><div class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border" , data-aos="zoom-in" data-v-2f108e6d><figure class="pt-3 px-3" data-v-2f108e6d><img${ssrRenderAttr("src", _imports_6)} alt="Shoes" class="border rounded-xl" data-v-2f108e6d></figure><div class="card-body" data-v-2f108e6d><h2 class="card-title text-center" data-v-2f108e6d>Stay organized using a PMS.</h2><p data-v-2f108e6d> On top of the standard sales and inventory tools of a POS, Parmazip offers pharmacy-centric features such as Prescription logsheet, Medication expiry alerts, Dangerous drugs monitoring, and Multi-user collaborative access, all while staying BIR-compliant. </p></div></div><div class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border" , data-aos="zoom-in" data-v-2f108e6d><figure class="pt-3 px-3" data-v-2f108e6d><img${ssrRenderAttr("src", _imports_7)} alt="Shoes" class="border rounded-xl" data-v-2f108e6d></figure><div class="card-body" data-v-2f108e6d><h2 class="card-title text-center" data-v-2f108e6d> Gain independence using an offline-based system. </h2><p data-v-2f108e6d> Utilize a standalone system and collaborate with users locally through a sync framework even without internet connection. Get data when you need it, as you need it. </p></div></div><div class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border" , data-aos="zoom-in" data-v-2f108e6d><figure class="pt-3 px-3" data-v-2f108e6d><img${ssrRenderAttr("src", _imports_8)} alt="Shoes" class="border rounded-xl" data-v-2f108e6d></figure><div class="card-body" data-v-2f108e6d><h2 class="card-title text-center" data-v-2f108e6d> Know and keep your data securely. </h2><p data-v-2f108e6d> Keep all data in a local system and benefit from reports that keep you on your toes while staying well-informed. Gain advantage from Sales reporting, Inventory analytics, Incoming and outgoing summaries, and BIR-compliant reports. </p></div></div></div></div></section><section data-v-2f108e6d><div class="dark:bg-violet-400" data-v-2f108e6d><div class="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900" data-v-2f108e6d><h1 class="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900" data-v-2f108e6d> Watch the Video </h1><p class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900" data-v-2f108e6d> Point-of-sale and Pharmacy Management System rolled into one purpose-built platform. </p><div class="flex flex-wrap justify-center" data-v-2f108e6d><button type="button" class="px-8 py-3 m-2 text-lg font-semibold bg-red-400 text-white rounded dark:bg-gray-800 dark:text-gray-50" data-v-2f108e6d> Play Video </button></div></div></div><img${ssrRenderAttr("src", _imports_9)} alt="" class="w-3/4 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" data-v-2f108e6d></section><div class="container flex flex-col items-center px-4 py-16 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white" data-v-2f108e6d><h1 class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800" data-v-2f108e6d> The Basics </h1></div><div class="mb-12 pb-[100px] pt-[30px] bg-white text-gray-700 overflow-hidden" id="how-it-works" data-v-2f108e6d><div class="mx-auto max-w-7xl px-5 text-center flex flex-col justify-center items-center" data-v-2f108e6d><div class="max-w-4xl" data-v-2f108e6d></div></div><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-2f108e6d><div style="${ssrRenderStyle({ "flex": "1" })}" class="flex justify-center md:justify-end items-center" data-v-2f108e6d><div class="w-full md:w-[500px] px-6" data-v-2f108e6d><!--[-->`);
  ssrRenderList($setup.features, (feature, index2) => {
    _push(`<div data-aos="fade-right"${ssrRenderAttr("data-aos-delay", 100 * index2)} class="flex mb-10 justify-center items-center" data-v-2f108e6d><div class="shrink pr-4" data-v-2f108e6d><img${ssrRenderAttr("src", feature.src)}${ssrRenderAttr("alt", feature.alt)} data-v-2f108e6d></div><div class="grow flex flex-col gap-1" data-v-2f108e6d><h2 class="font-bold text-3xl text-gray-700" data-v-2f108e6d>${ssrInterpolate(feature.title)}</h2><p class="font-general text-lg" data-v-2f108e6d>${ssrInterpolate(feature.description)}</p></div></div>`);
  });
  _push(`<!--]--></div></div><div style="${ssrRenderStyle({ "flex": "1" })}" class="hidden md:inline" data-v-2f108e6d><img data-aos="fade-left"${ssrRenderAttr("src", _imports_10)} alt="Parmazip POS Screenshot" data-v-2f108e6d></div></div></div><div class="-mt-40 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100" data-v-2f108e6d><h2 class="mb-8 text-4xl font-bold leadi text-center" data-v-2f108e6d> ...and all the tools made to simplify and automate your workflow and practice. </h2><ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3" data-v-2f108e6d><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Sales invoicing</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Receipt generation </span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Multiple payments</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Sales &amp; gross profit reports</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Barcode scanning</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Inventory tracking</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Stock level alerts</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>AI-enabled import tool</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Auto-reorder</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>P2P capability</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>User roles &amp; access</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Centralized patient database</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Prescription management</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Near-expiry alerts</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>QX and Z reading reports</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>EHR integration</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>PSC/PWD/Controlled substance tracking</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>In-app FAQs &amp; tutorials</span></li><li class="flex items-center space-x-2" data-v-2f108e6d><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-violet-400" data-v-2f108e6d><path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" data-v-2f108e6d></path><polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" data-v-2f108e6d></polygon></svg><span data-v-2f108e6d>Email support</span></li></ul></div><div class="container flex flex-col items-center px-4 py-16 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white" data-v-2f108e6d><h1 class="-mt-10 mb-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800" data-v-2f108e6d> Join the Waitlist </h1><a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white" data-v-2f108e6d>Join the waitlist</a></div><div data-v-2f108e6d><img${ssrRenderAttr("src", _imports_11)} alt="" class="w-3/4 mx-auto mb-12 rounded-3xl lg:mt-10 dark:bg-gray-500" data-v-2f108e6d></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2f108e6d"]]);
export {
  index as default
};
//# sourceMappingURL=index-DzKipGJ7.js.map
