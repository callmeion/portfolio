/**
 * script.js
 * ---------------------------------------------------------
 * Vanilla JS behavior for the portfolio site:
 *   1. Renders project cards from PROJECTS (data.js) into the grid
 *   2. Wires up category filtering
 *   3. Mobile nav toggle
 *   4. Smooth scroll for in-page anchor links
 *   5. Footer year
 * ---------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  renderGallery("all");
  initFilterBar();
  initNavToggle();
  initSmoothScroll();
  initBackToTop();
  document.getElementById("year").textContent = new Date().getFullYear();
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
    grid.innerHTML = `<p class="gallery-empty">No projects in this category yet.</p>`;
    return;
  }

  grid.innerHTML = items.map(buildCardHTML).join("");
}

function buildCardHTML(project) {
  const tags = project.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("");
  return `
    <article class="project-card" data-category="${escapeHTML(project.category)}">
      <div class="project-thumb" style="--thumb-a:${project.thumbA}; --thumb-b:${project.thumbB};">
        <i class="${escapeHTML(project.icon)}"></i>
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
