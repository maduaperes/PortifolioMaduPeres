/* ==========================================
   PORTFOLIO — script.js
   ========================================== */

/* ------------------------------------------
   TRADUÇÕES (i18n)
   ------------------------------------------ */
const i18n = {
  pt: {
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    "hero.badge": "Disponível para oportunidades",
    "hero.title": "Olá, eu sou<br><em>Madu Peres</em>",
    "hero.desc":
      "Desenvolvedora Full Stack Jr. com pouco mais de 3 anos de experiência criando aplicações modernas, responsivas e funcionais para web.",
    "hero.cta1": "Ver Projetos",
    "hero.cta2": "Entrar em Contato",
    "hero.stat1": "Anos de Experiência",
    "hero.stat2": "Projetos Desenvolvidos",
    "hero.stat3": "Foco em Responsividade",
    "hero.scroll": "scroll",

    "about.label": "Sobre mim",
    "about.title": "Desenvolvedora<br>& Criadora de Soluções",
    "about.rating": "Avaliação",

    "about.p1":
      "Sou uma <strong>desenvolvedora Full Stack Jr.</strong> com pouco mais de 2 anos de experiência no desenvolvimento de aplicações web modernas e responsivas.",

    "about.p2":
      "Tenho conhecimento em <strong>HTML5, CSS3, JavaScript, Node.js, SQLite e API REST</strong>. Gosto de criar interfaces organizadas, modernas e focadas em experiência do usuário.",

    "projects.label": "Portfólio",
    "projects.title": "Projetos em Destaque",

    "projects.subtitle":
      "Alguns projetos desenvolvidos para prática, aprendizado e evolução constante como desenvolvedora.",

    "proj1.title": "Landing Page Moderna",
    "proj1.desc":
      "Landing page responsiva com design moderno, foco em performance e experiência do usuário.",

    "proj2.title": "Sistema CRUD Node.js",
    "proj2.desc":
      "Aplicação CRUD utilizando Node.js, SQLite e API REST para gerenciamento de usuários e dados.",

    "proj3.title": "E-commerce Interface",
    "proj3.desc":
      "Interface moderna de e-commerce desenvolvida com HTML, CSS e JavaScript.",

    "proj4.title": "Task Manager",
    "proj4.desc":
      "Aplicação de gerenciamento de tarefas com armazenamento local e manipulação dinâmica do DOM.",

    "proj5.title": "API REST Backend",
    "proj5.desc":
      "API RESTful com operações CRUD, organização de rotas e integração com banco de dados SQLite.",

    "proj6.title": "Portfolio Responsivo",
    "proj6.desc":
      "Portfólio pessoal moderno com dark mode, responsividade e animações suaves.",

    "exp.label": "Trajetória",
    "exp.title": "Experiência",

    "exp1.period": "2024 — Presente",
    "exp1.role": "Desenvolvedora Full Stack Jr.",
    "exp1.desc":
      "Desenvolvimento de aplicações web responsivas utilizando JavaScript, Node.js, APIs REST e SQLite, com foco em boas práticas e performance.",

    "exp2.period": "2023 — 2024",
    "exp2.role": "Desenvolvedora Front-end",
    "exp2.desc":
      "Criação de interfaces modernas e responsivas utilizando HTML5, CSS3, JavaScript, Flexbox e Grid.",

    "exp3.period": "2022 — 2023",
    "exp3.role": "Projetos e Estudos",
    "exp3.desc":
      "Desenvolvimento de projetos pessoais para aprimoramento técnico em desenvolvimento Full Stack.",

    "contact.label": "Contato",
    "contact.title": "Vamos Trabalhar Juntas?",

    "contact.info.title": "Aberta a novas oportunidades",

    "contact.info.desc":
      "Estou disponível para oportunidades, freelas e projetos na área de desenvolvimento web. Será um prazer conversar!",

    "form.name": "Nome",
    "form.namePlaceholder": "Seu nome completo",

    "form.email": "Email",

    "form.message": "Mensagem",

    "form.messagePlaceholder": "Me conte um pouco sobre seu projeto...",

    "form.send": "Enviar Mensagem",

    "footer.made": "Feito com",
    "footer.in": "em",
    "footer.back": "Voltar ao topo ↑",
  },

  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.badge": "Available for opportunities",

    "hero.title": "Hi, I'm<br><em>Madu Peres</em>",

    "hero.desc":
      "Junior Full Stack Developer with over 3 years of experience building modern, responsive and functional web applications.",

    "hero.cta1": "View Projects",
    "hero.cta2": "Get in Touch",

    "hero.stat1": "Years of Experience",
    "hero.stat2": "Projects Developed",
    "hero.stat3": "Responsive Focus",

    "hero.scroll": "scroll",

    "about.label": "About me",

    "about.title": "Developer<br>& Problem Solver",

    "about.rating": "Rating",

    "about.p1":
      "I'm a <strong>Junior Full Stack Developer</strong> with over 2 years of experience building modern and responsive web applications.",

    "about.p2":
      "I have experience with <strong>HTML5, CSS3, JavaScript, Node.js, SQLite and REST APIs</strong>. I enjoy creating organized, modern interfaces focused on user experience.",

    "projects.label": "Portfolio",

    "projects.title": "Featured Projects",

    "projects.subtitle":
      "Some projects developed for practice, learning and continuous growth as a developer.",

    "proj1.title": "Modern Landing Page",

    "proj1.desc":
      "Responsive landing page with modern design focused on performance and user experience.",

    "proj2.title": "Node.js CRUD System",

    "proj2.desc":
      "CRUD application using Node.js, SQLite and REST API for user and data management.",

    "proj3.title": "E-commerce Interface",

    "proj3.desc":
      "Modern e-commerce interface developed with HTML, CSS and JavaScript.",

    "proj4.title": "Task Manager",

    "proj4.desc":
      "Task management application with local storage and dynamic DOM manipulation.",

    "proj5.title": "REST API Backend",

    "proj5.desc":
      "RESTful API with CRUD operations, route organization and SQLite database integration.",

    "proj6.title": "Responsive Portfolio",

    "proj6.desc":
      "Modern personal portfolio with dark mode, responsiveness and smooth animations.",

    "exp.label": "Career",

    "exp.title": "Experience",

    "exp1.period": "2024 — Present",

    "exp1.role": "Junior Full Stack Developer",

    "exp1.desc":
      "Development of responsive web applications using JavaScript, Node.js, REST APIs and SQLite, focused on best practices and performance.",

    "exp2.period": "2023 — 2024",

    "exp2.role": "Front-end Developer",

    "exp2.desc":
      "Creation of modern and responsive interfaces using HTML5, CSS3, JavaScript, Flexbox and Grid.",

    "exp3.period": "2022 — 2023",

    "exp3.role": "Projects and Studies",

    "exp3.desc":
      "Development of personal projects to improve Full Stack development skills.",

    "contact.label": "Contact",

    "contact.title": "Let's Work Together?",

    "contact.info.title": "Open to new opportunities",

    "contact.info.desc":
      "I'm available for opportunities, freelance work and web development projects. I'd love to talk!",

    "form.name": "Name",

    "form.namePlaceholder": "Your full name",

    "form.email": "Email",

    "form.message": "Message",

    "form.messagePlaceholder": "Tell me a little about your project...",

    "form.send": "Send Message",

    "footer.made": "Made with",
    "footer.in": "in",
    "footer.back": "Back to top ↑",
  },
};

/* ------------------------------------------
   ESTADO
   ------------------------------------------ */
let currentLang = "pt";
let currentTheme = "dark";

/* ------------------------------------------
   IDIOMA
   ------------------------------------------ */
function toggleLang() {
  currentLang = currentLang === "pt" ? "en" : "pt";
  document.getElementById("langLabel").textContent =
    currentLang === "pt" ? "EN" : "PT";
  document.documentElement.lang = currentLang;
  applyTranslations();
}

function applyTranslations() {
  const t = i18n[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-placeholder-i18n]").forEach((el) => {
    const key = el.getAttribute("data-placeholder-i18n");
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

/* ------------------------------------------
   TEMA
   ------------------------------------------ */
const ICON_SUN =
  '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
const ICON_MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.getElementById("themeIcon").innerHTML =
    currentTheme === "light" ? ICON_MOON : ICON_SUN;
}

/* ------------------------------------------
   SCROLL REVEAL
   ------------------------------------------ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));
