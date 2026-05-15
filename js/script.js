/* ═══════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════ */
const t = {
    en: {
        nav_about:'About', nav_skills:'Skills', nav_projects:'Projects',
        nav_journey:'Journey', nav_contact:'Contact',
        hero_tagline:'Student & Web Enthusiast',
        hero_available:'Available for opportunities',
        hero_view_work:'View My Work', hero_download_cv:'Download CV', hero_scroll:'Scroll down',
        about_label:'Get to know me', about_title:'About Me',
        about_badge:'🇸🇷 Based in Suriname', about_greeting:"Hi, I'm Sarah! 👋",
        about_p1:"I'm a passionate and self-driven student from Suriname, studying at UNASAT and building modern, user-friendly digital products. I love turning ideas into clean, functional experiences.",
        about_p2:'My mission is to become a professional software engineer who creates impactful solutions — from elegant frontends to scalable backends.',
        about_stat1:'Projects', about_stat2:'Tech skills', about_stat3:'Happy dev 😄',
        about_connect:"Let's Connect", about_resume:'Resume',
        skills_label:'What I know', skills_title:'Skills & Tools',
        skills_fe:'Frontend', skills_be:'Backend', skills_design:'Design & Tools',
        projects_label:"What I've built", projects_title:'Projects',
        proj1_tag:'Full Stack', proj1_title:'SuriJobs',
        proj1_desc:'Job platform connecting employers and workers in Suriname. Features real-time listings, profile creation, and application tracking.',
        proj3_tag:'Frontend · Branding', proj3_title:'Portfolio Websites',
        proj3_desc:'Modern, responsive portfolio websites designed for clients and personal branding with mobile-first approach.',
        proj_code:'Code', proj_demo:'Demo',
        tl_label:'My journey', tl_title:'Experience & Education',
        tl2_date:'2025 – Present', tl2_title:'Studying at UNASAT',
        tl2_sub:'Universiteit van Suriname · Paramaribo',
        tl2_desc:'Currently pursuing a degree at UNASAT, building on a strong academic foundation.',
        tl4_date:'2021 – 2025', tl4_title:'VWO4 Diploma',
        tl4_sub:'Suriname · Graduated 2025',
        tl4_desc:'Successfully completed VWO4 secondary education, graduating in 2025.',
        contact_label:'Get in touch', contact_title:'Contact Me',
        contact_h3:"Let's build something amazing together.",
        contact_p:"Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.",
        contact_email_lbl:'Email', contact_loc_lbl:'Location',
        contact_loc:'Paramaribo, Suriname 🇸🇷',
        contact_resp_lbl:'Response time', contact_resp:'Usually within 24 hours',
        form_name_lbl:'Your Name', form_name_ph:'Jane Doe',
        form_email_lbl:'Email Address', form_email_ph:'jane@email.com',
        form_subject_lbl:'Subject', form_subject_ph:'Project idea, collaboration...',
        form_msg_lbl:'Message', form_msg_ph:'Tell me about your project...',
        form_submit:'Send Message',
        footer_top:'Back to top ↑',
        form_err:'Please fill in all required fields.',
        form_sending:'Sending...', form_sent:"✅ Message sent! I'll get back to you soon.",
    },
    nl: {
        nav_about:'Over mij', nav_skills:'Vaardigheden', nav_projects:'Projecten',
        nav_journey:'Mijn Reis', nav_contact:'Contact',
        hero_tagline:'Student & Web Liefhebber',
        hero_available:'Beschikbaar voor kansen',
        hero_view_work:'Mijn Werk', hero_download_cv:'CV Downloaden', hero_scroll:'Scroll omlaag',
        about_label:'Leer me kennen', about_title:'Over Mij',
        about_badge:'🇸🇷 Gevestigd in Suriname', about_greeting:'Hoi, ik ben Sarah! 👋',
        about_p1:'Ik ben een gepassioneerde en gedreven student uit Suriname, studeer aan UNASAT en bouw moderne, gebruiksvriendelijke digitale producten. Ik zet ideeën graag om in functionele ervaringen.',
        about_p2:'Mijn missie is om een professionele software-engineer te worden die impactvolle oplossingen creëert — van elegante frontends tot schaalbare backends.',
        about_stat1:'Projecten', about_stat2:'Vaardigheden', about_stat3:'Blije dev 😄',
        about_connect:'Verbinden', about_resume:'CV',
        skills_label:'Wat ik ken', skills_title:'Vaardigheden & Tools',
        skills_fe:'Frontend', skills_be:'Backend', skills_design:'Design & Tools',
        projects_label:'Wat ik heb gebouwd', projects_title:'Projecten',
        proj1_tag:'Full Stack', proj1_title:'SuriJobs',
        proj1_desc:'Jobplatform dat werkgevers en werknemers in Suriname verbindt. Met realtime vacatures, profielaanmaken en sollicitatiebeheer.',
        proj3_tag:'Frontend · Branding', proj3_title:'Portfolio Websites',
        proj3_desc:'Moderne, responsieve portfoliowebsites ontworpen voor klanten en persoonlijk merk met mobile-first aanpak.',
        proj_code:'Code', proj_demo:'Demo',
        tl_label:'Mijn reis', tl_title:'Ervaring & Opleiding',
        tl2_date:'2025 – Heden', tl2_title:'Studerend aan UNASAT',
        tl2_sub:'Universiteit van Suriname · Paramaribo',
        tl2_desc:'Momenteel een opleiding volgen aan UNASAT, voortbouwend op een sterke academische basis.',
        tl4_date:'2021 – 2025', tl4_title:'VWO4 Diploma',
        tl4_sub:'Suriname · Geslaagd 2025',
        tl4_desc:'Succesvol VWO4 afgerond en geslaagd in 2025.',
        contact_label:'Neem contact op', contact_title:'Contacteer Mij',
        contact_h3:'Laten we samen iets geweldigs bouwen.',
        contact_p:'Of je nu een project in gedachten hebt, wilt samenwerken of gewoon hallo wilt zeggen — mijn inbox is altijd open.',
        contact_email_lbl:'E-mail', contact_loc_lbl:'Locatie',
        contact_loc:'Paramaribo, Suriname 🇸🇷',
        contact_resp_lbl:'Reactietijd', contact_resp:'Meestal binnen 24 uur',
        form_name_lbl:'Jouw Naam', form_name_ph:'Maria Janssen',
        form_email_lbl:'E-mailadres', form_email_ph:'maria@email.com',
        form_subject_lbl:'Onderwerp', form_subject_ph:'Projectidee, samenwerking...',
        form_msg_lbl:'Bericht', form_msg_ph:'Vertel me over je project...',
        form_submit:'Stuur Bericht',
        footer_top:'Terug naar boven ↑',
        form_err:'Vul alle verplichte velden in.',
        form_sending:'Verzenden...', form_sent:'✅ Bericht verzonden! Ik neem snel contact op.',
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    const dict = t[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.dataset.i18nPh;
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(currentLang);

/* ═══════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════ */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

if (window.matchMedia('(pointer: fine)').matches) {
    dot.style.display  = 'block';
    ring.style.display = 'block';

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top  = my + 'px';
    });

    (function animRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
        requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, .btn, .project-link, .social-link, .lang-btn, .hamburger').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

/* ═══════════════════════════════════════
   LOADER
═══════════════════════════════════════ */
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('done'), 600);
});

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ═══════════════════════════════════════
   REVEAL + SKILL BARS
═══════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
    });
}, { threshold: 0.15 });

const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.width = e.target.dataset.width + '%';
        barObserver.unobserve(e.target);
    });
}, { threshold: 0.4 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.querySelectorAll('.skill-bar-fill').forEach(el => barObserver.observe(el));

/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const dict   = t[currentLang];
    const name   = document.getElementById('fname').value.trim();
    const email  = document.getElementById('femail').value.trim();
    const msg    = document.getElementById('fmsg').value.trim();

    if (!name || !email || !msg) {
        status.textContent = dict.form_err;
        return;
    }
    status.textContent = dict.form_sending;
    setTimeout(() => {
        status.textContent = dict.form_sent;
        this.reset();
    }, 1200);
});
