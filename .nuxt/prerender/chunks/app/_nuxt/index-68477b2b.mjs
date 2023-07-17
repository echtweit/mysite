import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/ufo/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/h3/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/destr/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/scule/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/klona/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/radix3/dist/index.mjs';

const wordlist = [
  "2+2=22",
  "1234abc",
  "Acrobat Reader",
  "Ad Radicem",
  "Admin123",
  "Extraterrestial",
  "And Mac",
  "\xC6kspert",
  "Bear",
  "Bunny",
  "Camel",
  "Clown",
  "Developer",
  "Dolphin",
  "Donkey",
  "Dominatrix",
  "Fairy",
  "Feline",
  "Force Unwrapper",
  "F\xF6dli",
  "Fridolin",
  "GPT",
  "Ryan Gosling",
  "Destroyer",
  "Is It Clientside?",
  "GPU Accelerator",
  "Wizard In Your Area",
  "idk ...",
  "Python",
  "Puppeteer",
  "Cookienotice",
  "TikToker",
  "Calamity",
  "Roadman",
  "Queen",
  "Colonel (AI)",
  "Russel Crowe",
  "Netrunner",
  "Johnny",
  "Agent",
  "Willy Nelson",
  "Aristocrat",
  "Loofa",
  "Enjoyer",
  "Sprayer",
  "Bedroom DJ",
  "Baba",
  "Freundschaftsbeziehung",
  "Guybrush",
  "Piratos",
  "Buccaneer",
  "And Club Mate",
  "Ballmer Peaker",
  "Lover",
  "Reactor",
  "Whatever",
  "Gang",
  "Goblin",
  "MSA-Key Proprietor",
  "Interrail ticket scalper",
  "Guru",
  "Hunter12",
  "Idiot Savant",
  "Implementor",
  "Inquisitor",
  "Jakal",
  "Jesus",
  "Kanelsnegl",
  "Krokodil",
  "Laundromat",
  "Loader",
  "Meatball",
  "Spaghetti",
  "CSR Forger",
  "Injector",
  "Traktor",
  "Cross Originer",
  "Is it even Reactive?",
  "Vueur",
  "This . This .",
  "Polyfiller",
  "IE11 Mourner",
  "Can I User",
  "Sans Head",
  "nth-of(2n + 1)",
  "*:not(div)",
  "Sudoku",
  "Design from Indesign",
  "Light Theme User",
  "Scrolljacker",
  "Bloater",
  "Lighthouse",
  "Matrose",
  "Lemur",
  "Moroder",
  "Ninjago",
  "Null",
  "Onion",
  "K\xFCnstler",
  "Koder",
  "XSS Creator",
  "Philosopher",
  "Pogostick",
  "Pokemon",
  "Polizei",
  "Poodle",
  "Potato",
  "Kanzler",
  "Hefe",
  "Fefe",
  "Jefe",
  "Fata Morgana",
  "Lijer",
  "Minkukel",
  "Slons",
  "Helaas Pindakaas",
  "Prince Light",
  "Vaskebj\xF8rn",
  "Gr\xE6vling",
  "Sm\xF8rrebr\xF8d",
  "Fluffer",
  "Pindsvin",
  "Wordlist",
  'target="_blank"',
  "Qwerty",
  "Samurai X",
  "Saucier",
  "Bundesrat",
  "Seeder",
  "Servetrice",
  "Emir",
  "Twinkie",
  "Undefiner",
  "\u039A\u03B5\u03C6\u03C4\u03B5\u03B4\u03AC\u03BD\u03B8\u03C1\u03C9\u03C0\u03BF\u03C2",
  "\u039C\u03AC\u03BB\u03BA\u03B1",
  "\u03A0\u03B1\u03C4\u03AC\u03C4\u03B1",
  "Anarchist"
];
const _sfc_main = {
  data() {
    return {
      words: wordlist,
      currentIndex: 0,
      currentWord: "",
      typing: false,
      speed: 50
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      let usedWords = [];
      const getRandomIndex = () => {
        return Math.floor(Math.random() * this.words.length);
      };
      const typeWriter = (txt) => {
        let i = 0;
        const len = txt.length;
        const type = () => {
          if (i < len) {
            this.currentWord += txt.charAt(i);
            i++;
            setTimeout(type, this.speed);
          } else {
            this.typing = false;
            setTimeout(this.displayNextWord, 2e3);
          }
        };
        type();
      };
      this.displayNextWord = () => {
        this.currentWord = "";
        let randomIndex;
        let randomWord;
        do {
          randomIndex = getRandomIndex();
          randomWord = this.words[randomIndex];
        } while (usedWords.includes(randomWord));
        usedWords.push(randomWord);
        const maxUsedWords = 10;
        if (usedWords.length > maxUsedWords) {
          usedWords.shift();
        }
        this.typing = true;
        typeWriter(randomWord);
      };
      this.displayNextWord();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1> Jakob Precht<br> Frontend ${ssrInterpolate($data.currentWord)}</h1><p>This is my rag-tag portfolio site</p><br><a href="mailto:precht.jakob@gmail.com">Contact me</a><br>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Learn more about me`);
      } else {
        return [
          createTextVNode("Learn more about me")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`See projects i have worked on`);
      } else {
        return [
          createTextVNode("See projects i have worked on")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-68477b2b.mjs.map
