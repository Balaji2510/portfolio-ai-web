import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-YIK4ARCI.js";

// src/app/features/contact/pages/contact/contact.ts
var Contact = class _Contact {
  static \u0275fac = function Contact_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contact, selectors: [["app-contact"]], decls: 2, vars: 0, template: function Contact_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "contact works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contact, [{
    type: Component,
    args: [{ selector: "app-contact", imports: [], template: "<p>contact works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contact, { className: "Contact", filePath: "app/features/contact/pages/contact/contact.ts", lineNumber: 9 });
})();
export {
  Contact
};
//# sourceMappingURL=chunk-BVYLSD6M.js.map
