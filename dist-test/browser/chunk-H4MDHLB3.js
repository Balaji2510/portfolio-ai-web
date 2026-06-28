import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-YIK4ARCI.js";

// src/app/features/skills/pages/skills/skills.ts
var Skills = class _Skills {
  static \u0275fac = function Skills_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Skills)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Skills, selectors: [["app-skills"]], decls: 2, vars: 0, template: function Skills_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "skills works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Skills, [{
    type: Component,
    args: [{ selector: "app-skills", imports: [], template: "<p>skills works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Skills, { className: "Skills", filePath: "app/features/skills/pages/skills/skills.ts", lineNumber: 9 });
})();
export {
  Skills
};
//# sourceMappingURL=chunk-H4MDHLB3.js.map
