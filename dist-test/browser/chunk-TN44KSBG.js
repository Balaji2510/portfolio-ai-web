import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YIK4ARCI.js";

// src/app/features/experience/components/experience-card/experience-card.ts
function ExperienceCard_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, " Current ");
    \u0275\u0275domElementEnd();
  }
}
function ExperienceCard_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r1, " ");
  }
}
function ExperienceCard_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2, " ");
  }
}
var ExperienceCard = class _ExperienceCard {
  experience;
  static \u0275fac = function ExperienceCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienceCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceCard, selectors: [["app-experience-card"]], inputs: { experience: "experience" }, decls: 17, vars: 5, consts: [[1, "card"], [1, "header"], [1, "chips"]], template: function ExperienceCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, ExperienceCard_Conditional_4_Template, 2, 0, "span");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p");
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p");
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 2);
      \u0275\u0275repeaterCreate(12, ExperienceCard_For_13_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "ul");
      \u0275\u0275repeaterCreate(15, ExperienceCard_For_16_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.experience.designation, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.experience.current ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.experience.company, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.experience.duration, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.experience.location, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.experience.technologies);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.experience.responsibilities);
    }
  }, styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #4F46E5;\n  color: white;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\np[_ngcontent-%COMP%] {\n  color: #64748B;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin: 24px 0;\n}\n.chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border-radius: 30px;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=experience-card.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienceCard, [{
    type: Component,
    args: [{ selector: "app-experience-card", imports: [], template: '<div class="card">\r\n\r\n    <div class="header">\r\n\r\n        <h2>\r\n\r\n            {{experience.designation}}\r\n\r\n        </h2>\r\n\r\n        @if(experience.current){\r\n\r\n            <span>\r\n\r\n                Current\r\n\r\n            </span>\r\n\r\n        }\r\n\r\n    </div>\r\n\r\n    <h3>\r\n\r\n        {{experience.company}}\r\n\r\n    </h3>\r\n\r\n    <p>\r\n\r\n        {{experience.duration}}\r\n\r\n    </p>\r\n\r\n    <p>\r\n\r\n        {{experience.location}}\r\n\r\n    </p>\r\n\r\n    <div class="chips">\r\n\r\n        @for(skill of experience.technologies;track skill){\r\n\r\n            <span>\r\n\r\n                {{skill}}\r\n\r\n            </span>\r\n\r\n        }\r\n\r\n    </div>\r\n\r\n    <ul>\r\n\r\n        @for(item of experience.responsibilities;track item){\r\n\r\n            <li>\r\n\r\n                {{item}}\r\n\r\n            </li>\r\n\r\n        }\r\n\r\n    </ul>\r\n\r\n</div>', styles: ["/* src/app/features/experience/components/experience-card/experience-card.scss */\n.card {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header span {\n  background: #4F46E5;\n  color: white;\n  padding: 6px 14px;\n  border-radius: 20px;\n}\nh3 {\n  margin: 16px 0;\n}\np {\n  color: #64748B;\n}\n.chips {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin: 24px 0;\n}\n.chips span {\n  padding: 8px 14px;\n  background: #EEF2FF;\n  color: #4F46E5;\n  border-radius: 30px;\n}\nli {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=experience-card.css.map */\n"] }]
  }], null, { experience: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceCard, { className: "ExperienceCard", filePath: "app/features/experience/components/experience-card/experience-card.ts", lineNumber: 10 });
})();

// src/app/features/experience/components/timeline/timeline.ts
var _forTrack0 = ($index, $item) => $item.id;
function Timeline_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-experience-card", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("experience", item_r1);
  }
}
var Timeline = class _Timeline {
  experiences = [
    {
      id: 1,
      company: "ABC Technologies",
      designation: "Software Engineer",
      duration: "2022 - Present",
      location: "Chennai",
      employmentType: "Full Time",
      current: true,
      technologies: [
        "Angular",
        "Node.js",
        "AWS",
        "MongoDB"
      ],
      responsibilities: [
        "Develop enterprise web applications",
        "Designed REST APIs",
        "Integrated AWS services",
        "Led frontend development"
      ]
    }
  ];
  static \u0275fac = function Timeline_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Timeline)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Timeline, selectors: [["app-timeline"]], decls: 10, vars: 0, consts: [[1, "timeline"], [1, "title"], [3, "experience"]], template: function Timeline_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "timeline works!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "section", 0)(3, "div", 1)(4, "h1");
      \u0275\u0275text(5, " Experience ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, " My professional journey ");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(8, Timeline_For_9_Template, 1, 1, "app-experience-card", 2, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.experiences);
    }
  }, dependencies: [ExperienceCard], styles: ["\n\n.timeline[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: auto;\n  padding: 100px 20px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=timeline.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{ selector: "app-timeline", imports: [ExperienceCard], template: '<p>timeline works!</p>\r\n<section class="timeline">\r\n\r\n    <div class="title">\r\n\r\n        <h1>\r\n\r\n            Experience\r\n\r\n        </h1>\r\n\r\n        <p>\r\n\r\n            My professional journey\r\n\r\n        </p>\r\n\r\n    </div>\r\n\r\n    @for(item of experiences;track item.id){\r\n\r\n        <app-experience-card\r\n\r\n            [experience]="item">\r\n\r\n        </app-experience-card>\r\n\r\n    }\r\n\r\n</section>', styles: ["/* src/app/features/experience/components/timeline/timeline.scss */\n.timeline {\n  max-width: 1000px;\n  margin: auto;\n  padding: 100px 20px;\n}\n.title {\n  text-align: center;\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=timeline.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Timeline, { className: "Timeline", filePath: "app/features/experience/components/timeline/timeline.ts", lineNumber: 11 });
})();

// src/app/features/experience/pages/experience/experience.ts
var Experience = class _Experience {
  static \u0275fac = function Experience_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Experience)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Experience, selectors: [["app-experience"]], decls: 1, vars: 0, template: function Experience_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-timeline");
    }
  }, dependencies: [Timeline], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=experience.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Experience, [{
    type: Component,
    args: [{ selector: "app-experience", imports: [Timeline], template: "<app-timeline></app-timeline>", styles: ["/* src/app/features/experience/pages/experience/experience.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=experience.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Experience, { className: "Experience", filePath: "app/features/experience/pages/experience/experience.ts", lineNumber: 10 });
})();
export {
  Experience
};
//# sourceMappingURL=chunk-TN44KSBG.js.map
