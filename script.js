// ============================================================
//  script.js: builds the page from DATA (data.js) + animations
//  Part A: small helpers
//  Part B: fill every section with your data
//  Part C: animations & interactions
// ============================================================

/* ---------- PART A: HELPERS ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const D  = DATA;

// sparkle star icon (the <symbol id="spark"> in index.html)
const spark = () => `<svg class="spark"><use href="#spark"/></svg>`;

// <img> that deletes itself if the file doesn't exist → placeholder/emoji behind it shows
const pic = (src, alt = "") =>
  src ? `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">` : "";

function calcAge(dob) {
  const b = new Date(dob), now = new Date();
  let a = now.getFullYear() - b.getFullYear();
  if (now < new Date(now.getFullYear(), b.getMonth(), b.getDate())) a--;
  return a;
}

/* ---------- PART B: FILL THE PAGE ---------- */

// 1) Simple text: any element with data-bind="key" gets that value
const text = {
  ...D,
  fullName: `${D.firstName} ${D.lastName}`,
  age: `${calcAge(D.birthDate)} years old`,
};
$$("[data-bind]").forEach(el => (el.textContent = text[el.dataset.bind] ?? ""));
document.title = `${text.fullName} | Portfolio`;

// "Open to work" badge in the hero and the line in the contact section
if (D.availability && D.availability.open) {
  $("#heroOtw").innerHTML = `<i class="pulse"></i><span><b>${D.availability.label}</b><small>${D.availability.detail}</small></span>`;
  $("#contactAvail").innerHTML = `<i class="pulse"></i> ${D.availability.label}: ${D.availability.detail}`;
} else {
  $("#heroOtw").remove();
  $("#contactAvail").remove();
}

// 2) Hero: split "PORTFOLIO" into letters so each one can animate separately
$("#heroTitle").innerHTML = [..."PORTFOLIO"]
  .map((c, i) => `<span class="mask"><span class="ch" style="--i:${i}">${c}</span></span>`)
  .join("");

$("#heroSocials").innerHTML = D.socials
  .map(s => `<li><b>${s.label}:</b> <a href="${s.url}" target="_blank" rel="noopener">${s.handle}</a></li>`)
  .join("");

// 3) Marquee: content is duplicated so the loop is seamless
const half = [D.role, ...D.focus].map(t => `<span>${t} ${spark()}</span>`).join("").repeat(2);
$("#marquee").innerHTML = half + half;

// 4) About: LinkedIn pill, CV button, contact card
const linkedin = D.socials.find(s => s.name === "LinkedIn");
if (linkedin) {
  $("#linkedinPill").href = linkedin.url;
  $("#linkedinPill").textContent = `🔍  ${linkedin.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}`;
} else $("#linkedinPill").remove();

if (D.cvFile) $("#cvBtn").href = D.cvFile; else $("#cvBtn").remove();

$("#contactList").innerHTML = `
  <li>📍 ${D.location}</li>
  <li>✉️ <a href="mailto:${D.email}">${D.email}</a></li>
  <li>📞 <a href="tel:${D.phone.replace(/\s/g, "")}">${D.phone}</a></li>`;

// 5) Timelines (education, experience, workshops share one template)
const timeline = items => items.map(it => `
  <li class="reveal">
    <span>${spark()}</span>
    <span class="t-year">${it.years || it.year}</span>
    <div>
      <div class="t-title">${it.place || it.title}</div>
      ${it.org ? `<div class="t-org">${it.org}</div>` : ""}
      <div class="t-detail">${it.detail}</div>
    </div>
  </li>`).join("");

$("#eduList").innerHTML  = timeline(D.education);
$("#expList").innerHTML  = timeline(D.experience);
$("#workList").innerHTML = timeline(D.workshops);

// 6) Skills
$("#traits").innerHTML    = D.traits.map(t => `<span class="tag">${t}</span>`).join("");
$("#tools").innerHTML     = D.skills.tools.map(t => `<span class="tool reveal zoom" data-name="${t.name}">${t.short}</span>`).join("");
$("#knowledge").innerHTML = D.skills.knowledge.map(k => `<li>${k}</li>`).join("");
$("#areas").innerHTML     = D.skills.areas.map(a => `<span class="tag reveal">${a}</span>`).join("");

// 7) Projects + filter buttons
const cats = ["All", ...new Set(D.projects.map(p => p.category))];
$("#filters").innerHTML = cats
  .map((c, i) => `<button class="filter ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`)
  .join("");

$("#projGrid").innerHTML = D.projects.map(p => `
  <div class="card-wrap reveal" data-cat="${p.category}">
    <article class="card tilt">
      <div class="card-img ph" data-ph="${p.title}">${pic(p.image, p.title)}</div>
      <div class="card-body">
        <div class="card-meta"><span>${p.tag}</span><span>${p.year}</span></div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="chips">${p.tech.map(t => `<span class="chip">${t}</span>`).join("")}</div>
        <div class="card-links">
          ${p.link ? `<a class="arrow-btn" href="${p.link}" target="_blank" rel="noopener" title="Live demo">↗</a>` : ""}
          ${p.repo ? `<a class="arrow-btn" href="${p.repo}" target="_blank" rel="noopener" title="Source code">&lt;/&gt;</a>` : ""}
        </div>
      </div>
    </article>
  </div>`).join("");

$("#filters").addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  $$(".filter").forEach(b => b.classList.toggle("active", b === btn));
  $$(".card-wrap").forEach(card => {
    const show = btn.dataset.cat === "All" || card.dataset.cat === btn.dataset.cat;
    card.classList.toggle("hidden", !show);
    if (show) {                       // replay the pop-in animation
      card.classList.remove("in");
      void card.offsetWidth;
      card.classList.add("in");
    }
  });
});

// 8) Events I organised (polaroid cards, each tilted by its "r" value)
$("#eventGrid").innerHTML = D.events.map(ev => `
  <div class="pol-wrap reveal">
    <article class="polaroid" style="--r:${ev.r ?? 0}deg">
      <div class="pol-img ph" data-ph="${ev.title}">${pic(ev.image, ev.title)}</div>
      <p class="pol-role">${ev.role}</p>
      <h3>${ev.title}</h3>
      <p class="pol-meta">${ev.org} · ${ev.date}</p>
      <p class="pol-desc">${ev.desc}</p>
    </article>
  </div>`).join("");

// 9) Certificates (the thumbnail hides itself if the image file is missing)
$("#certGrid").innerHTML = D.certificates.map(c => `
  <article class="cert reveal">
    <div class="cert-thumb">${pic(c.image, c.title)}</div>
    <div class="badge">🏅${pic(c.logo, c.issuer)}</div>
    <span class="year-badge">${c.year}</span>
    <h3>${c.title}</h3>
    <p class="issuer">${c.issuer}</p>
    ${c.link ? `<a class="view" href="${c.link}" target="_blank" rel="noopener">View credential →</a>` : ""}
  </article>`).join("");

// 10) Languages (dots) + hobbies (floating icons)
$("#langs").innerHTML = D.languages.map(l => `
  <div class="lang reveal">
    <b>${l.name}</b><span>${l.level}</span>
    <div class="dots">${[1, 2, 3, 4, 5].map(i =>
      `<i class="${i <= l.dots ? "on" : ""}" style="--dd:${0.4 + i * 0.12}s"></i>`).join("")}</div>
  </div>`).join("");

$("#hobbies").innerHTML = D.hobbies.map((h, i) => `
  <div class="hobby reveal">
    <div class="h-icon" style="--fd:${-i * 0.9}s">${h.emoji}${pic(h.image, h.label)}</div>
    ${h.label}
  </div>`).join("");

// 11) Contact
$("#emailBtn").href = `mailto:${D.email}`;
$("#year").textContent = new Date().getFullYear();


/* ---------- PART C: ANIMATIONS & INTERACTIONS ---------- */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover     = matchMedia("(hover: hover)").matches;

// C1) Stagger: items inside a [data-stagger] group appear one after another
$$("[data-stagger]").forEach(group =>
  $$(".reveal", group).forEach((el, i) => el.style.setProperty("--d", `${Math.min(i * 0.08, 0.6)}s`))
);

// C2) Scroll reveal: when an element enters the screen, add .in (CSS animates it)
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    io.unobserve(e.target);
    setTimeout(() => e.target.style.removeProperty("--d"), 1600); // so hover effects aren't delayed later
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
$$(".reveal, .draw").forEach(el => io.observe(el));

// C3) Scroll effects: progress bar, navbar hide/show, parallax
const nav = $("#nav"), bar = $("#progress"), links = $("#links");
const parallaxEls = $$("[data-speed]");
let lastY = 0, ticking = false;

function onScroll() {
  const y = scrollY;
  nav.classList.toggle("scrolled", y > 40);
  nav.classList.toggle("hide", y > lastY && y > 400 && !links.classList.contains("open"));
  lastY = y;

  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

  if (!reduceMotion) {
    parallaxEls.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      const offset = (r.top + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.speed);
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }
  ticking = false;
}
addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }  // max once per frame
}, { passive: true });
onScroll();

// C4) Desktop-only: 3D tilt cards, magnetic button, custom cursor
if (canHover && !reduceMotion) {
  $$(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    });
    card.addEventListener("mouseleave", () => (card.style.transform = ""));
  });

  $$(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
    });
    btn.addEventListener("mouseleave", () => (btn.style.transform = ""));
  });

  const cursor = $("#cursor");
  let mx = 0, my = 0, cx = 0, cy = 0;
  addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cursor.classList.add("on"); });
  (function follow() {
    cx += (mx - cx) * 0.2;            // ease towards the mouse = smooth trailing
    cy += (my - cy) * 0.2;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(follow);
  })();
  document.addEventListener("mouseover", e =>
    cursor.classList.toggle("big", !!e.target.closest("a, button, .tool, .card")));
}

// C5) Mobile menu
const burger = $("#burger");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  links.classList.toggle("open");
});
$$("a", links).forEach(a => a.addEventListener("click", () => {
  burger.classList.remove("open");
  links.classList.remove("open");
}));
