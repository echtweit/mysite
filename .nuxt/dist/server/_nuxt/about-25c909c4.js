import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const _imports_0 = "" + __publicAssetsURL("img/profile.jpg");
const about_vue_vue_type_style_index_0_scoped_f3ba9df7_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f3ba9df7><h1 data-v-f3ba9df7>About</h1><article data-v-f3ba9df7><div class="profile" data-v-f3ba9df7><img${ssrRenderAttr("src", _imports_0)} alt="profile picture" data-v-f3ba9df7></div><div class="cv" data-v-f3ba9df7><h1 data-v-f3ba9df7>Jakob precht</h1><h2 data-v-f3ba9df7>Frontened Developer</h2><ul data-v-f3ba9df7><li data-v-f3ba9df7> 6 years experience </li><li data-v-f3ba9df7> Speaks: German, English &amp; Danish. </li><li data-v-f3ba9df7><p data-v-f3ba9df7> Things I am working with:<br data-v-f3ba9df7><br data-v-f3ba9df7> Languages and Structures: JavaScript, HTML, CSS, PHP<br data-v-f3ba9df7> Frameworks and Libraries: Vue, Nuxt, Node.js, jQuery, Three.js, p5.js<br data-v-f3ba9df7> CMS: WordPress, TYPO3, NEOS<br data-v-f3ba9df7> APIs: GraphQL, REST<br data-v-f3ba9df7> Platforms and Tools: Docker, DDEV, NPM, Git<br data-v-f3ba9df7> Design Tools: Adobe Suite, Figma, Adobe XD<br data-v-f3ba9df7></p></li></ul></div></article></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f3ba9df7"]]);
export {
  about as default
};
//# sourceMappingURL=about-25c909c4.js.map
