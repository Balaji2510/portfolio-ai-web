import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
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

// src/app/features/resume/components/experience-summary/experience-summary.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExperienceSummary_For_4_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", item_r1.designation, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.company, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.duration, " ");
  }
}
var ExperienceSummary = class _ExperienceSummary {
  experience = [];
  static \u0275fac = function ExperienceSummary_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienceSummary)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceSummary, selectors: [["app-experience-summary"]], inputs: { experience: "experience" }, decls: 5, vars: 0, consts: [[1, "item"]], template: function ExperienceSummary_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section")(1, "h2");
      \u0275\u0275text(2, " Experience ");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(3, ExperienceSummary_For_4_Template, 7, 3, "div", 0, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.experience);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienceSummary, [{
    type: Component,
    args: [{ selector: "app-experience-summary", imports: [], template: '<section>\r\n\r\n<h2>\r\n\r\nExperience\r\n\r\n</h2>\r\n\r\n@for(item of experience;track item.id){\r\n\r\n<div class="item">\r\n\r\n<h3>\r\n\r\n{{item.designation}}\r\n\r\n</h3>\r\n\r\n<p>\r\n\r\n{{item.company}}\r\n\r\n</p>\r\n\r\n<span>\r\n\r\n{{item.duration}}\r\n\r\n</span>\r\n\r\n</div>\r\n\r\n}\r\n\r\n</section>' }]
  }], null, { experience: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceSummary, { className: "ExperienceSummary", filePath: "app/features/resume/components/experience-summary/experience-summary.ts", lineNumber: 10 });
})();

// src/app/features/resume/components/skills-summary/skills-summary.ts
function SkillsSummary_For_5_Template(rf, ctx) {
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
var SkillsSummary = class _SkillsSummary {
  skills = [];
  static \u0275fac = function SkillsSummary_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillsSummary)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsSummary, selectors: [["app-skills-summary"]], inputs: { skills: "skills" }, decls: 6, vars: 0, consts: [[1, "chips"]], template: function SkillsSummary_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section")(1, "h2");
      \u0275\u0275text(2, " Technical Skills ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 0);
      \u0275\u0275repeaterCreate(4, SkillsSummary_For_5_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.skills);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillsSummary, [{
    type: Component,
    args: [{ selector: "app-skills-summary", imports: [], template: '<section>\r\n\r\n<h2>\r\n\r\nTechnical Skills\r\n\r\n</h2>\r\n\r\n<div class="chips">\r\n\r\n@for(skill of skills;track skill){\r\n\r\n<span>\r\n\r\n{{skill}}\r\n\r\n</span>\r\n\r\n}\r\n\r\n</div>\r\n\r\n</section>' }]
  }], null, { skills: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsSummary, { className: "SkillsSummary", filePath: "app/features/resume/components/skills-summary/skills-summary.ts", lineNumber: 9 });
})();

// src/app/features/resume/components/download-button/download-button.ts
var DownloadButton = class _DownloadButton {
  url = "";
  static \u0275fac = function DownloadButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DownloadButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadButton, selectors: [["app-download-button"]], inputs: { url: "url" }, decls: 2, vars: 1, consts: [["download", "", 1, "download", 3, "href"]], template: function DownloadButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "a", 0);
      \u0275\u0275text(1, " Download Resume ");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275domProperty("href", ctx.url, \u0275\u0275sanitizeUrl);
    }
  }, styles: ["\n\n.download[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 16px 30px;\n  background: #4F46E5;\n  color: white;\n  text-decoration: none;\n  border-radius: 10px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=download-button.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DownloadButton, [{
    type: Component,
    args: [{ selector: "app-download-button", imports: [], template: '<a\r\n\r\nclass="download"\r\n\r\n[href]="url"\r\n\r\ndownload>\r\n\r\nDownload Resume\r\n\r\n</a>', styles: ["/* src/app/features/resume/components/download-button/download-button.scss */\n.download {\n  display: inline-block;\n  padding: 16px 30px;\n  background: #4F46E5;\n  color: white;\n  text-decoration: none;\n  border-radius: 10px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=download-button.css.map */\n"] }]
  }], null, { url: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadButton, { className: "DownloadButton", filePath: "app/features/resume/components/download-button/download-button.ts", lineNumber: 9 });
})();

// src/app/features/resume/components/resume-header/resume-header.ts
var ResumeHeader = class _ResumeHeader {
  name = "";
  designation = "";
  summary = "";
  static \u0275fac = function ResumeHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumeHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumeHeader, selectors: [["app-resume-header"]], inputs: { name: "name", designation: "designation", summary: "summary" }, decls: 7, vars: 3, consts: [[1, "header"]], template: function ResumeHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "h3");
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.designation, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.summary, " ");
    }
  }, styles: ["\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\nh3[_ngcontent-%COMP%] {\n  color: #4F46E5;\n  margin: 16px 0;\n}\np[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto;\n  color: #64748B;\n}\n/*# sourceMappingURL=resume-header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumeHeader, [{
    type: Component,
    args: [{ selector: "app-resume-header", imports: [], template: '<section class="header">\r\n\r\n    <h1>\r\n\r\n        {{name}}\r\n\r\n    </h1>\r\n\r\n    <h3>\r\n\r\n        {{designation}}\r\n\r\n    </h3>\r\n\r\n    <p>\r\n\r\n        {{summary}}\r\n\r\n    </p>\r\n\r\n</section>', styles: ["/* src/app/features/resume/components/resume-header/resume-header.scss */\n.header {\n  text-align: center;\n  margin-bottom: 50px;\n}\nh1 {\n  font-size: 48px;\n}\nh3 {\n  color: #4F46E5;\n  margin: 16px 0;\n}\np {\n  max-width: 800px;\n  margin: auto;\n  color: #64748B;\n}\n/*# sourceMappingURL=resume-header.css.map */\n"] }]
  }], null, { name: [{
    type: Input
  }], designation: [{
    type: Input
  }], summary: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumeHeader, { className: "ResumeHeader", filePath: "app/features/resume/components/resume-header/resume-header.ts", lineNumber: 9 });
})();

// src/app/features/resume/pages/resume/resume.ts
var Resume = class _Resume {
  esume = {
    name: "Balaji",
    designation: "MEAN Stack Developer",
    summary: "3.5 years of experience in Angular, Node.js, MongoDB, AWS and AI.",
    resumeUrl: "assets/resume/Balaji_Resume.pdf"
  };
  skills = [
    "Angular",
    "Node.js",
    "MongoDB",
    "AWS",
    "GraphQL",
    "TypeScript",
    "Express",
    "AI"
  ];
  experience = [];
  resume;
  static \u0275fac = function Resume_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Resume)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Resume, selectors: [["app-resume"]], decls: 6, vars: 6, consts: [[1, "resume"], [3, "name", "designation", "summary"], [1, "download"], [3, "url"], [3, "skills"], [3, "experience"]], template: function Resume_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "app-resume-header", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-download-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-skills-summary", 4)(5, "app-experience-summary", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.resume.name)("designation", ctx.resume.designation)("summary", ctx.resume.summary);
      \u0275\u0275advance(2);
      \u0275\u0275property("url", ctx.resume.resumeUrl);
      \u0275\u0275advance();
      \u0275\u0275property("skills", ctx.skills);
      \u0275\u0275advance();
      \u0275\u0275property("experience", ctx.experience);
    }
  }, dependencies: [ExperienceSummary, SkillsSummary, DownloadButton, ResumeHeader], styles: ["\n\n.resume[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: auto;\n  padding: 100px 20px;\n}\n.download[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 40px 0;\n}\n/*# sourceMappingURL=resume.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Resume, [{
    type: Component,
    args: [{ selector: "app-resume", imports: [ExperienceSummary, SkillsSummary, DownloadButton, ResumeHeader], template: '<section class="resume">\r\n\r\n<app-resume-header\r\n\r\n[name]="resume.name"\r\n\r\n[designation]="resume.designation"\r\n\r\n[summary]="resume.summary">\r\n\r\n</app-resume-header>\r\n\r\n<div class="download">\r\n\r\n<app-download-button\r\n\r\n[url]="resume.resumeUrl">\r\n\r\n</app-download-button>\r\n\r\n</div>\r\n\r\n<app-skills-summary\r\n\r\n[skills]="skills">\r\n\r\n</app-skills-summary>\r\n\r\n<app-experience-summary\r\n\r\n[experience]="experience">\r\n\r\n</app-experience-summary>\r\n\r\n</section>', styles: ["/* src/app/features/resume/pages/resume/resume.scss */\n.resume {\n  max-width: 1100px;\n  margin: auto;\n  padding: 100px 20px;\n}\n.download {\n  text-align: center;\n  margin: 40px 0;\n}\n/*# sourceMappingURL=resume.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Resume, { className: "Resume", filePath: "app/features/resume/pages/resume/resume.ts", lineNumber: 13 });
})();
export {
  Resume
};
//# sourceMappingURL=chunk-ZHM22CHO.js.map
