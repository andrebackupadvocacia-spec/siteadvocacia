import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { SiteLayout, WHATSAPP } from "@/components/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import {
  Instagram, Facebook, Youtube, MessageSquare, Music2,
  TrendingDown, Ban, Heart, DollarSign,
  Zap, Repeat, Flag, AlertTriangle,
  FileSearch, Users, Scale, Award,
  ChevronDown, ArrowRight, Briefcase,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Direito Já — Recupere sua conta bloqueada e receba indenização" },
      { name: "description", content: "Teve Instagram, WhatsApp, Facebook ou TikTok bloqueado? Conectamos você a advogados especialistas. Análise gratuita." },
      { property: "og:title", content: "Meu Direito Já — Recupere sua conta bloqueada" },
      { property: "og:description", content: "Análise gratuita do seu caso. Recuperação e indenização por bloqueio em redes sociais." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Authority />
      <Why />
      <Consequences />
      <Solution />
      <CTABig />
      <Testimonials />
      <LawyerCTA />
      <FAQ />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Análise gratuita do seu caso
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Recuperação de Rede social <span className="text-primary">bloqueada</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
            Somos especialistas em <strong className="text-foreground">recuperação rápida de redes sociais</strong>, com resultados em <strong className="text-foreground">menos de 72 horas</strong> — sem custo inicial.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#form" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-[0_20px_60px_-20px_oklch(0.72_0.18_155_/_0.6)]">
              Quero analisar meu caso
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary font-semibold transition">
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Sem custo inicial</div>
            <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-primary" /> Atendemos todos Brasil</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl blur-2xl" />
          <div id="form" className="relative bg-card border border-border rounded-2xl p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <h2 className="font-display text-2xl font-bold mb-1">Conte seu caso</h2>
            <p className="text-sm text-muted-foreground mb-6">Resposta em até 24h. Análise gratuita.</p>
            <LeadForm />
          </div>
        </div>
      </div>

      <div className="relative border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-8 md:gap-14 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Recuperamos todos os tipos de redes sociais:</span>
          <Instagram className="w-6 h-6" /> <Facebook className="w-6 h-6" /> <MessageSquare className="w-6 h-6" /> <Music2 className="w-6 h-6" /> <Youtube className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}

function Authority() {
  const stats = [
    { n: "+3.500", l: "Casos analisados" },
    { n: "98%", l: "Taxa de êxito" },
    { n: "+150", l: "Advogados parceiros" },
    { n: "24h", l: "Resposta inicial" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-center font-display text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight">
        “Hoje, redes sociais não são lazer. <span className="text-primary">São renda.</span>”
      </p>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.l} className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="font-display text-4xl md:text-5xl font-bold text-primary">{s.n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { i: Zap, t: "Automações", d: "Uso de bots e ferramentas de automação detectadas pelas plataformas." },
    { i: Repeat, t: "Comportamento repetitivo", d: "Curtidas, follows ou mensagens em massa." },
    { i: Flag, t: "Denúncias", d: "Denúncias falsas ou em massa por concorrentes ou terceiros." },
    { i: AlertTriangle, t: "Erros da plataforma", d: "Bloqueios indevidos por falhas no algoritmo." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">O Problema</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Por que contas são bloqueadas?</h2>
        <p className="text-muted-foreground mt-4 text-lg">Na maioria das vezes, sem aviso e sem motivo justo.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ i: Icon, t, d }) => (
          <div key={t} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Consequences() {
  const items = [
    { i: DollarSign, t: "Perda de dinheiro", d: "Vendas paradas e prejuízo imediato." },
    { i: TrendingDown, t: "Queda nas vendas", d: "Audiência construída por anos, perdida." },
    { i: Ban, t: "Conta inacessível", d: "Sem contatos, sem histórico, sem trabalho." },
    { i: Heart, t: "Sensação de injustiça", d: "Frustração, insegurança e estresse." },
  ];
  return (
    <section className="relative py-24 border-y border-border bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">As Consequências</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Um bloqueio é mais que um susto.</h2>
          <p className="text-muted-foreground mt-4 text-lg">É um golpe direto na sua renda, no seu negócio e na sua paz.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="p-8 rounded-2xl bg-card border border-border">
              <Icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-display text-xl font-bold mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const steps = [
    { i: FileSearch, t: "Você envia seu caso", d: "Em poucos minutos, pelo formulário ou WhatsApp." },
    { i: Scale, t: "Analisamos gratuitamente", d: "Avaliamos a viabilidade jurídica do seu caso." },
    { i: Users, t: "Conectamos a um especialista", d: "Advogado certo, no seu estado, sem burocracia." },
    { i: Award, t: "Recuperação e indenização", d: "Sua conta de volta + possível ressarcimento financeiro." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">A Solução</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Você não precisa enfrentar isso sozinho.</h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Somos uma <strong className="text-foreground">ponte</strong> entre você e advogados especializados em todo o Brasil.
        </p>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((s, idx) => (
          <div key={s.t} className="relative">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{idx + 1}</div>
                <s.i className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABig() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-12 md:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(1_0_0_/_0.2),_transparent_60%)]" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">Não deixe seu caso esfriar.</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">Quanto antes começamos, maiores as chances de recuperação.</p>
          <a href="#form" className="mt-8 inline-flex px-10 py-4 rounded-full bg-background text-foreground font-bold hover:scale-105 transition">
            Falar com especialista agora →
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Carla M.", r: "Empreendedora", s: "Perdi minha conta com 80 mil seguidores. Em 3 semanas, recuperei e recebi indenização. Não esperava." },
    { n: "Rafael S.", r: "Vendedor", s: "Meu WhatsApp Business foi banido sem motivo. A equipe me conectou rápido a um advogado e deu certo." },
    { n: "Juliana P.", r: "Influenciadora", s: "Tudo gratuito até a vitória. Atendimento humano e direto. Recomendo demais." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Histórias reais</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Pessoas que voltaram a respirar.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {t.map(x => (
          <div key={x.n} className="p-8 rounded-2xl bg-card border border-border">
            <p className="text-foreground/90 leading-relaxed">"{x.s}"</p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="font-bold">{x.n}</div>
              <div className="text-sm text-muted-foreground">{x.r}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LawyerCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/70 p-12 md:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(1_0_0_/_0.2),_transparent_60%)]" />
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6">
            <Briefcase className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-2xl mx-auto">
            Você é advogado e quer receber clientes qualificados?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Cadastre-se como parceiro e receba leads filtrados do seu estado todos os meses.
          </p>
          <Link
            to="/advogados"
            className="mt-8 inline-flex items-center gap-3 px-10 py-4 rounded-full bg-background text-foreground font-bold hover:scale-105 transition"
          >
            Quero ser parceiro
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Quais tipos de bloqueio vocês recuperam?", a: "Banimento por automações ou CRM, suspensões injustas, denúncias de spam, contas comerciais ou pessoais banidas." },
    { q: "Tenho que pagar algo agora?", a: "Não. A análise é sem custo e o pagamento de honorário é somente no êxito, ou seja, só paga depois de recuperar as contas." },
    { q: "Como eu entro em contato?", a: "Tudo é feito via WhatsApp, de forma rápida e direta. Estamos prontos para te ajudar!" },
    { q: "Quanto tempo demora?", a: "O prazo pode variar dependendo do tipo da rede social (Facebook, Instagram, Whatsapp, etc) e o tipo de bloqueio (Hackeado ou Banido), muitos clientes tem o número de Whatsapp desbloqueado nas primeiras horas. Quanto mais rápido você entrar em contato conosco, mais rápida é a recuperação e a indenização." },
    { q: "Qual o valor da indenização?", a: "A indenização gira em torno de 5 a 20 mil reais por número banido. Já tivemos clientes que receberam mais de 50 mil, por conta das multas." },
    { q: "Vocês são um escritório de advocacia?", a: "Não. Somos intermediadores: conectamos você a advogados especialistas em todo o Brasil." },
  ];
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Dúvidas frequentes</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Perguntas que todos fazem.</h2>
      </div>
      <div className="space-y-3">
        {qs.map((x, i) => <FaqItem key={i} {...x} />)}
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-card border border-border overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full px-6 py-5 flex items-center justify-between text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-muted-foreground">{a}</div>}
    </div>
  );
}
