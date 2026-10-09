/**
 * script.js
 * ---------------------------------------------------------
 * Vanilla JS behavior for the portfolio site:
 *   1. Renders project cards from PROJECTS (data.js) into the grid
 *   2. Wires up category filtering
 *   3. Mobile nav toggle
 *   4. Smooth scroll for in-page anchor links
 *   5. Footer year
 *   6. Nav scroll-spy (highlights the section in view)
 *   7. Resume & Training page rendering from RESUME (data.js)
 * ---------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  renderGallery("all");
  initFilterBar();
  initNavToggle();
  initSmoothScroll();
  initBackToTop();
  initScrollSpy();
  renderResume();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

/* -----------------------------------------------------------
   1 & 2. Gallery rendering + filtering
   ----------------------------------------------------------- */
function renderGallery(filter) {
  const grid = document.getElementById("galleryGrid");
  if (!grid || typeof PROJECTS === "undefined") return;

  const items = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === filter);

  if (items.length === 0) {
    const isThai = document.documentElement.lang === "th";
    grid.innerHTML = `<p class="gallery-empty">${isThai ? "ยังไม่มีผลงานในหมวดนี้" : "No projects in this category yet."}</p>`;
    return;
  }

  grid.innerHTML = items.map(buildCardHTML).join("");
}

function buildCardHTML(project) {
  const tags = project.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("");
  const hasImage = Boolean(project.image && project.image.trim());

  // If a real photo is set, render it; otherwise (or if it fails to load)
  // fall back to the icon + gradient placeholder so the card never breaks.
  const thumbHTML = hasImage
    ? `<img
         src="${escapeHTML(project.image)}"
         alt="${escapeHTML(project.title)}"
         loading="lazy"
         onerror="this.closest('.project-thumb').classList.add('is-fallback'); this.remove();"
       >
       <div class="thumb-fallback"><i class="${escapeHTML(project.icon)}"></i></div>`
    : `<div class="thumb-fallback"><i class="${escapeHTML(project.icon)}"></i></div>`;

  return `
    <article class="project-card" data-category="${escapeHTML(project.category)}">
      <div class="project-thumb${hasImage ? "" : " is-fallback"}" style="--thumb-a:${project.thumbA}; --thumb-b:${project.thumbB};">
        ${thumbHTML}
        <span class="sparkle">✦</span>
      </div>
      <div class="project-body">
        <span class="project-cat">${escapeHTML(project.categoryLabel)}</span>
        <h3 class="project-title">${escapeHTML(project.title)}</h3>
        <p class="project-desc">${escapeHTML(project.description)}</p>
        <div class="project-tags">${tags}</div>
      </div>
    </article>
  `;
}

// Minimal HTML-escaping so data-driven content can't break markup.
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function initFilterBar() {
  const filterBar = document.getElementById("filterBar");
  if (!filterBar) return;

  filterBar.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    renderGallery(btn.dataset.filter);
  });
}

/* -----------------------------------------------------------
   3. Mobile nav toggle
   ----------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after a nav link is tapped (mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* -----------------------------------------------------------
   4b. Floating "Back to Top" button
   Appears once the user has scrolled past the hero, and
   smoothly returns them to the top of the page on click.
   ----------------------------------------------------------- */
function initBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) return;

  const SHOW_AFTER_PX = 480;

  const toggleVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > SHOW_AFTER_PX);
  };

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* -----------------------------------------------------------
   4. Smooth scroll for in-page anchors
   (CSS `scroll-behavior: smooth` already handles most cases;
   this adds a graceful fallback + accounts for sticky header.)
   ----------------------------------------------------------- */
function initSmoothScroll() {
  const header = document.querySelector(".site-header");
  const headerOffset = header ? header.offsetHeight + 12 : 0;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* -----------------------------------------------------------
   6. Nav scroll-spy
   Highlights the nav link of whichever numbered section is
   currently in view (index.html only).
   ----------------------------------------------------------- */
function initScrollSpy() {
  const links = document.querySelectorAll(".nav-link[data-section]");
  if (!links.length) return;

  // 01 About and 02 Skills sit side by side on desktop, so both can be
  // active at once; on mobile they stack and only one is.
  const targets = [...links].map((link) => {
    const id = link.dataset.section;
    const el = id === "about"
      ? document.querySelector("#about .about-copy") || document.getElementById("about")
      : document.getElementById(id);
    return { link, el };
  }).filter((t) => t.el);

  let ticking = false;
  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.4;
    const hit = targets.filter(({ el }) => {
      const r = el.getBoundingClientRect();
      return r.top <= line && r.bottom > line;
    });
    const firstTop = Math.min(...targets.map(({ el }) => el.getBoundingClientRect().top));
    if (!hit.length && firstTop <= line) return; // in a gap between sections: keep previous
    targets.forEach(({ link }) => {
      const on = hit.some((t) => t.link === link);
      link.classList.toggle("is-active", on);
      if (on) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* -----------------------------------------------------------
   7. Resume & Training page
   ----------------------------------------------------------- */
function renderResume() {
  if (typeof RESUME === "undefined") return;

  const timeline = (items) => items.map((item) => `
    <article class="tl-item">
      <p class="tl-date">${escapeHTML(item.period)}</p>
      <h3 class="tl-title">${escapeHTML(item.title)}</h3>
      <p class="tl-org">${escapeHTML(item.org)}</p>
      ${item.points && item.points.length
        ? `<ul class="tl-points">${item.points.map((p) => `<li>${escapeHTML(p)}</li>`).join("")}</ul>`
        : ""}
      ${item.tags && item.tags.length
        ? `<div class="project-tags">${item.tags.map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join("")}</div>`
        : ""}
    </article>
  `).join("");

  const cards = (items) => items.map((item) => `
    <article class="training-card">
      <p class="tl-date">${escapeHTML(item.period)}</p>
      <h3>${escapeHTML(item.title)}</h3>
      <p class="tl-org">${escapeHTML(item.org)}</p>
      ${item.note ? `<p>${escapeHTML(item.note)}</p>` : ""}
    </article>
  `).join("");

  const fill = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  fill("experienceList", timeline(RESUME.experience));
  fill("educationList", timeline(RESUME.education));
  fill("trainingList", cards(RESUME.training));
  fill("deliveredList", cards(RESUME.delivered));
}
