import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Nome obrigatório").max(100),
  oab: z.string().trim().min(4, "Número da OAB inválido").max(20),
  state: z.string().min(2, "Selecione o estado"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido"),
});

export function LawyerForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Olá! Meu nome é ${r.data.name}, sou advogado e quero me cadastrar como parceiro.\nOAB: ${r.data.oab}\nEstado: ${r.data.state}\nE-mail: ${r.data.email}\nWhatsApp: ${r.data.phone}`;
    window.open(`https://wa.me/5514997906336?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <CheckCircle2 className="w-16 h-16 mx-auto text-primary mb-4" />
        <h3 className="font-display text-2xl font-bold mb-2">Solicitação enviada!</h3>
        <p className="text-muted-foreground">Continue a conversa pelo WhatsApp. Nossa equipe validará seu cadastro em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <input name="name" placeholder="Nome completo" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input name="oab" placeholder="Número da OAB" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" />
          {errors.oab && <p className="text-destructive text-xs mt-1">{errors.oab}</p>}
        </div>
        <div>
          <select name="state" defaultValue="" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition">
            <option value="" disabled>UF</option>
            <option>AC</option><option>AL</option><option>AP</option><option>AM</option><option>BA</option><option>CE</option><option>DF</option><option>ES</option><option>GO</option><option>MA</option><option>MT</option><option>MS</option><option>MG</option><option>PA</option><option>PB</option><option>PR</option><option>PE</option><option>PI</option><option>RJ</option><option>RN</option><option>RS</option><option>RO</option><option>RR</option><option>SC</option><option>SP</option><option>SE</option><option>TO</option>
          </select>
          {errors.state && <p className="text-destructive text-xs mt-1">{errors.state}</p>}
        </div>
      </div>
      <div>
        <input name="email" type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <input name="phone" placeholder="WhatsApp com DDD" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition" />
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
      </div>
      <button type="submit" className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_10px_30px_-5px_oklch(0.72_0.18_155_/_0.5)]">
        Quero ser parceiro →
      </button>
      <p className="text-xs text-muted-foreground text-center">Análise de cadastro sem custo. Vagas limitadas por região.</p>
    </form>
  );
}
