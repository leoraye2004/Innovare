const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.innovarerevestimentos.com.br";
const WHATSAPP = "5547989292335";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento.`;

const { SERVICES } = require("./services-data");

// Título da aba/Google: o H1 + " | Innovare" quando couber em 60 caracteres; senão só o H1;
// se nem o H1 couber, usa a variante curta definida no serviço (titleShort).
const LIMITE_TITULO = 60;
const MARCA = " | Innovare";
SERVICES.forEach(s => {
  const comMarca = s.h1 + MARCA;
  s.metaTitle = comMarca.length <= LIMITE_TITULO ? comMarca
    : s.h1.length <= LIMITE_TITULO ? s.h1
    : (s.titleShort || s.h1);
});

const OUTRO = "Outro / Não sei ainda";

function selectOptionsHtml(selectedLabel, indent) {
  const labels = SERVICES.map(s => s.selectLabel).concat(OUTRO);
  const opts = labels.map(l => `<option${l === selectedLabel ? " selected" : ""}>${esc(l)}</option>`).join("\n" + indent);
  return `<option value="" disabled${selectedLabel ? "" : " selected"}>Selecione um serviço</option>\n${indent}${opts}`;
}

function serviceSelectHtml(service) {
  return selectOptionsHtml(service.selectLabel, "          ");
}

function esc(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function faqJsonLd(service) {
  const items = service.faq.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a }
  }));
  return JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items }, null, 2);
}

function serviceJsonLd(service) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.h1,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Innovare Decorações & Revestimentos",
      telephone: "+55 47 98929-2335",
      email: "innovare@innovaredecoracoes.com.br",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Minas Gerais - Nova Brasília",
        addressLocality: "Joinville",
        addressRegion: "SC",
        postalCode: "89214-600",
        addressCountry: "BR"
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "11:30" }
      ]
    },
    areaServed: "Joinville e região",
    url: `${SITE_URL}/servicos/${service.slug}.html`
  }, null, 2);
}

function relatedLinks(current) {
  return SERVICES.filter(s => s.slug !== current.slug)
    .map(s => `<a href="${s.slug}.html">${s.name}</a>`)
    .join("\n        ");
}

function page(service) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<!-- Google Consent Mode v2: padrão negado até o visitante aceitar os cookies -->
<script>
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });
  try {
    if (localStorage.getItem('innovare_cookie_consent') === 'accepted') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted'
      });
    }
  } catch (e) {}
})();
</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBQ758QF');</script>
<!-- End Google Tag Manager -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(service.metaTitle)}</title>
<meta name="description" content="${esc(service.metaDesc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/servicos/${service.slug}.html">

<meta property="og:type" content="website">
<meta property="og:title" content="${esc(service.metaTitle)}">
<meta property="og:description" content="${esc(service.metaDesc)}">
<meta property="og:image" content="${SITE_URL}/images/og/${service.slug}.jpg">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="${SITE_URL}/servicos/${service.slug}.html">

<link rel="icon" type="image/png" href="../images/logo.png">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet" href="../css/styles.css?v=17">

<script type="application/ld+json">
${serviceJsonLd(service)}
</script>
<script type="application/ld+json">
${faqJsonLd(service)}
</script>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBQ758QF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header class="header" id="header">
  <div class="container header__inner">
    <a href="../index.html#top" class="header__logo">
      <img src="../images/logo.png" alt="Innovare Decorações & Revestimentos - Joinville" width="48" height="48">
      <span class="header__logo-text">INNOVARE<small>REVESTIMENTOS &amp; DECORAÇÕES</small></span>
    </a>

    <nav class="header__nav" id="nav">
      <a href="../index.html#sobre">Sobre</a>
      <a href="../index.html#servicos">Serviços</a>
      <a href="../index.html#portfolio">Portfólio</a>
      <a href="../index.html#diferenciais">Diferenciais</a>
      <a href="../index.html#faq">Dúvidas</a>
      <a href="../index.html#contato">Contato</a>
    </nav>

    <div class="header__actions">
      <a data-conversao="ligacao" href="tel:+5547989292335" class="btn btn--ghost btn--sm" data-track="call_header">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
        (47) 98929-2335
      </a>
      <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--primary btn--sm" data-track="whatsapp_header">
        <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.7 14.4 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 8.9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3 0-.1-.2-.2-.4-.3z"/></svg>
        WhatsApp
      </a>
    </div>

    <button class="header__burger" id="burger" aria-label="Abrir menu"><span></span><span></span><span></span></button>
  </div>
</header>

<main>
<section class="hero hero--service">
  <div class="hero__media">
    <img src="../${service.heroImg}" alt="${esc(service.heroAlt)}" loading="eager">
    <div class="hero__overlay"></div>
  </div>
  <div class="container hero__content">
    <nav class="breadcrumb reveal" aria-label="breadcrumb">
      <a href="../index.html#top">Início</a> <span>/</span>
      <a href="../index.html#servicos">Serviços</a> <span>/</span>
      <span>${esc(service.name)}</span>
    </nav>
    <p class="eyebrow reveal">Innovare Decorações &amp; Revestimentos · Joinville - SC</p>
    <h1 class="reveal">${esc(service.h1)}</h1>${service.heroSub ? `
    <p class="hero__sub reveal">${esc(service.heroSub)}</p>` : ""}
    <div class="hero__cta reveal">
      <a href="#orcamento" class="btn btn--primary btn--lg" data-track="cta_hero_form">Quero meu Orçamento Grátis</a>
      <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--outline btn--lg" data-track="cta_hero_whatsapp">
        <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.7 14.4 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 8.9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3 0-.1-.2-.2-.4-.3z"/></svg>
        Falar no WhatsApp agora
      </a>
    </div>
  </div>
</section>

<section class="section service-detail">
  <div class="container service-detail__grid">
    <div class="service-detail__media reveal">
      <img src="../${service.detailImg}" alt="${esc(service.detailAlt)}" loading="lazy">
    </div>
    <div>
      <p class="section__eyebrow reveal">${esc(service.name)}</p>
      <h2 class="section__title reveal">${esc(service.detailTitle || service.h1)}</h2>
      ${service.intro.map(p => `<p class="reveal">${esc(p)}</p>`).join("\n      ")}
      <ul class="service-detail__benefits">
        ${service.benefits.map(b => `<li class="reveal"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> ${esc(b)}</li>`).join("\n        ")}
      </ul>
      <a href="#orcamento" class="btn btn--primary btn--lg reveal" data-track="cta_detail">Solicitar Orçamento Grátis</a>
    </div>
  </div>${service.topics ? `
  <div class="container service-topics"${(service.topicsCols || service.topics.length) !== 3 ? ` style="--cols:${service.topicsCols || service.topics.length}"` : ""}>
    ${service.topics.map(t => `<div class="service-topic${t.img ? " service-topic--img" : ""} reveal">${t.img ? `
      <img class="service-topic__img" src="../${t.img}" alt="${esc(t.alt || t.title)}" loading="lazy">` : ""}
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.text)}</p>
    </div>`).join("\n    ")}
  </div>` : ""}
</section>

<section id="orcamento" class="section orcamento">
  <div class="container orcamento__grid">
    <div class="orcamento__info reveal">
      <p class="section__eyebrow section__eyebrow--light">Orçamento grátis</p>
      <h2>Peça agora sua proposta sem compromisso</h2>
      <p>Preencha o formulário e fale diretamente com nossa equipe pelo WhatsApp. Atendemos Joinville e região.</p>
      <ul>
        <li><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> Resposta rápida pelo WhatsApp</li>
        <li><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> Visita técnica agendada</li>
        <li><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.3 5.3l-11 11-5.6-5.6 1.4-1.4 4.2 4.2 9.6-9.6z"/></svg> Orçamento sem compromisso</li>
      </ul>
      <a data-conversao="ligacao" href="tel:+5547989292335" class="orcamento__phone">
        <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
        (47) 98929-2335
      </a>
    </div>

    <form class="orcamento__form reveal" id="leadForm">
      <h3>Solicitar orçamento</h3>
      <label class="hp-field" aria-hidden="true">Deixe em branco
        <input type="text" name="website" tabindex="-1" autocomplete="off">
      </label>
      <label>Nome
        <input type="text" name="nome" placeholder="Seu nome completo" required>
      </label>
      <label>WhatsApp
        <input type="tel" name="telefone" placeholder="(47) 99999-9999" required>
      </label>
      <label>Serviço de interesse
        <select name="servico" required>
          ${serviceSelectHtml(service)}
        </select>
      </label>
      <label>Conte um pouco sobre o projeto
        <textarea name="mensagem" rows="3" placeholder="Ex: preciso de ${esc(service.name.toLowerCase())} para um ambiente de 30m²"></textarea>
      </label>
      <button type="submit" class="btn btn--primary btn--lg" data-track="cta_form_submit">Enviar e receber orçamento</button>
      <p class="orcamento__form-note">Ao enviar, você será direcionado ao WhatsApp da Innovare para finalizar seu pedido.</p>
    </form>
  </div>
</section>

<section class="section faq">
  <div class="container">
    <p class="section__eyebrow reveal">Dúvidas frequentes</p>
    <h2 class="section__title reveal">Perguntas sobre ${esc(service.name)}</h2>
    <div class="faq__list">
      ${service.faq.map(([q, a], i) => `<details class="faq__item reveal"${i === 0 ? " open" : ""}>
        <summary>${esc(q)}</summary>
        <p>${esc(a)}</p>
      </details>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="related-services">
  <div class="container">
    <p class="section__eyebrow reveal">Outros serviços</p>
    <h2 class="section__title reveal">Também trabalhamos com</h2>
    <div class="related-services__grid reveal">
      ${relatedLinks(service)}
    </div>
  </div>
</section>

<section class="cta-final">
  <div class="container cta-final__inner reveal">
    <h2>Pronto para transformar seu espaço?</h2>
    <p>Fale agora com a Innovare Decorações &amp; Revestimentos e peça seu orçamento gratuito.</p>
    <div class="cta-final__buttons">
      <a href="#orcamento" class="btn btn--primary btn--lg" data-track="cta_final_form">Solicitar Orçamento Grátis</a>
      <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--outline-light btn--lg" data-track="cta_final_whatsapp">Chamar no WhatsApp</a>
    </div>
  </div>
</section>

</main>

<footer class="footer" id="contato">
  <div class="container footer__grid">
    <div>
      <img src="../images/logo.png" alt="Innovare Decorações & Revestimentos" width="64" height="64" class="footer__logo">
      <p>Especialistas em revestimentos e decoração, com fornecimento e instalação profissional em Joinville e região.</p>
      <a href="https://www.instagram.com/innovaredecoracoes/" target="_blank" rel="noopener" class="footer__social">
        <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"/></svg>
        @innovaredecoracoes
      </a>
    </div>
    <div>
      <h3>Contato</h3>
      <p><a data-conversao="ligacao" href="tel:+5547989292335">(47) 98929-2335</a></p>
      <div class="footer__contact-row">
        <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--primary btn--sm" data-track="whatsapp_footer">WhatsApp</a>
        <a href="mailto:innovare@innovaredecoracoes.com.br">innovare@innovaredecoracoes.com.br</a>
      </div>
      <p>R. Minas Gerais - Nova Brasília,<br>Joinville - SC, 89214-600</p>
      <p>Horário de Atendimento<br>Seg à Sex - 07h30 às 18h00<br>Sáb - 08h00 às 11h30</p>
    </div>
    <div>
      <h3>Serviços</h3>
      <p>Drywall · Divisórias<br>Forros · Pisos<br>Carpetes · Persianas<br>Cortinas · Acústica<br>Mobiliário</p>
    </div>
    <div class="footer__map">
      <iframe
        title="Localização Innovare Decorações Joinville"
        src="https://www.google.com/maps?q=R.+Minas+Gerais,+Nova+Brasília,+Joinville+-+SC,+89214-600&output=embed"
        width="100%" height="180" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  <div class="container footer__bottom">
    <p>© <span id="year"></span> Innovare Decorações &amp; Revestimentos. Todos os direitos reservados. <span class="footer__credit"><span class="footer__sep" aria-hidden="true">· </span>Desenvolvido por <a href="https://www.instagram.com/lrktech/" target="_blank" rel="nofollow noopener noreferrer">LRK TECH</a></span></p>
  </div>
</footer>

<aside aria-label="Atalho do WhatsApp">
<a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="float-whatsapp" data-track="whatsapp_float" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.7 14.4 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7zm4.8-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 8.9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3 0-.1-.2-.2-.4-.3z"/></svg>
</a>
</aside>

<nav class="mobile-bar" aria-label="Contato rápido">
  <a data-conversao="ligacao" href="tel:+5547989292335" class="mobile-bar__btn mobile-bar__btn--call" data-track="call_mobilebar">
    <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>
    Ligar
  </a>
  <a data-conversao="whatsapp" href="${WA_LINK}" target="_blank" rel="noopener" class="mobile-bar__btn mobile-bar__btn--whatsapp" data-track="whatsapp_mobilebar">
    <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
    WhatsApp
  </a>
</nav>

<script src="../js/main.js?v=4"></script>
</body>
</html>
`;
}

const outDir = path.join(__dirname, "..", "servicos");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

SERVICES.forEach(service => {
  const html = page(service);
  fs.writeFileSync(path.join(outDir, `${service.slug}.html`), html, "utf8");
  console.log("Gerado:", service.slug + ".html");
});

// Remove páginas e imagens de compartilhamento de serviços que não existem mais.
const slugs = new Set(SERVICES.map(s => s.slug));
fs.readdirSync(outDir).filter(f => f.endsWith(".html") && !slugs.has(f.replace(/\.html$/, ""))).forEach(f => {
  fs.unlinkSync(path.join(outDir, f));
  console.log("Removido (serviço descontinuado):", "servicos/" + f);
});
const ogDir = path.join(__dirname, "..", "images", "og");
if (fs.existsSync(ogDir)) {
  fs.readdirSync(ogDir).filter(f => f.endsWith(".jpg")).forEach(f => {
    const nome = f.replace(/\.jpg$/, "");
    if (nome !== "home" && !slugs.has(nome)) { fs.unlinkSync(path.join(ogDir, f)); console.log("Removido:", "images/og/" + f); }
  });
}

// Home: cards de serviço e opções do formulário saem da mesma lista de serviços.
const indexFile = path.join(__dirname, "..", "index.html");
function entreMarcadores(html, nome, conteudo) {
  const ini = `<!-- AUTO:${nome}:START -->`, fim = `<!-- AUTO:${nome}:END -->`;
  const a = html.indexOf(ini), b = html.indexOf(fim);
  if (a < 0 || b < 0) throw new Error(`Marcadores AUTO:${nome} não encontrados no index.html`);
  return html.slice(0, a + ini.length) + "\n" + conteudo + "\n" + html.slice(b);
}
const cards = SERVICES.map(s => `      <div class="service-card reveal" id="${s.anchor || "servico-" + s.slug}">
        <div class="service-card__photo"><img src="${s.card.img}" alt="${esc(s.card.alt)}" loading="lazy"></div>
        <div class="service-card__icon"><svg viewBox="0 0 24 24">${s.card.icon}</svg></div>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.card.desc)}</p>
        <a href="servicos/${s.slug}.html" class="service-card__link">Saiba mais →</a>
      </div>`).join("\n");
let home = fs.readFileSync(indexFile, "utf8");
home = entreMarcadores(home, "services-grid", cards);
home = entreMarcadores(home, "service-options", "          " + selectOptionsHtml(null, "          "));
fs.writeFileSync(indexFile, home, "utf8");
console.log("Home atualizada: " + SERVICES.length + " cards e opções do formulário");

// Sitemap
const urls = [`  <url><loc>${SITE_URL}/</loc><priority>1.0</priority></url>`]
  .concat(SERVICES.map(s => `  <url><loc>${SITE_URL}/servicos/${s.slug}.html</loc><priority>0.8</priority></url>`));
fs.writeFileSync(path.join(__dirname, "..", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`, "utf8");
console.log("sitemap.xml atualizado com " + urls.length + " URLs");

console.log(`\n${SERVICES.length} páginas geradas em /servicos`);
