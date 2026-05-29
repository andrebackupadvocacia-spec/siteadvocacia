import { r as reactExports, T as jsxRuntimeExports } from "./server-_8UQswmw.js";
import { c as createLucideIcon, S as SiteLayout, W as WHATSAPP } from "./createLucideIcon-BZ73C5St.js";
import { C as CircleCheck, o as objectType, s as stringType } from "./circle-check-CKh0cJD0.js";
import { l as lawyerImg } from "./router-M8Q7tE8T.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const schema = objectType({
  name: stringType().trim().min(2, "Nome obrigatório").max(100),
  oab: stringType().trim().min(4, "Número da OAB inválido").max(20),
  state: stringType().min(2, "Selecione o estado"),
  phone: stringType().trim().min(10, "Telefone inválido").max(20),
  email: stringType().trim().email("E-mail inválido")
});
function LawyerForm() {
  const [sent, setSent] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs = {};
      r.error.issues.forEach((i) => {
        errs[i.path[0]] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Olá! Meu nome é ${r.data.name}, sou advogado e quero me cadastrar como parceiro.
OAB: ${r.data.oab}
Estado: ${r.data.state}
E-mail: ${r.data.email}
WhatsApp: ${r.data.phone}`;
    window.open(`https://wa.me/5514997906336?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }
  if (sent) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-16 h-16 mx-auto text-primary mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Solicitação enviada!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Continue a conversa pelo WhatsApp. Nossa equipe validará seu cadastro em breve." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", placeholder: "Nome completo", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" }),
      errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "oab", placeholder: "Número da OAB", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" }),
        errors.oab && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.oab })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "state", defaultValue: "", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "UF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "AC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "AL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "AP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "AM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "BA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "CE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "DF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "ES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "GO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "MA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "MT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "MS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "MG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "PA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "PB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "PR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "PE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "PI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "RJ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "RN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "RS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "RO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "RR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "SC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "SP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "SE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "TO" })
        ] }),
        errors.state && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.state })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "email", type: "email", placeholder: "E-mail", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" }),
      errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.email })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", placeholder: "WhatsApp com DDD", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" }),
      errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.phone })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_10px_30px_-5px_oklch(0.72_0.18_155_/_0.5)]", children: "Quero ser parceiro →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Análise de cadastro sem custo. Vagas limitadas por região." })
  ] });
}
function Advogados() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background to-primary/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6", children: "Plataforma para advogados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl font-bold leading-tight", children: [
            "Receba clientes ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "qualificados" }),
            " todos os meses."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl text-muted-foreground max-w-xl", children: "Acabou a busca por clientes. Recebemos a demanda, filtramos e entregamos pronta para você atender." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `${WHATSAPP.replace("Quero%20analisar%20meu%20caso", "Quero%20me%20cadastrar%20como%20advogado%20parceiro")}`, target: "_blank", rel: "noopener", className: "px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_20px_60px_-20px_oklch(0.72_0.18_155_/_0.6)]", children: "Quero me cadastrar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#beneficios", className: "px-8 py-4 rounded-full border border-border hover:border-primary font-semibold transition", children: "Saber mais" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lawyerImg, width: 1410, height: 752, loading: "lazy", alt: "Advogado parceiro", className: "relative w-full h-auto" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "beneficios", className: "max-w-7xl mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
      i: Funnel,
      t: "Leads filtrados",
      d: "Recebemos, qualificamos e entregamos só casos com viabilidade."
    }, {
      i: Target,
      t: "Nicho validado",
      d: "Especialização em bloqueio de redes sociais — alta demanda."
    }, {
      i: TrendingUp,
      t: "Escalabilidade",
      d: "Volume mensal previsível. Foque no que importa: advogar."
    }].map(({
      i: Icon,
      t,
      d
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl bg-card border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-10 h-10 text-primary mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: d })
    ] }, t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-5xl mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card border border-border p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-8", children: "Como funciona a parceria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: ["Cadastro e validação da OAB", "Definição da região e volume desejado", "Início imediato no recebimento de leads", "Pagamento mensal proporcional ao volume contratado", "Suporte dedicado e relatórios de performance"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: x })
      ] }, x)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cadastro", className: "max-w-7xl mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold text-sm uppercase tracking-wider", children: "Cadastro de parceiros" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold mt-3", children: "Receba lides qualificadas todos os meses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 text-lg max-w-md", children: "Preencha seus dados e nossa equipe validará seu cadastro. Assim que aprovado, você começa a receber leads filtrados do seu estado." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
            " Leads com alta taxa de conversão"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
            " Pagamento mensal proporcional"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
            " Suporte e relatórios de performance"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-1", children: "Quero ser parceiro" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Resposta em até 24h. Vagas limitadas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LawyerForm, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-12 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-12 h-12 text-primary-foreground mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-primary-foreground", children: "Vamos crescer juntos." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-primary-foreground/80 max-w-xl mx-auto", children: "Vagas limitadas por região para garantir qualidade de atendimento." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `${WHATSAPP.replace("Quero%20analisar%20meu%20caso", "Quero%20me%20cadastrar%20como%20advogado%20parceiro")}`, target: "_blank", rel: "noopener", className: "mt-8 inline-flex px-10 py-4 rounded-full bg-background text-foreground font-bold hover:scale-105 transition", children: "Falar no WhatsApp →" })
    ] }) })
  ] });
}
export {
  Advogados as component
};
