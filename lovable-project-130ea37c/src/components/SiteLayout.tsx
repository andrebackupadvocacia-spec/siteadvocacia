import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.png";

const WHATSAPP = "https://wa.me/5514997906336?text=Quero%20analisar%20meu%20caso";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Meu Direito Já" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition">Início</Link>
          <Link to="/advogados" className="text-muted-foreground hover:text-foreground transition">Para Advogados</Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition">Blog</Link>
          <Link to="/contato" className="text-muted-foreground hover:text-foreground transition">Contato</Link>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition">
          <WhatsAppIcon className="w-6 h-6" />
          Falar agora
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img src={logo} alt="Meu Direito Já" className="h-12 w-auto" />
          </div>
          <p className="text-muted-foreground text-sm max-w-md">
            Somos uma ponte entre você e advogados especialistas em recuperação de contas e indenizações por bloqueio em redes sociais.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Início</Link></li>
            <li><Link to="/advogados" className="hover:text-foreground">Para Advogados</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contato@meudireitoja.com.br</li>
            <li>WhatsApp 24h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Meu Direito Já. Intermediação jurídica. Não exercemos atividade de advocacia.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_10px_30px_-5px_oklch(0.72_0.18_155_/_0.6)] hover:scale-110 transition-transform"
    >
      <WhatsAppIcon className="w-9 h-9" />
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export { WHATSAPP };
