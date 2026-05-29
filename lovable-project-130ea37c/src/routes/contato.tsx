import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, WHATSAPP } from "@/components/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import { Mail, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fale com um especialista | Meu Direito Já" },
      { name: "description", content: "Entre em contato. Análise gratuita do seu caso de bloqueio em redes sociais." },
      { property: "og:title", content: "Contato — Meu Direito Já" },
      { property: "og:description", content: "Análise gratuita. Resposta em até 24h." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Fale com um especialista.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Análise 100% gratuita. Resposta em até 24h.</p>
          <div className="mt-10 space-y-4">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary transition">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><WhatsAppIcon className="w-6 h-6 text-primary" /></div>
              <div>
                <div className="font-bold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Atendimento mais rápido</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Mail className="w-6 h-6 text-primary" /></div>
              <div>
                <div className="font-bold">contato@meudireitoja.com.br</div>
                <div className="text-sm text-muted-foreground">Respondemos em até 24h</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Clock className="w-6 h-6 text-primary" /></div>
              <div>
                <div className="font-bold">Atendimento 24/7</div>
                <div className="text-sm text-muted-foreground">Estamos sempre disponíveis</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold mb-1">Conte seu caso</h2>
          <p className="text-sm text-muted-foreground mb-6">Preencha e te chamamos no WhatsApp.</p>
          <LeadForm />
        </div>
      </section>
    </SiteLayout>
  );
}
