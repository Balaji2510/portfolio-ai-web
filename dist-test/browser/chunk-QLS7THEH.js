import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIK4ARCI.js";

// src/app/features/projects/components/project-details/project-details.ts
function ProjectDetails_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tech_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tech_r1, " ");
  }
}
function ProjectDetails_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2714 ", feature_r2, " ");
  }
}
function ProjectDetails_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 10);
  }
  if (rf & 2) {
    const image_r3 = ctx.$implicit;
    \u0275\u0275domProperty("src", image_r3, \u0275\u0275sanitizeUrl);
  }
}
var ProjectDetails = class _ProjectDetails {
  project = {
    title: "PortfolioAI",
    category: "AI Portfolio",
    description: "An AI-powered developer portfolio built using Angular, Node.js, MongoDB, RAG and OpenRouter.",
    duration: "2 Weeks",
    role: "Full Stack Developer",
    client: "Personal Project",
    github: "#",
    demo: "#",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Express",
      "AI",
      "RAG",
      "Vercel"
    ],
    features: [
      "AI Portfolio Assistant",
      "Resume Chat",
      "Project Showcase",
      "Authentication",
      "Responsive UI",
      "Admin Dashboard"
    ],
    images: [
      "assets/projects/portfolio/home.png",
      "assets/projects/portfolio/chat.png",
      "assets/projects/portfolio/admin.png"
    ]
  };
  static \u0275fac = function ProjectDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDetails)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetails, selectors: [["app-project-details"]], decls: 47, vars: 9, consts: [[1, "project-details"], [1, "container"], [1, "banner", 3, "src"], [1, "header"], [1, "category"], [1, "buttons"], ["target", "_blank", 3, "href"], [1, "info"], [1, "chips"], [1, "gallery"], [3, "src"]], template: function ProjectDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "img", 2);
      \u0275\u0275domElementStart(3, "div", 3)(4, "div")(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p");
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 5)(12, "a", 6);
      \u0275\u0275text(13, " GitHub ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "a", 6);
      \u0275\u0275text(15, " Live Demo ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 7)(17, "div")(18, "h4");
      \u0275\u0275text(19, "Duration");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "p");
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div")(23, "h4");
      \u0275\u0275text(24, "Role");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p");
      \u0275\u0275text(26);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "div")(28, "h4");
      \u0275\u0275text(29, "Client");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "p");
      \u0275\u0275text(31);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(32, "h2");
      \u0275\u0275text(33, " Technology Stack ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "div", 8);
      \u0275\u0275repeaterCreate(35, ProjectDetails_For_36_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "h2");
      \u0275\u0275text(38, " Key Features ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "ul");
      \u0275\u0275repeaterCreate(40, ProjectDetails_For_41_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "h2");
      \u0275\u0275text(43, " Screenshots ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "div", 9);
      \u0275\u0275repeaterCreate(45, ProjectDetails_For_46_Template, 1, 1, "img", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("src", ctx.project.images[0], \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.project.category, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.project.title, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.project.description, " ");
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("href", ctx.project.github, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("href", ctx.project.demo, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.project.duration);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.project.role);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.project.client);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.project.technologies);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.project.features);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.project.images);
    }
  }, styles: ["\n\n.project-details[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  padding: 0 24px;\n}\n.banner[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 20px;\n  margin-bottom: 40px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 40px;\n  margin-bottom: 40px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin: 15px 0;\n}\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  line-height: 1.8;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  border-radius: 10px;\n  background: #4F46E5;\n  color: white;\n  text-decoration: none;\n}\n.info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin: 50px 0;\n}\n.info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n  padding: 25px;\n  border-radius: 15px;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  margin: 30px 0;\n}\n.chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 30px;\n  background: #EEF2FF;\n  color: #4F46E5;\n  font-weight: 600;\n}\nul[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\nli[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 25px;\n  margin-top: 30px;\n}\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 15px;\n}\n@media (max-width: 900px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .gallery[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=project-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDetails, [{
    type: Component,
    args: [{ selector: "app-project-details", imports: [], template: '<section class="project-details">\r\n\r\n    <div class="container">\r\n\r\n        <img\r\n            class="banner"\r\n            [src]="project.images[0]">\r\n\r\n        <div class="header">\r\n\r\n            <div>\r\n\r\n                <span class="category">\r\n\r\n                    {{project.category}}\r\n\r\n                </span>\r\n\r\n                <h1>\r\n\r\n                    {{project.title}}\r\n\r\n                </h1>\r\n\r\n                <p>\r\n\r\n                    {{project.description}}\r\n\r\n                </p>\r\n\r\n            </div>\r\n\r\n            <div class="buttons">\r\n\r\n                <a\r\n                    [href]="project.github"\r\n                    target="_blank">\r\n\r\n                    GitHub\r\n\r\n                </a>\r\n\r\n                <a\r\n                    [href]="project.demo"\r\n                    target="_blank">\r\n\r\n                    Live Demo\r\n\r\n                </a>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class="info">\r\n\r\n            <div>\r\n\r\n                <h4>Duration</h4>\r\n\r\n                <p>{{project.duration}}</p>\r\n\r\n            </div>\r\n\r\n            <div>\r\n\r\n                <h4>Role</h4>\r\n\r\n                <p>{{project.role}}</p>\r\n\r\n            </div>\r\n\r\n            <div>\r\n\r\n                <h4>Client</h4>\r\n\r\n                <p>{{project.client}}</p>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <h2>\r\n\r\n            Technology Stack\r\n\r\n        </h2>\r\n\r\n        <div class="chips">\r\n\r\n            @for(tech of project.technologies; track tech){\r\n\r\n                <span>\r\n\r\n                    {{tech}}\r\n\r\n                </span>\r\n\r\n            }\r\n\r\n        </div>\r\n\r\n        <h2>\r\n\r\n            Key Features\r\n\r\n        </h2>\r\n\r\n        <ul>\r\n\r\n            @for(feature of project.features; track feature){\r\n\r\n                <li>\r\n\r\n                    \u2714 {{feature}}\r\n\r\n                </li>\r\n\r\n            }\r\n\r\n        </ul>\r\n\r\n        <h2>\r\n\r\n            Screenshots\r\n\r\n        </h2>\r\n\r\n        <div class="gallery">\r\n\r\n            @for(image of project.images; track image){\r\n\r\n                <img\r\n                    [src]="image">\r\n\r\n            }\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>', styles: ["/* src/app/features/projects/components/project-details/project-details.scss */\n.project-details {\n  padding: 100px 0;\n}\n.container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 0 24px;\n}\n.banner {\n  width: 100%;\n  border-radius: 20px;\n  margin-bottom: 40px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 40px;\n  margin-bottom: 40px;\n}\n.header h1 {\n  font-size: 48px;\n  margin: 15px 0;\n}\n.header p {\n  color: #64748B;\n  line-height: 1.8;\n}\n.buttons {\n  display: flex;\n  gap: 15px;\n}\n.buttons a {\n  padding: 14px 24px;\n  border-radius: 10px;\n  background: #4F46E5;\n  color: white;\n  text-decoration: none;\n}\n.info {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin: 50px 0;\n}\n.info div {\n  background: #F8FAFC;\n  padding: 25px;\n  border-radius: 15px;\n}\n.chips {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  margin: 30px 0;\n}\n.chips span {\n  padding: 10px 18px;\n  border-radius: 30px;\n  background: #EEF2FF;\n  color: #4F46E5;\n  font-weight: 600;\n}\nul {\n  margin: 30px 0;\n}\nli {\n  padding: 10px 0;\n}\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 25px;\n  margin-top: 30px;\n}\n.gallery img {\n  width: 100%;\n  border-radius: 15px;\n}\n@media (max-width: 900px) {\n  .header {\n    flex-direction: column;\n  }\n  .info {\n    grid-template-columns: 1fr;\n  }\n  .gallery {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=project-details.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetails, { className: "ProjectDetails", filePath: "app/features/projects/components/project-details/project-details.ts", lineNumber: 9 });
})();
export {
  ProjectDetails
};
//# sourceMappingURL=chunk-QLS7THEH.js.map
