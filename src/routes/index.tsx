import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Crown, Diamond, Menu, MousePointer2, Star, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixel Studio — Seu negócio merece um site profissional" },
      { name: "description", content: "Sites modernos e responsivos para apresentar sua empresa na internet. Conheça os planos da Pixel Studio." },
      { property: "og:title", content: "Pixel Studio — Sites profissionais" },
      { property: "og:description", content: "Seu negócio merece um site profissional." },
    ],
  }),
  component: HomePage,
});

const plans = [
  { name: "ESSENCIAL", price: "349", tagline: "Para começar sua presença digital.", icon: Diamond, features: ["Site de apresentação em uma página", "Informações de contato", "Botão do WhatsApp"] },
  { name: "PROFISSIONAL", price: "449", tagline: "Para apresentar melhor seus serviços.", icon: Star, recommended: true, features: ["Tudo do Essencial", "Galeria de fotos", "Seção de serviços"] },
  { name: "COMPLETO", price: "599", tagline: "Para uma apresentação mais completa.", icon: Crown, features: ["Tudo do Profissional", "Até 3 páginas", "Formulário de contato"] },
];

function PixelMark() {
  return <svg viewBox="0 0 34 34" aria-hidden="true" className="pixel-mark"><path d="M4 4h18v5H9v5h13v5H9v11H4z" fill="currentColor"/><path d="M22 4h8v5h-8zM22 14h8v5h-8zM14 24h8v6h-8z" fill="currentColor" opacity=".55"/></svg>;
}
function Brand() { return <a className="brand" href="/" aria-label="Pixel Studio início"><PixelMark/><span>Pixel <b>Studio</b></span></a>; }

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  return <main className="site-shell">
    <div className="corner corner-top" /><div className="corner corner-bottom" />
    <header className="site-header">
      <div className="header-inner"><Brand/>
        <button className="mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a><a className="button button-small" href="https://wa.me/5541999642747" target="_blank" rel="noreferrer">Começar agora <ArrowUpRight size={16}/></a>
        </nav>
      </div>
    </header>
    <section className="hero section-wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot"/> SITES PROFISSIONAIS PARA PEQUENOS NEGÓCIOS</div>
        <h1>Seu negócio merece um <span>site profissional.</span></h1>
        <p className="hero-sub">Sites modernos e responsivos para apresentar sua empresa na internet. Você cuida do negócio. A gente cuida da sua presença digital.</p>
        <div className="hero-actions"><a className="button" href="#planos">Conhecer os planos <ArrowRight size={18}/></a><a className="button button-outline" href="#como-funciona">Como funciona</a></div>
        <div className="hero-proof"><div className="proof-avatars"><span>P</span><span>S</span><span>+</span></div><p><b>Seu próximo passo começa aqui.</b><br/>Uma presença digital feita para crescer.</p></div>
      </div>
      <div className="hero-visual" aria-label="Prévia ilustrativa de um site em um notebook">
        <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
        <div className="pixel-sprinkle sprinkle-one">▦</div><div className="pixel-sprinkle sprinkle-two">▧</div>
        <div className="browser-window">
          <div className="browser-top"><div className="browser-dots"><i/><i/><i/></div><div className="browser-address">suaempresa.com.br</div><div className="browser-menu">•••</div></div>
          <div className="browser-content">
            <div className="preview-nav"><span className="preview-logo"><i/> SUA MARCA</span><span>Sobre　 Serviços　 Contato</span></div>
            <div className="preview-body"><div className="preview-kicker">FEITO PARA VOCÊ</div><div className="preview-title">Uma ideia<br/><em>que conecta.</em></div><div className="preview-line"/><div className="preview-button">Conheça nosso trabalho ↗</div></div>
            <div className="preview-photo"><div className="photo-sun"/><div className="photo-arch"/><div className="photo-pot"/></div>
            <div className="preview-footer"><span>QUALIDADE EM CADA DETALHE</span><span>01 / 03</span></div>
          </div>
        </div>
        <div className="floating-note note-top"><span className="note-icon"><Check size={15}/></span><span><b>Visual profissional</b><small>Em todos os dispositivos</small></span></div>
        <div className="floating-note note-bottom"><span className="note-icon note-orange"><MousePointer2 size={16}/></span><span><b>Pronto para crescer</b><small>Sua marca na internet</small></span></div>
        <div className="hero-caption">UMA NOVA FORMA DE MOSTRAR O SEU NEGÓCIO <span>✳</span></div>
      </div>
    </section>
    <section className="trust-strip"><div className="section-wrap trust-inner"><span>MENOS COMPLICAÇÃO.</span><i/><b>MAIS PRESENÇA DIGITAL.</b><i/><span>DO SEU JEITO.</span></div></section>
    <section className="portfolio-teaser section-wrap">
      <div className="section-heading"><div><div className="eyebrow">POSSIBILIDADES REAIS</div><h2>Seu site. Sua identidade.<br/><span>Seu espaço na internet.</span></h2></div><Link className="text-link" to="/portfolio">Explorar portfólio <ArrowUpRight size={17}/></Link></div>
      <div className="showcase-grid">
        <article className="showcase-card showcase-large"><div className="showcase-label">01 / GASTRONOMIA</div><div className="showcase-art art-food"><div className="food-copy">Sabor que<br/><i>fica na memória.</i></div><div className="food-plate"><div/></div></div><div className="showcase-meta"><b>Restaurante & Gastronomia</b><span>Apresente seu cardápio com personalidade.</span></div></article>
        <article className="showcase-card"><div className="showcase-label">02 / BEM-ESTAR</div><div className="showcase-art art-wellness"><div className="wellness-shape"/><div className="wellness-copy">Cuidado<br/>em cada<br/><i>detalhe.</i></div></div><div className="showcase-meta"><b>Estúdio & Bem-estar</b><span>Conecte pessoas ao seu trabalho.</span></div></article>
        <article className="showcase-card"><div className="showcase-label">03 / SERVIÇOS</div><div className="showcase-art art-services"><div className="service-window"><div className="service-bar"/><div className="service-block"/><div className="service-lines"/></div><div className="service-copy">Seu trabalho<br/><i>em destaque.</i></div></div><div className="showcase-meta"><b>Profissionais & Serviços</b><span>Mostre o que você faz de melhor.</span></div></article>
      </div>
    </section>
    <section className="process-section" id="como-funciona"><div className="section-wrap process-wrap"><div className="process-heading"><div className="eyebrow eyebrow-light">SIMPLES DO INÍCIO AO FIM</div><h2>Do primeiro passo<br/>ao <span>site no ar.</span></h2><p>Um processo claro, sem complicação. Você acompanha cada etapa enquanto a gente transforma suas ideias em presença digital.</p></div>
      <div className="steps"><div className="step"><div className="step-number">01</div><div className="step-line"/><h3>Escolha</h3><p>Encontre o plano que combina com o momento do seu negócio.</p></div><div className="step"><div className="step-number">02</div><div className="step-line"/><h3>Briefing</h3><p>Conte sobre sua empresa, seus objetivos e sua identidade.</p></div><div className="step"><div className="step-number">03</div><div className="step-line"/><h3>Criação</h3><p>A gente desenvolve seu site com cuidado em cada detalhe.</p></div><div className="step"><div className="step-number">04</div><div className="step-line"/><h3>No ar</h3><p>Seu site pronto para ser compartilhado com o mundo.</p></div></div>
      <div className="process-bottom"><span>CLAREZA EM CADA ETAPA</span><span>PIXEL STUDIO <b>✳</b></span></div>
    </div></section>
    <section className="pricing-section section-wrap" id="planos"><div className="pricing-intro"><div className="eyebrow">PLANOS TRANSPARENTES</div><h2>O próximo passo<br/>do seu negócio <span>começa aqui.</span></h2><p>Escolha o que faz sentido agora. Sem letras miúdas, sem complicação.</p></div>
      <div className="plan-grid">{plans.map((plan) => {const Icon=plan.icon;return <article className={plan.recommended ? "plan-card plan-featured" : "plan-card"} key={plan.name}>{plan.recommended && <div className="recommended">RECOMENDADO</div>}<div className="plan-top"><div className="plan-icon"><Icon size={21}/></div><span>0{plans.indexOf(plan)+1}</span></div><h3>{plan.name}</h3><p className="plan-tagline">{plan.tagline}</p><div className="plan-price"><small>R$</small><strong>{plan.price}</strong><span> / projeto</span></div><div className="plan-divider"/><ul>{plan.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><Link className={plan.recommended ? "button plan-button" : "button button-dark plan-button"} to="/cadastro">Escolher plano <ArrowRight size={17}/></Link></article>})}</div>
      <div className="care-note"><span className="care-spark">✳</span><p><b>Quer manter seu site sempre atualizado?</b><br/>Conheça o Pixel Care, com hospedagem e pequenas atualizações por <strong>R$ 49/mês.</strong></p><span className="care-tag">OPCIONAL</span></div>
    </section>
    <section className="faq-section section-wrap"><div className="faq-intro"><div className="eyebrow">DÚVIDAS FREQUENTES</div><h2>Ficou com<br/>alguma <span>dúvida?</span></h2><p>Separamos algumas respostas para você começar com tranquilidade.</p><a className="text-link" href="https://wa.me/5541999642747" target="_blank" rel="noreferrer">Fale com a gente <ArrowUpRight size={17}/></a></div>
      <div className="faq-list">{["O que preciso enviar para criar meu site?","Quanto tempo leva para meu site ficar pronto?","Posso pedir alterações durante a criação?","O site funciona em celular e computador?","O que é o Pixel Care?"].map((q,i)=><div className={faqOpen===i?"faq-item faq-active":"faq-item"} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>0{i+1}</span><b>{q}</b><i>{faqOpen===i?"−":"+"}</i></button>{faqOpen===i&&<p>{["Depois da contratação, você preenche um briefing simples com as informações da empresa, referências, cores, textos e imagens que deseja usar. Se precisar, ajudamos a organizar tudo.","O prazo é combinado após analisarmos o briefing e a complexidade do projeto. Você acompanha as etapas e recebe atualizações durante a produção.","Sim. O processo prevê uma etapa de revisão para ajustar os detalhes e deixar o resultado alinhado com o que foi combinado.","Sim. Todos os projetos são pensados para funcionar bem em celulares, tablets e computadores.","É um serviço opcional de R$ 49 por mês que reúne hospedagem e pequenas atualizações para manter seu site em dia."][i]}</p>}</div>)}</div>
    </section>
    <section className="final-cta section-wrap"><div className="cta-pixels">▦ ▧ ▦</div><div><div className="eyebrow eyebrow-light">SUA PRESENÇA DIGITAL COMEÇA AQUI</div><h2>Vamos tirar sua ideia<br/>do papel?</h2></div><a className="whatsapp-cta" href="https://wa.me/5541999642747" target="_blank" rel="noreferrer"><span className="whatsapp-symbol">◉</span><i/><span><b>Fale pelo WhatsApp</b><small>(41) 99964-2747</small></span><ArrowUpRight/></a></section>
    <footer className="site-footer"><div className="section-wrap footer-main"><Brand/><p>Sites profissionais para negócios<br/>que querem crescer.</p><div className="footer-links"><a href="#como-funciona">Como funciona</a><a href="#planos">Planos</a><Link to="/portfolio">Portfólio</Link><Link to="/login">Área do cliente</Link></div><a className="footer-contact" href="https://wa.me/5541999642747" target="_blank" rel="noreferrer">Vamos conversar <ArrowUpRight size={16}/></a></div><div className="section-wrap footer-bottom"><span>PIXEL STUDIO • SITES PROFISSIONAIS PARA SEU NEGÓCIO</span><span>FEITO COM INTENÇÃO. ✳</span></div></footer>
  </main>;
}
