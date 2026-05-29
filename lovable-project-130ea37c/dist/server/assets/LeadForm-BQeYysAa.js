import { r as reactExports, T as jsxRuntimeExports } from "./server-_8UQswmw.js";
import { C as CircleCheck, o as objectType, s as stringType } from "./circle-check-CKh0cJD0.js";
const schema = objectType({
  name: stringType().trim().min(2, "Nome obrigatório").max(100),
  phone: stringType().trim().min(10, "Telefone inválido").max(20),
  platform: stringType().min(1, "Selecione"),
  message: stringType().trim().min(10, "Conte um pouco mais").max(1e3)
});
function LeadForm() {
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
    const text = `Olá! Meu nome é ${r.data.name}. Tive minha conta do ${r.data.platform} bloqueada. ${r.data.message}`;
    window.open(`https://wa.me/5514997906336?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }
  if (sent) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-16 h-16 mx-auto text-primary mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Recebido!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Continue a conversa pelo WhatsApp. Em breve um especialista te chamará." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", placeholder: "Seu nome completo", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" }),
      errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", placeholder: "WhatsApp com DDD", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" }),
      errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.phone })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "platform", defaultValue: "", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Qual rede foi bloqueada?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Instagram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Facebook" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "WhatsApp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "TikTok" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "YouTube" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Outra" })
      ] }),
      errors.platform && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.platform })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, placeholder: "Conte rapidamente o que aconteceu", className: "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition resize-none" }),
      errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs mt-1", children: errors.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_10px_30px_-5px_oklch(0.72_0.18_155_/_0.5)]", children: "Quero analisar meu caso →" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Sem custo inicial. Só paga depois que recuperar." })
  ] });
}
export {
  LeadForm as L
};
