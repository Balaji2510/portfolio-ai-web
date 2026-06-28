import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YIK4ARCI.js";

// src/app/features/about/components/interests/interests.ts
function Interests_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
var Interests = class _Interests {
  interests = [
    "Volleyball",
    "Artificial Intelligence",
    "Cloud Computing",
    "Open Source",
    "Photography"
  ];
  static \u0275fac = function Interests_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Interests)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Interests, selectors: [["app-interests"]], decls: 6, vars: 0, consts: [[1, "chips"]], template: function Interests_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section")(1, "h2");
      \u0275\u0275text(2, " Interests ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 0);
      \u0275\u0275repeaterCreate(4, Interests_For_5_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.interests);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Interests, [{
    type: Component,
    args: [{ selector: "app-interests", imports: [], template: '<section>\r\n\r\n<h2>\r\n\r\nInterests\r\n\r\n</h2>\r\n\r\n<div class="chips">\r\n\r\n@for(item of interests;track item){\r\n\r\n<span>\r\n\r\n{{item}}\r\n\r\n</span>\r\n\r\n}\r\n\r\n</div>\r\n\r\n</section>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Interests, { className: "Interests", filePath: "app/features/about/components/interests/interests.ts", lineNumber: 9 });
})();

// src/app/features/about/components/achievements/achievements.ts
function Achievements_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F3C6} ", item_r1, " ");
  }
}
var Achievements = class _Achievements {
  achievements = [
    "20+ Projects Completed",
    "3.5 Years Experience",
    "AWS Cloud Experience",
    "Angular Expert"
  ];
  static \u0275fac = function Achievements_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Achievements)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Achievements, selectors: [["app-achievements"]], decls: 6, vars: 0, template: function Achievements_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section")(1, "h2");
      \u0275\u0275text(2, " Achievements ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "ul");
      \u0275\u0275repeaterCreate(4, Achievements_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.achievements);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Achievements, [{
    type: Component,
    args: [{ selector: "app-achievements", imports: [], template: "<section>\r\n\r\n<h2>\r\n\r\nAchievements\r\n\r\n</h2>\r\n\r\n<ul>\r\n\r\n@for(item of achievements;track item){\r\n\r\n<li>\r\n\r\n\u{1F3C6} {{item}}\r\n\r\n</li>\r\n\r\n}\r\n\r\n</ul>\r\n\r\n</section>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Achievements, { className: "Achievements", filePath: "app/features/about/components/achievements/achievements.ts", lineNumber: 9 });
})();

// src/app/features/about/components/education/education.ts
var _forTrack0 = ($index, $item) => $item.degree;
function Education_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.degree, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.college, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.year, " ");
  }
}
var Education = class _Education {
  education = [
    {
      degree: "B.E Computer Science",
      college: "ABC Engineering College",
      year: "2018 - 2022"
    }
  ];
  static \u0275fac = function Education_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Education)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Education, selectors: [["app-education"]], decls: 5, vars: 0, consts: [[1, "item"]], template: function Education_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section")(1, "h2");
      \u0275\u0275text(2, " Education ");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(3, Education_For_4_Template, 7, 3, "div", 0, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.education);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Education, [{
    type: Component,
    args: [{ selector: "app-education", imports: [], template: '<section>\r\n\r\n<h2>\r\n\r\nEducation\r\n\r\n</h2>\r\n\r\n@for(item of education;track item.degree){\r\n\r\n<div class="item">\r\n\r\n<h3>\r\n\r\n{{item.degree}}\r\n\r\n</h3>\r\n\r\n<p>\r\n\r\n{{item.college}}\r\n\r\n</p>\r\n\r\n<span>\r\n\r\n{{item.year}}\r\n\r\n</span>\r\n\r\n</div>\r\n\r\n}\r\n\r\n</section>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Education, { className: "Education", filePath: "app/features/about/components/education/education.ts", lineNumber: 9 });
})();

// src/app/features/about/components/biography/biography.ts
var Biography = class _Biography {
  summary = "";
  static \u0275fac = function Biography_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Biography)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Biography, selectors: [["app-biography"]], inputs: { summary: "summary" }, decls: 5, vars: 1, consts: [[1, "biography"]], template: function Biography_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, " About Me ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.summary, " ");
    }
  }, styles: ["\n\n.biography[_ngcontent-%COMP%] {\n  line-height: 1.8;\n}\np[_ngcontent-%COMP%] {\n  color: #64748B;\n}\n/*# sourceMappingURL=biography.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Biography, [{
    type: Component,
    args: [{ selector: "app-biography", imports: [], template: '<div class="biography">\r\n\r\n    <h2>\r\n\r\n        About Me\r\n\r\n    </h2>\r\n\r\n    <p>\r\n\r\n        {{ summary }}\r\n\r\n    </p>\r\n\r\n</div>', styles: ["/* src/app/features/about/components/biography/biography.scss */\n.biography {\n  line-height: 1.8;\n}\np {\n  color: #64748B;\n}\n/*# sourceMappingURL=biography.css.map */\n"] }]
  }], null, { summary: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Biography, { className: "Biography", filePath: "app/features/about/components/biography/biography.ts", lineNumber: 9 });
})();

// src/app/features/about/components/profile-card/profile-card.ts
var ProfileCard = class _ProfileCard {
  profile;
  static \u0275fac = function ProfileCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileCard, selectors: [["app-profile-card"]], inputs: { profile: "profile" }, decls: 10, vars: 7, consts: [[1, "card"], [3, "src", "alt"], [3, "href"]], template: function ProfileCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "img", 1);
      \u0275\u0275domElementStart(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h4");
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "a", 2);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275domProperty("src", ctx.profile.profileImage, \u0275\u0275sanitizeUrl)("alt", ctx.profile.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.profile.name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.profile.designation, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.profile.location, " ");
      \u0275\u0275advance();
      \u0275\u0275domProperty("href", "mailto:" + ctx.profile.email, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.profile.email, " ");
    }
  }, styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);\n}\nimg[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-bottom: 20px;\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\nh4[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  margin-bottom: 20px;\n}\na[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=profile-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileCard, [{
    type: Component,
    args: [{ selector: "app-profile-card", imports: [], template: `<div class="card">\r
\r
    <img\r
        [src]="profile.profileImage"\r
        [alt]="profile.name">\r
\r
    <h2>\r
\r
        {{ profile.name }}\r
\r
    </h2>\r
\r
    <h4>\r
\r
        {{ profile.designation }}\r
\r
    </h4>\r
\r
    <p>\r
\r
        {{ profile.location }}\r
\r
    </p>\r
\r
    <a\r
        [href]="'mailto:' + profile.email">\r
\r
        {{ profile.email }}\r
\r
    </a>\r
\r
</div>`, styles: ["/* src/app/features/about/components/profile-card/profile-card.scss */\n.card {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);\n}\nimg {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-bottom: 20px;\n}\nh2 {\n  margin-bottom: 10px;\n}\nh4 {\n  color: #4F46E5;\n  margin-bottom: 20px;\n}\na {\n  color: #4F46E5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=profile-card.css.map */\n"] }]
  }], null, { profile: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileCard, { className: "ProfileCard", filePath: "app/features/about/components/profile-card/profile-card.ts", lineNumber: 10 });
})();

// src/app/features/about/pages/about/about.ts
var About = class _About {
  profile = {
    name: "Balaji",
    designation: "MEAN Stack Developer",
    summary: "Passionate Full Stack Developer with 3.5 years of experience building enterprise web applications using Angular, Node.js, MongoDB, AWS, GraphQL and AI technologies.",
    location: "Chennai, India",
    email: "balaji@example.com",
    phone: "+91 XXXXX XXXXX",
    profileImage: "assets/images/Balaji_Photo.jpg",
    yearsOfExperience: 3.5
  };
  static \u0275fac = function About_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _About, selectors: [["app-about"]], decls: 8, vars: 2, consts: [[1, "about-page"], [1, "left"], [3, "profile"], [1, "right"], [3, "summary"]], template: function About_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-profile-card", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "app-biography", 4)(5, "app-education")(6, "app-achievements")(7, "app-interests");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("profile", ctx.profile);
      \u0275\u0275advance(2);
      \u0275\u0275property("summary", ctx.profile.summary);
    }
  }, dependencies: [Interests, Achievements, Education, Biography, ProfileCard], styles: ["\n\n.about-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 50px;\n  padding: 100px 0;\n  align-items: start;\n}\n@media (max-width: 992px) {\n  .about-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=about.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(About, [{
    type: Component,
    args: [{ selector: "app-about", imports: [Interests, Achievements, Education, Biography, ProfileCard], template: '<section class="about-page">\r\n\r\n    <div class="left">\r\n\r\n        <app-profile-card\r\n            [profile]="profile">\r\n        </app-profile-card>\r\n\r\n    </div>\r\n\r\n    <div class="right">\r\n\r\n        <app-biography\r\n            [summary]="profile.summary">\r\n        </app-biography>\r\n\r\n        <app-education></app-education>\r\n\r\n        <app-achievements></app-achievements>\r\n\r\n        <app-interests></app-interests>\r\n\r\n    </div>\r\n\r\n</section>', styles: ["/* src/app/features/about/pages/about/about.scss */\n.about-page {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 50px;\n  padding: 100px 0;\n  align-items: start;\n}\n@media (max-width: 992px) {\n  .about-page {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=about.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(About, { className: "About", filePath: "app/features/about/pages/about/about.ts", lineNumber: 14 });
})();
export {
  About
};
//# sourceMappingURL=chunk-5ULHDAGG.js.map
