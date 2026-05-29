import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, WHATSAPP } from "@/components/SiteLayout";
import { LawyerForm } from "@/components/LawyerForm";
import lawyerImg from "@/assets/lawyer.png";
import { Target, Filter, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/advogados")({
  head: () => ({
    meta: [
      { title: "Para Advogados — Receba leads qualificados | Meu Direito Já" },
      { name: "description", content: "Receba clientes qualificados todos os meses no nicho de bloqueio em redes sociais. Plataforma de leads para advogados." },
      { property: "og:title", content: "Para Advogados — Leads qualificados todos os meses" },
      { property: "og:description", content: "Escale seu escritório com leads filtrados em direito digital." },
      { property: "og:image", content: lawyerImg },
    ],
  }),
  component: Advogados,
});

function Advogados() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-primary/10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              Plataforma para advogados
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Receba clientes <span className="text-primary">qualificados</span> todos os meses.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-xl">
              Acabou a busca por clientes. Recebemos a demanda, filtramos e entregamos pronta para você atender.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`${WHATSAPP.replace("Quero%20analisar%20meu%20caso","Quero%20me%20cadastrar%20como%20advogado%20parceiro")}`} target="_blank" rel="noopener" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_20px_60px_-20px_oklch(0.72_0.18_155_/_0.6)]">
                Quero me cadastrar
              </a>
              <a href="#beneficios" className="px-8 py-4 rounded-full border border-border hover:border-primary font-semibold transition">
                Saber mais
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <img src={lawyerImg} width={1410} height={752} loading="lazy" alt="Advogado parceiro" className="relative w-full h-auto" />
          </div>
        </div>
      </section>

      <section id="beneficios" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: Filter, t: "Leads filtrados", d: "Recebemos, qualificamos e entregamos só casos com viabilidade." },
            { i: Target, t: "Nicho validado", d: "Especialização em bloqueio de redes sociais — alta demanda." },
            { i: TrendingUp, t: "Escalabilidade", d: "Volume mensal previsível. Foque no que importa: advogar." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="p-8 rounded-2xl bg-card border border-border">
              <Icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-display text-2xl font-bold mb-2">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-card border border-border p-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Como funciona a parceria</h2>
          <ul className="space-y-4">
            {[
              "Cadastro e validação da OAB",
              "Definição da região e volume desejado",
              "Início imediato no recebimento de leads",
              "Pagamento mensal proporcional ao volume contratado",
              "Suporte dedicado e relatórios de performance",
            ].map(x => (
              <li key={x} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cadastro" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Cadastro de parceiros</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Receba lides qualificadas todos os meses.</h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-md">
              Preencha seus dados e nossa equipe validará seu cadastro. Assim que aprovado, você começa a receber leads filtrados do seu estado.
            </p>
            <ul className="mt-8 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> Leads com alta taxa de conversão</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> Pagamento mensal proporcional</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /> Suporte e relatórios de performance</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <h3 className="font-display text-2xl font-bold mb-1">Quero ser parceiro</h3>
            <p className="text-sm text-muted-foreground mb-6">Resposta em até 24h. Vagas limitadas.</p>
            <LawyerForm />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-12 md:p-16 text-center">
          <ShieldCheck className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Vamos crescer juntos.</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Vagas limitadas por região para garantir qualidade de atendimento.</p>
          <a href={`${WHATSAPP.replace("Quero%20analisar%20meu%20caso","Quero%20me%20cadastrar%20como%20advogado%20parceiro")}`} target="_blank" rel="noopener" className="mt-8 inline-flex px-10 py-4 rounded-full bg-background text-foreground font-bold hover:scale-105 transition">
            Falar no WhatsApp →
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
