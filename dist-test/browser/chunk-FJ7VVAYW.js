import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-YIK4ARCI.js";

// src/app/features/projects/pages/projects/projects.ts
var Projects = class _Projects {
  static \u0275fac = function Projects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Projects)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Projects, selectors: [["app-projects"]], decls: 2, vars: 0, template: function Projects_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "projects works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Projects, [{
    type: Component,
    args: [{ selector: "app-projects", imports: [], template: "<p>projects works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Projects, { className: "Projects", filePath: "app/features/projects/pages/projects/projects.ts", lineNumber: 9 });
})();
export {
  Projects
};
//# sourceMappingURL=chunk-FJ7VVAYW.js.map
