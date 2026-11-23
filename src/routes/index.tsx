import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Menu, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixel Studio — Sites profissionais" },
      { name: "description", content: "Criamos sites profissionais, modernos e responsivos para o seu negócio." },
    ],
  }),
  component: HomePage,
});

const plans = [
  { name: "Essencial", price: "349", description: "Para dar o primeiro passo na internet.", features: ["Site de apresentação em uma página", "Informações do seu negócio", "Botão de contato pelo WhatsApp"] },
  { name: "Profissional", price: "449", description: "Para apresentar seus serviços com mais detalhes.", featured: true, features: ["Tudo do Essencial", "Galeria de fotos", "Seção de serviços"] },
  { name: "Completo", price: "599", description: "Para uma presença digital mais completa.", features: ["Tudo do Profissional", "Até 3 páginas", "Formulário de contato"] },
];

function Brand() {
  return <a href="/" className="brand"><span className="brand-mark">P.</span><span>Pixel <b>Studio</b></span></a>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="simple-site">
    <header className="header">
      <div className="container header-content">
        <Brand />
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
          <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <Link to="/login">Área do cliente</Link>
          <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Fale conosco <ArrowRight size={15}/></a>
        </nav>
      </div>
    </header>

    <section className="hero container">
      <div className="hero-content">
        <span className="eyebrow"><i/> CRIAÇÃO DE SITES</span>
        <h1>Seu negócio merece estar <span>bem apresentado.</span></h1>
        <p>Criamos sites modernos e profissionais para sua empresa ter presença na internet e transmitir confiança aos seus clientes.</p>
        <div className="hero-buttons">
          <a className="primary-button" href="#planos">Conheça os planos <ArrowRight size={17}/></a>
          <a className="secondary-link" href="#processo">Como funciona</a>
        </div>
        <div className="hero-note"><span><Check size={15}/></span> Layout responsivo, pensado para celular e computador.</div>
      </div>
      <div className="hero-preview">
        <div className="preview-top"><span/><span/><span/><div>seunegocio.com.br</div></div>
        <div className="preview-page">
          <div className="preview-brand">SUA MARCA</div>
          <div className="preview-copy"><small>APRESENTE SEU NEGÓCIO</small><strong>Uma presença<br/><em>que faz a diferença.</em></strong><i/></div>
          <div className="preview-shape"><div/></div>
          <div className="preview-bottom"><span>QUALIDADE E CONFIANÇA</span><span>01</span></div>
        </div>
      </div>
    </section>

    <section className="plans-section" id="planos">
      <div className="container">
        <div className="section-title"><span className="eyebrow">PLANOS</span><h2>Um site do tamanho<br/>do seu negócio.</h2><p>Escolha a opção que melhor atende ao que você precisa.</p></div>
        <div className="plans-grid">{plans.map((plan) => <article className={plan.featured ? "plan-card plan-featured" : "plan-card"} key={plan.name}>
          {plan.featured && <span className="plan-label">MAIS ESCOLHIDO</span>}
          <h3>{plan.name}</h3><p className="plan-description">{plan.description}</p>
          <div className="price"><small>R$</small><strong>{plan.price}</strong><span>por projeto</span></div>
          <div className="plan-divider"/>
          <ul>{plan.features.map((feature) => <li key={feature}><Check size={16}/>{feature}</li>)}</ul>
          <Link className={plan.featured ? "primary-button plan-action" : "dark-button plan-action"} to="/cadastro">Escolher plano <ArrowRight size={16}/></Link>
        </article>)}</div>
        <p className="plans-footnote">Hospedagem e pequenas atualizações opcionais: Pixel Care por R$ 49/mês.</p>
      </div>
    </section>

    <section className="process-section" id="processo">
      <div className="container process-content">
        <div><span className="eyebrow">SEM COMPLICAÇÃO</span><h2>Como funciona?</h2><p>Um processo simples, com você acompanhando cada etapa.</p></div>
        <div className="process-steps">
          <div><span>01</span><b>Escolha seu plano</b><p>Defina a opção ideal para seu negócio.</p></div>
          <div><span>02</span><b>Envie suas informações</b><p>Conte um pouco sobre sua empresa.</p></div>
          <div><span>03</span><b>Receba seu site</b><p>Revisamos os detalhes e colocamos no ar.</p></div>
        </div>
      </div>
    </section>

    <section className="contact-section container" id="contato">
      <div><span className="eyebrow">VAMOS COMEÇAR?</span><h2>Leve seu negócio<br/>para a internet.</h2><p>Fale com a gente e tire suas dúvidas sobre a criação do seu site.</p></div>
      <a className="primary-button contact-button" href="https://wa.me/5541999642747" target="_blank" rel="noreferrer">Conversar pelo WhatsApp <ArrowRight size={17}/></a>
    </section>

    <footer className="footer"><div className="container footer-content"><Brand/><span>Sites profissionais para o seu negócio.</span><small>© {new Date().getFullYear()} Pixel Studio. Todos os direitos reservados.</small></div></footer>
  </main>;
}
