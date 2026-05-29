import { T as jsxRuntimeExports, r as reactExports } from "./server-_8UQswmw.js";
import { L as Link } from "./router-M8Q7tE8T.js";
function WhatsAppIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 32 32",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.738.33-.315.33-1.22 1.118-1.22 2.405 0 .302.043.617.116.918.214.846.703 1.578 1.218 2.264 1.058 1.4 2.205 2.578 3.795 3.41.502.26 1.045.474 1.61.66.5.16 1.06.39 1.594.39.838 0 1.74-.272 2.197-1.018.143-.244.215-.516.215-.79 0-.604-.99-.953-1.476-1.18-.226-.107-.585-.27-.81-.27zM16.05 5.83c-5.586 0-10.13 4.544-10.13 10.13 0 1.99.575 3.92 1.66 5.58L6.018 27l5.69-1.494c1.582.875 3.382 1.334 5.225 1.334 5.586 0 10.13-4.544 10.13-10.13S22.518 5.83 16.05 5.83zm0 18.487c-1.66 0-3.282-.45-4.7-1.295l-.336-.2-3.494.917.93-3.41-.218-.348a8.39 8.39 0 0 1-1.286-4.46c0-4.64 3.776-8.416 8.416-8.416s8.415 3.776 8.415 8.416-3.776 8.416-8.416 8.416z" })
    }
  );
}
const logo = "/assets/logo-CeFtV5n9.png";
const WHATSAPP = "https://wa.me/5514997906336?text=Quero%20analisar%20meu%20caso";
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Meu Direito Já", className: "h-10 w-auto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-muted-foreground hover:text-foreground transition", children: "Início" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/advogados", className: "text-muted-foreground hover:text-foreground transition", children: "Para Advogados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-muted-foreground hover:text-foreground transition", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "text-muted-foreground hover:text-foreground transition", children: "Contato" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noopener", className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "w-6 h-6" }),
      "Falar agora"
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Meu Direito Já", className: "h-12 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-md", children: "Somos uma ponte entre você e advogados especialistas em recuperação de contas e indenizações por bloqueio em redes sociais." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3 text-sm", children: "Navegação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Início" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/advogados", className: "hover:text-foreground", children: "Para Advogados" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-foreground", children: "Blog" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "hover:text-foreground", children: "Contato" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3 text-sm", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "contato@meudireitoja.com.br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "WhatsApp 24h" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border py-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Meu Direito Já. Intermediação jurídica. Não exercemos atividade de advocacia."
    ] })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: WHATSAPP,
      target: "_blank",
      rel: "noopener",
      "aria-label": "Falar no WhatsApp",
      className: "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_10px_30px_-5px_oklch(0.72_0.18_155_/_0.6)] hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "w-9 h-9" })
    }
  );
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
export {
  SiteLayout as S,
  WHATSAPP as W,
  WhatsAppIcon as a,
  createLucideIcon as c
};
