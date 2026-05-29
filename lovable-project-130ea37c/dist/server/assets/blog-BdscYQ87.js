import { T as jsxRuntimeExports } from "./server-_8UQswmw.js";
import { S as SiteLayout } from "./createLucideIcon-BZ73C5St.js";
import { A as ArrowRight } from "./arrow-right-ChLoBh6d.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-M8Q7tE8T.js";
const posts = [{
  slug: "instagram-bloqueado",
  title: "Conta do Instagram bloqueada: o que fazer?",
  excerpt: "Passo a passo para recuperar e quando é hora de procurar um advogado.",
  tag: "Instagram"
}, {
  slug: "whatsapp-banido",
  title: "WhatsApp banido injustamente: seus direitos",
  excerpt: "Como agir quando o app essencial do seu negócio é bloqueado sem aviso.",
  tag: "WhatsApp"
}, {
  slug: "recuperar-redes",
  title: "Como recuperar redes sociais bloqueadas",
  excerpt: "Caminhos extrajudiciais e judiciais para reaver acesso às suas contas.",
  tag: "Guia"
}, {
  slug: "indenizacao-bloqueio",
  title: "Quando o bloqueio gera direito a indenização?",
  excerpt: "Entenda o que caracteriza dano moral e material em bloqueios indevidos.",
  tag: "Indenização"
}];
function Blog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-6 pt-20 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold text-sm uppercase tracking-wider", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-bold mt-3 max-w-3xl", children: "Conteúdo que defende seus direitos." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl", children: "Artigos práticos sobre redes sociais, bloqueios e direitos digitais." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold", children: p.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold mt-4 group-hover:text-primary transition", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: p.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary", children: [
        "Em breve ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }, p.slug)) })
  ] });
}
export {
  Blog as component
};
