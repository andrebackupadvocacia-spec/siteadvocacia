import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Direitos digitais e redes sociais | Meu Direito Já" },
      { name: "description", content: "Artigos sobre bloqueio de Instagram, WhatsApp banido, recuperação de contas e seus direitos digitais." },
      { property: "og:title", content: "Blog Meu Direito Já" },
      { property: "og:description", content: "Conteúdo sobre direitos digitais, bloqueios e indenizações." },
    ],
  }),
  component: Blog,
});

const posts = [
  { slug: "instagram-bloqueado", title: "Conta do Instagram bloqueada: o que fazer?", excerpt: "Passo a passo para recuperar e quando é hora de procurar um advogado.", tag: "Instagram" },
  { slug: "whatsapp-banido", title: "WhatsApp banido injustamente: seus direitos", excerpt: "Como agir quando o app essencial do seu negócio é bloqueado sem aviso.", tag: "WhatsApp" },
  { slug: "recuperar-redes", title: "Como recuperar redes sociais bloqueadas", excerpt: "Caminhos extrajudiciais e judiciais para reaver acesso às suas contas.", tag: "Guia" },
  { slug: "indenizacao-bloqueio", title: "Quando o bloqueio gera direito a indenização?", excerpt: "Entenda o que caracteriza dano moral e material em bloqueios indevidos.", tag: "Indenização" },
];

function Blog() {
  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 max-w-3xl">Conteúdo que defende seus direitos.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Artigos práticos sobre redes sociais, bloqueios e direitos digitais.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{p.tag}</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-4 group-hover:text-primary transition">{p.title}</h2>
            <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Em breve <ArrowRight className="w-4 h-4" />
            </span>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
