import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YIK4ARCI.js";

// src/app/features/home/components/quick-links/quick-links.ts
var QuickLinks = class _QuickLinks {
  static \u0275fac = function QuickLinks_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuickLinks)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickLinks, selectors: [["app-quick-links"]], decls: 2, vars: 0, template: function QuickLinks_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "quick-links works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickLinks, [{
    type: Component,
    args: [{ selector: "app-quick-links", imports: [], template: "<p>quick-links works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickLinks, { className: "QuickLinks", filePath: "app/features/home/components/quick-links/quick-links.ts", lineNumber: 9 });
})();

// src/app/features/home/components/call-to-action/call-to-action.ts
var CallToAction = class _CallToAction {
  static \u0275fac = function CallToAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CallToAction)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CallToAction, selectors: [["app-call-to-action"]], decls: 2, vars: 0, template: function CallToAction_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "call-to-action works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CallToAction, [{
    type: Component,
    args: [{ selector: "app-call-to-action", imports: [], template: "<p>call-to-action works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CallToAction, { className: "CallToAction", filePath: "app/features/home/components/call-to-action/call-to-action.ts", lineNumber: 9 });
})();

// src/app/features/home/components/statistics/statistics.ts
var Statistics = class _Statistics {
  static \u0275fac = function Statistics_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Statistics)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Statistics, selectors: [["app-statistics"]], decls: 2, vars: 0, template: function Statistics_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "statistics works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Statistics, [{
    type: Component,
    args: [{ selector: "app-statistics", imports: [], template: "<p>statistics works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Statistics, { className: "Statistics", filePath: "app/features/home/components/statistics/statistics.ts", lineNumber: 9 });
})();

// src/app/features/home/components/introduction/introduction.ts
var Introduction = class _Introduction {
  static \u0275fac = function Introduction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Introduction)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Introduction, selectors: [["app-introduction"]], decls: 2, vars: 0, template: function Introduction_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "introduction works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Introduction, [{
    type: Component,
    args: [{ selector: "app-introduction", imports: [], template: "<p>introduction works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Introduction, { className: "Introduction", filePath: "app/features/home/components/introduction/introduction.ts", lineNumber: 9 });
})();

// src/app/features/home/components/hero/hero.ts
var _forTrack0 = ($index, $item) => $item.label;
function Hero_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
var Hero = class _Hero {
  stats = [
    {
      value: "3.5+",
      label: "Years Experience"
    },
    {
      value: "20+",
      label: "Projects"
    },
    {
      value: "10+",
      label: "Technologies"
    },
    {
      value: "100%",
      label: "Passion"
    }
  ];
  static \u0275fac = function Hero_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero, selectors: [["app-hero"]], decls: 30, vars: 0, consts: [[1, "hero"], [1, "container"], [1, "left"], [1, "badge"], [1, "buttons"], ["routerLink", "/projects", 1, "primary"], ["routerLink", "/assistant", 1, "secondary"], [1, "social"], ["href", "https://github.com/YOUR_USERNAME", "target", "_blank"], ["href", "https://linkedin.com/in/YOUR_PROFILE", "target", "_blank"], [1, "right"], [1, "profile-card"], ["src", "/assets/images/profile.jpg", "alt", "Balaji"], [1, "stats"], [1, "card"]], template: function Hero_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, " \u{1F44B} Welcome to my portfolio ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h1");
      \u0275\u0275text(6, " Hi, I'm ");
      \u0275\u0275domElementStart(7, "span");
      \u0275\u0275text(8, "Balaji");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "h2");
      \u0275\u0275text(10, " MEAN Stack Developer & AI Engineer ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p");
      \u0275\u0275text(12, " Passionate Full Stack Developer with 3.5+ years of experience building scalable web applications using Angular, Node.js, MongoDB, AWS, GraphQL and Artificial Intelligence. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 4)(14, "a", 5);
      \u0275\u0275text(15, " View Projects ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "a", 6);
      \u0275\u0275text(17, " AI Assistant ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "div", 7)(19, "a", 8);
      \u0275\u0275text(20, " GitHub ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "a", 9);
      \u0275\u0275text(22, " LinkedIn ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(23, "div", 10)(24, "div", 11);
      \u0275\u0275domElement(25, "img", 12);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(26, "section", 13)(27, "div", 1);
      \u0275\u0275repeaterCreate(28, Hero_For_29_Template, 5, 2, "div", 14, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275repeater(ctx.stats);
    }
  }, styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  padding: 100px 0 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #EEF2FF,\n      #F8FAFC);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  padding: 0 24px;\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 60px;\n  align-items: center;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 18px;\n  background: #E0E7FF;\n  color: #4F46E5;\n  border-radius: 30px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 58px;\n  margin-bottom: 20px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4F46E5;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  color: #334155;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  color: #64748B;\n  font-size: 18px;\n  margin-bottom: 35px;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 30px;\n}\n.primary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  background: #4F46E5;\n  color: white;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.secondary[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  border: 2px solid #4F46E5;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #4F46E5;\n  font-weight: 600;\n}\n.social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n  color: #0F172A;\n}\n.profile-card[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n}\n.profile-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.stats[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n.stats[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #4F46E5;\n  margin-bottom: 10px;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .profile-card[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n  .buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .social[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .stats[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .stats[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profile-card[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n}\n/*# sourceMappingURL=hero.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [], template: `<section class="hero">\r
\r
    <div class="container">\r
\r
        <div class="left">\r
\r
            <span class="badge">\r
                \u{1F44B} Welcome to my portfolio\r
            </span>\r
\r
            <h1>\r
\r
                Hi,\r
\r
                I'm\r
\r
                <span>Balaji</span>\r
\r
            </h1>\r
\r
            <h2>\r
\r
                MEAN Stack Developer\r
\r
                &\r
\r
                AI Engineer\r
\r
            </h2>\r
\r
            <p>\r
\r
                Passionate Full Stack Developer with 3.5+ years of experience\r
                building scalable web applications using Angular, Node.js,\r
                MongoDB, AWS, GraphQL and Artificial Intelligence.\r
\r
            </p>\r
\r
            <div class="buttons">\r
\r
                <a\r
                    routerLink="/projects"\r
                    class="primary">\r
\r
                    View Projects\r
\r
                </a>\r
\r
                <a\r
                    routerLink="/assistant"\r
                    class="secondary">\r
\r
                    AI Assistant\r
\r
                </a>\r
\r
            </div>\r
\r
            <div class="social">\r
\r
                <a\r
                    href="https://github.com/YOUR_USERNAME"\r
                    target="_blank">\r
\r
                    GitHub\r
\r
                </a>\r
\r
                <a\r
                    href="https://linkedin.com/in/YOUR_PROFILE"\r
                    target="_blank">\r
\r
                    LinkedIn\r
\r
                </a>\r
\r
            </div>\r
\r
        </div>\r
\r
        <div class="right">\r
\r
            <div class="profile-card">\r
\r
                <img\r
                    src="/assets/images/profile.jpg"\r
                    alt="Balaji">\r
\r
            </div>\r
\r
        </div>\r
\r
    </div>\r
\r
</section>\r
\r
<section class="stats">\r
\r
    <div class="container">\r
\r
        @for(stat of stats; track stat.label){\r
\r
        <div class="card">\r
\r
            <h2>{{stat.value}}</h2>\r
\r
            <p>{{stat.label}}</p>\r
\r
        </div>\r
\r
        }\r
\r
    </div>\r
\r
</section>`, styles: ["/* src/app/features/home/components/hero/hero.scss */\n.hero {\n  padding: 100px 0 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #EEF2FF,\n      #F8FAFC);\n}\n.container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 0 24px;\n  display: grid;\n  grid-template-columns: 1fr 420px;\n  gap: 60px;\n  align-items: center;\n}\n.badge {\n  display: inline-block;\n  padding: 8px 18px;\n  background: #E0E7FF;\n  color: #4F46E5;\n  border-radius: 30px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\nh1 {\n  font-size: 58px;\n  margin-bottom: 20px;\n}\nh1 span {\n  color: #4F46E5;\n}\nh2 {\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  color: #334155;\n}\np {\n  line-height: 1.8;\n  color: #64748B;\n  font-size: 18px;\n  margin-bottom: 35px;\n}\n.buttons {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 30px;\n}\n.primary {\n  padding: 14px 28px;\n  background: #4F46E5;\n  color: white;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.secondary {\n  padding: 14px 28px;\n  border: 2px solid #4F46E5;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #4F46E5;\n  font-weight: 600;\n}\n.social {\n  display: flex;\n  gap: 20px;\n}\n.social a {\n  text-decoration: none;\n  font-weight: 600;\n  color: #0F172A;\n}\n.profile-card {\n  width: 380px;\n  height: 380px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n}\n.profile-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.stats {\n  padding: 60px 0;\n}\n.stats .container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.card {\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.card h2 {\n  font-size: 42px;\n  color: #4F46E5;\n  margin-bottom: 10px;\n}\n.card p {\n  margin: 0;\n}\n@media (max-width: 992px) {\n  .container {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .profile-card {\n    margin: auto;\n  }\n  .buttons {\n    justify-content: center;\n  }\n  .social {\n    justify-content: center;\n  }\n  .stats .container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  h1 {\n    font-size: 40px;\n  }\n  .stats .container {\n    grid-template-columns: 1fr;\n  }\n  .profile-card {\n    width: 280px;\n    height: 280px;\n  }\n}\n/*# sourceMappingURL=hero.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero, { className: "Hero", filePath: "app/features/home/components/hero/hero.ts", lineNumber: 9 });
})();

// src/app/features/home/pages/home/home.ts
var Home = class _Home {
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 5, vars: 0, template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero")(1, "app-introduction")(2, "app-statistics")(3, "app-quick-links")(4, "app-call-to-action");
    }
  }, dependencies: [QuickLinks, CallToAction, Statistics, Introduction, Hero], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [QuickLinks, CallToAction, Statistics, Introduction, Hero], template: "<app-hero></app-hero>\r\n\r\n<app-introduction></app-introduction>\r\n\r\n<app-statistics></app-statistics>\r\n\r\n<app-quick-links></app-quick-links>\r\n\r\n<app-call-to-action></app-call-to-action>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "app/features/home/pages/home/home.ts", lineNumber: 14 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-I25OXSNU.js.map
