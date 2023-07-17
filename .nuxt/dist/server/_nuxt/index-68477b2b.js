import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const wordlist = [
  "2+2=22",
  "1234abc",
  "Acrobat Reader",
  "Ad Radicem",
  "Admin123",
  "Extraterrestial",
  "And Mac",
  "Ækspert",
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
  "Födli",
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
  "Künstler",
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
  "Vaskebjørn",
  "Grævling",
  "Smørrebrød",
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
  "Κεφτεδάνθρωπος",
  "Μάλκα",
  "Πατάτα",
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
export {
  index as default
};
//# sourceMappingURL=index-68477b2b.js.map
