(function () {
  "use strict";

  // ==========================================================================
  // CONFIGURAÇÃO — cole seus IDs aqui. É o ÚNICO lugar que precisa editar:
  // esse arquivo é compartilhado por todas as páginas do site (principal + 14
  // páginas de serviço), então uma edição aqui vale pra tudo.
  // ==========================================================================
  var CONFIG = {
    WHATSAPP_NUMBER: "5547989292335",

    // Google Analytics 4 — crie em analytics.google.com (gratuito).
    // Formato: "G-XXXXXXXXXX". Deixe vazio ("") para não carregar.
    GA4_ID: "",

    // Google Ads — no Google Ads, em Ferramentas > Conversões, crie uma
    // conversão de "envio de formulário" e outra de "clique em WhatsApp/telefone"
    // se quiser medir separado. Formato do ID: "AW-XXXXXXXXX".
    GOOGLE_ADS_ID: "",
    // Label da conversão principal (a parte depois da "/" que o Google Ads gera).
    GOOGLE_ADS_LABEL: "",

    // Microsoft Clarity — crie em clarity.microsoft.com (gratuito).
    // Mostra mapa de calor de cliques e gravação de sessão de visitantes reais.
    // Cole só o ID do projeto (ex: "abcd1234").
    CLARITY_ID: "",

    // Opcional: URL de um webhook (Formspree, Web3Forms, Google Apps Script...)
    // para salvar uma cópia de cada lead, além do WhatsApp — garante que você
    // não perde o contato mesmo se a pessoa fechar a aba antes de enviar no
    // WhatsApp. Deixe vazio para não usar.
    LEAD_WEBHOOK_URL: ""
  };

  var WA_TEXT_PREFIX = "Olá! Vim pelo site da Innovare e gostaria de um orçamento.";

  // ==========================================================================
  // Consentimento de cookies (LGPD) — só carrega Analytics/Clarity depois
  // que a pessoa aceita. A escolha fica salva no navegador dela.
  // ==========================================================================
  var CONSENT_KEY = "innovare_cookie_consent";

  function loadScript(src, attrs) {
    var s = document.createElement("script");
    s.src = src;
    s.async = true;
    if (attrs) for (var k in attrs) s.setAttribute(k, attrs[k]);
    document.head.appendChild(s);
    return s;
  }

  function initAnalytics() {
    if (CONFIG.GA4_ID || CONFIG.GOOGLE_ADS_ID) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); };
      gtag("js", new Date());
      var gtagSrc = "https://www.googletagmanager.com/gtag/js?id=" + (CONFIG.GA4_ID || CONFIG.GOOGLE_ADS_ID);
      loadScript(gtagSrc);
      if (CONFIG.GA4_ID) gtag("config", CONFIG.GA4_ID);
      if (CONFIG.GOOGLE_ADS_ID) gtag("config", CONFIG.GOOGLE_ADS_ID);
    }
    if (CONFIG.CLARITY_ID) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", CONFIG.CLARITY_ID);
    }
  }

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
  }

  // Consent Mode v2: o padrão "denied" é definido no <head> antes do GTM.
  function grantGoogleConsent() {
    var dl = window.dataLayer = window.dataLayer || [];
    function gtag() { dl.push(arguments); }
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted"
    });
  }

  function renderCookieBar() {
    var bar = document.createElement("div");
    bar.className = "cookie-bar";
    bar.innerHTML =
      '<p>Usamos cookies para melhorar sua experiência e entender como o site é usado. ' +
      'Você pode aceitar ou recusar.</p>' +
      '<div class="cookie-bar__actions">' +
      '<button type="button" class="btn btn--ghost btn--sm" data-cookie="reject">Recusar</button>' +
      '<button type="button" class="btn btn--primary btn--sm" data-cookie="accept">Aceitar</button>' +
      "</div>";
    document.body.appendChild(bar);

    bar.querySelector('[data-cookie="accept"]').addEventListener("click", function () {
      setConsent("accepted");
      bar.remove();
      grantGoogleConsent();
      initAnalytics();
    });
    bar.querySelector('[data-cookie="reject"]').addEventListener("click", function () {
      setConsent("rejected");
      bar.remove();
    });
  }

  var consent = getConsent();
  if (consent === "accepted") {
    initAnalytics();
  } else if (consent !== "rejected") {
    renderCookieBar();
  }

  // ==========================================================================
  // Captura de UTM (origem do Google Ads) — guarda em que anúncio/campanha
  // a pessoa clicou, pra você saber de onde vêm os leads que fecham negócio.
  // ==========================================================================
  var UTM_KEY = "innovare_utm";
  (function captureUTM() {
    var params = new URLSearchParams(window.location.search);
    var utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    var found = {};
    var hasAny = false;
    utmKeys.forEach(function (k) {
      var v = params.get(k);
      if (v) { found[k] = v; hasAny = true; }
    });
    if (hasAny) {
      try { sessionStorage.setItem(UTM_KEY, JSON.stringify(found)); } catch (e) {}
    }
  })();

  function getStoredUTM() {
    try {
      var raw = sessionStorage.getItem(UTM_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function utmSummary() {
    var utm = getStoredUTM();
    if (!utm) return "";
    var parts = [];
    if (utm.utm_source) parts.push(utm.utm_source);
    if (utm.utm_campaign) parts.push(utm.utm_campaign);
    if (utm.gclid) parts.push("Google Ads");
    return parts.length ? " (via " + parts.join(" / ") + ")" : "";
  }

  // ==========================================================================
  // Rastreamento de eventos — GA4 + conversão do Google Ads num só lugar.
  // ==========================================================================
  function trackEvent(name, params) {
    if (typeof gtag === "function") {
      gtag("event", name, params || {});
    }
  }

  function trackConversion(label) {
    trackEvent("cta_click", { cta_id: label });
    if (typeof gtag === "function" && CONFIG.GOOGLE_ADS_ID && CONFIG.GOOGLE_ADS_LABEL) {
      gtag("event", "conversion", {
        send_to: CONFIG.GOOGLE_ADS_ID + "/" + CONFIG.GOOGLE_ADS_LABEL,
        event_label: label
      });
    }
  }

  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () {
      trackConversion(el.getAttribute("data-track"));
    });
  });

  // Cliques em "Saiba mais" de cada serviço — mostra quais serviços têm mais interesse.
  document.querySelectorAll(".service-card__link").forEach(function (link) {
    link.addEventListener("click", function () {
      var card = link.closest(".service-card");
      var name = card ? card.querySelector("h3").textContent.trim() : "desconhecido";
      trackEvent("view_service_detail", { service_name: name });
    });
  });

  // Abertura de perguntas no FAQ.
  document.querySelectorAll(".faq__item").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        var q = item.querySelector("summary");
        trackEvent("faq_open", { question: q ? q.textContent.trim() : "" });
      }
    });
  });

  // Cliques em links externos (Instagram, mapa).
  document.querySelectorAll('a[target="_blank"]:not([data-track])').forEach(function (link) {
    link.addEventListener("click", function () {
      trackEvent("outbound_click", { url: link.href });
    });
  });

  // Profundidade de rolagem — 25/50/75/100%, cada marco só uma vez.
  (function scrollDepthTracking() {
    var marks = [25, 50, 75, 100];
    var fired = {};
    function check() {
      var doc = document.documentElement;
      var scrolled = window.scrollY + window.innerHeight;
      var pct = Math.round((scrolled / doc.scrollHeight) * 100);
      marks.forEach(function (m) {
        if (pct >= m && !fired[m]) {
          fired[m] = true;
          trackEvent("scroll_depth", { percent: m });
        }
      });
    }
    document.addEventListener("scroll", check, { passive: true });
  })();

  // Visualização de seções-chave (uma vez cada) — mostra até onde as pessoas
  // realmente chegam na página antes de sair.
  (function sectionViewTracking() {
    var ids = ["sobre", "servicos", "diferenciais", "portfolio", "orcamento", "faq"];
    var targets = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    if (!targets.length || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            trackEvent("section_view", { section_id: entry.target.id });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    targets.forEach(function (t) { io.observe(t); });
  })();

  // ---------- Header shrink/shadow on scroll ----------
  var header = document.getElementById("header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav ----------
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      if (open) {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "fixed";
        nav.style.top = "64px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#FAF6EF";
        nav.style.padding = "20px 24px";
        nav.style.gap = "18px";
        nav.style.borderBottom = "1px solid #E7DCC8";
      } else {
        nav.removeAttribute("style");
      }
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        nav.removeAttribute("style");
      });
    });
  }

  // ---------- Reveal on scroll ----------
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              entry.target.classList.add("is-visible");
            }, (i % 6) * 60);
            io2.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io2.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---------- Portfolio lightbox ----------
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");

  if (lightbox && lightboxImg && lightboxClose) {
    document.querySelectorAll(".portfolio__item").forEach(function (item) {
      item.addEventListener("click", function () {
        var full = item.getAttribute("data-full");
        var alt = item.querySelector("img").getAttribute("alt");
        lightboxImg.src = full;
        lightboxImg.alt = alt;
        lightbox.classList.add("is-open");
        trackEvent("portfolio_view", { image: full });
      });
    });

    var closeLightbox = function () {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
    };
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  // ---------- Lead form -> WhatsApp (+ backup opcional por webhook) ----------
  var form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot: campo invisível que só um robô preencheria.
      if (form.website && form.website.value) {
        return;
      }

      var nome = form.nome.value.trim();
      var telefone = form.telefone.value.trim();
      var servico = form.servico.value;
      var mensagem = form.mensagem.value.trim();
      var origem = window.location.pathname + utmSummary();

      var text = WA_TEXT_PREFIX + "\n\n" +
        "Nome: " + nome + "\n" +
        "WhatsApp: " + telefone + "\n" +
        "Serviço: " + servico +
        (mensagem ? "\nDetalhes: " + mensagem : "") +
        "\nPágina: " + origem;

      trackConversion("cta_form_submit");

      if (CONFIG.LEAD_WEBHOOK_URL) {
        var utm = getStoredUTM() || {};
        var payload = Object.assign({ nome: nome, telefone: telefone, servico: servico, mensagem: mensagem, pagina: origem }, utm);
        fetch(CONFIG.LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).catch(function () {});
      }

      var url = "https://wa.me/" + CONFIG.WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
      (window.dataLayer = window.dataLayer || []).push({ event: "conversao_formulario" });
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }

  // ---------- Footer year ----------
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
