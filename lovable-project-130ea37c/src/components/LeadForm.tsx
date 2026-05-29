import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Nome obrigatório").max(100),
  phone: z.string().trim().min(10, "Telefone inválido").max(20),
  platform: z.string().min(1, "Selecione"),
  message: z.string().trim().min(10, "Conte um pouco mais").max(1000),
});

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Olá! Meu nome é ${r.data.name}. Tive minha conta do ${r.data.platform} bloqueada. ${r.data.message}`;
    window.open(`https://wa.me/5514997906336?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <CheckCircle2 className="w-16 h-16 mx-auto text-primary mb-4" />
        <h3 className="font-display text-2xl font-bold mb-2">Recebido!</h3>
        <p className="text-muted-foreground">Continue a conversa pelo WhatsApp. Em breve um especialista te chamará.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <input name="name" placeholder="Seu nome completo" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <input name="phone" placeholder="WhatsApp com DDD" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" />
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
      </div>
      <div>
        <select name="platform" defaultValue="" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition">
          <option value="" disabled>Qual rede foi bloqueada?</option>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>WhatsApp</option>
          <option>TikTok</option>
          <option>YouTube</option>
          <option>Outra</option>
        </select>
        {errors.platform && <p className="text-destructive text-xs mt-1">{errors.platform}</p>}
      </div>
      <div>
        <textarea name="message" rows={4} placeholder="Conte rapidamente o que aconteceu" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition resize-none" />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_10px_30px_-5px_oklch(0.72_0.18_155_/_0.5)]">
        Quero analisar meu caso →
      </button>
      <p className="text-xs text-muted-foreground text-center">Sem custo inicial. Só paga depois que recuperar.</p>
    </form>
  );
}
