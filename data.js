/**
 * data.js
 * ---------------------------------------------------------
 * Simple client-side "CMS" for the portfolio gallery.
 * Add, edit, or remove entries in PROJECTS to update the
 * site — no HTML editing required.
 *
 * Fields:
 *   id          {string}  unique slug
 *   title       {string}  project title
 *   category    {string}  one of: print | social | branding | ads | illustration | projects
 *   categoryLabel {string} human-readable label shown on the card
 *   description {string}  1–2 sentence anonymized summary
 *   tags        {string[]} skill/tool tags shown on the card
 *   image       {string}  path/URL to a real photo, e.g. "images/my-project.jpg".
 *                          Leave as "" to use the icon + gradient placeholder instead.
 *   icon        {string}  Font Awesome class for the thumbnail glyph (used as
 *                          the placeholder when `image` is empty, or as a
 *                          fallback if the image fails to load)
 *   thumbA/thumbB {string} hex colors for the card's gradient placeholder
 * ---------------------------------------------------------
 */

const PROJECTS = [
  {
    id: "print-annual-report",
    title: "Anonymized Annual Report Layout",
    category: "print",
    categoryLabel: "Print Design",
    description: "Editorial layout system for a corporate annual report, designed around a modular grid and mocked figures.",
    tags: ["InDesign", "Editorial Layout", "Print"],
    image: "", // e.g. "images/print-annual-report.jpg"
    icon: "fa-solid fa-book-open",
    thumbA: "#dbeafe",
    thumbB: "#eff6ff"
  },
  {
    id: "print-event-collateral",
    title: "Internal Event Collateral Set",
    category: "print",
    categoryLabel: "Print Design",
    description: "Posters, badges, and signage for an internal town-hall event, unified under one visual system.",
    tags: ["Illustrator", "Signage", "Brand Assets"],
    image: "", // e.g. "images/print-event-collateral.jpg"
    icon: "fa-solid fa-swatchbook",
    thumbA: "#e0e7ff",
    thumbB: "#eef2ff"
  },
  {
    id: "social-campaign-carousel",
    title: "Internal Comms Carousel Series",
    category: "social",
    categoryLabel: "Social Media",
    description: "A recurring carousel-post template for internal announcements, designed for fast weekly turnaround.",
    tags: ["Photoshop", "Templates", "Internal Comms"],
    image: "", // e.g. "images/social-campaign-carousel.jpg"
    icon: "fa-solid fa-images",
    thumbA: "#bfdbfe",
    thumbB: "#dbeafe"
  },
  {
    id: "social-culture-highlights",
    title: "Culture Highlights Reel",
    category: "social",
    categoryLabel: "Social Media",
    description: "Short-form video highlight reel celebrating team milestones, edited for internal social channels.",
    tags: ["Premiere Pro", "Video Editing", "Motion"],
    image: "", // e.g. "images/social-culture-highlights.jpg"
    icon: "fa-solid fa-video",
    thumbA: "#c7d2fe",
    thumbB: "#e0e7ff"
  },
  {
    id: "branding-culture-identity",
    title: "Internal Culture Program Identity",
    category: "branding",
    categoryLabel: "Branding",
    description: "Logo, color system, and iconography for a company-wide culture initiative, applied across print and digital.",
    tags: ["Brand Identity", "Illustrator", "Guidelines"],
    image: "", // e.g. "images/branding-culture-identity.jpg"
    icon: "fa-solid fa-star",
    thumbA: "#bae6fd",
    thumbB: "#e0f2fe"
  },
  {
    id: "branding-training-subbrand",
    title: "Security Training Sub-brand",
    category: "branding",
    categoryLabel: "Branding",
    description: "A distinct visual sub-brand for cybersecurity training materials, kept legible and approachable.",
    tags: ["Iconography", "Sub-brand", "Illustrator"],
    image: "", // e.g. "images/branding-training-subbrand.jpg"
    icon: "fa-solid fa-shield-halved",
    thumbA: "#a7d8ff",
    thumbB: "#dbeafe"
  },
  {
    id: "ads-recruitment",
    title: "Internal Recruitment Ad Set",
    category: "ads",
    categoryLabel: "Ads",
    description: "A/B-tested static ad set for internal mobility postings, with anonymized engagement metrics.",
    tags: ["Photoshop", "A/B Testing", "Copywriting"],
    image: "", // e.g. "images/ads-recruitment.jpg"
    icon: "fa-solid fa-bullhorn",
    thumbA: "#dbeafe",
    thumbB: "#f0f9ff"
  },
  {
    id: "ads-phishing-simulation",
    title: "Phishing Simulation Creative",
    category: "ads",
    categoryLabel: "Ads",
    description: "Realistic (and safe) simulated-phishing creative used to test and train employee awareness.",
    tags: ["Simulation Design", "Illustrator", "UX Writing"],
    image: "", // e.g. "images/ads-phishing-simulation.jpg"
    icon: "fa-solid fa-triangle-exclamation",
    thumbA: "#e0e7ff",
    thumbB: "#eff6ff"
  },
  {
    id: "illustration-onboarding-mascot",
    title: "Onboarding Game Mascot & Icon Set",
    category: "illustration",
    categoryLabel: "Illustration",
    description: "A custom mascot and supporting icon set built for the gamified onboarding experience.",
    tags: ["Illustrator", "Character Design", "Iconography"],
    image: "", // e.g. "images/illustration-onboarding-mascot.jpg"
    icon: "fa-solid fa-wand-magic-sparkles",
    thumbA: "#c7d2fe",
    thumbB: "#dbeafe"
  },
  {
    id: "illustration-infographics",
    title: "Cybersecurity Warning Infographics",
    category: "illustration",
    categoryLabel: "Illustration",
    description: "A set of clear, non-alarmist warning infographics explaining common social-engineering tactics.",
    tags: ["Infographics", "Illustrator", "Information Design"],
    image: "", // e.g. "images/illustration-infographics.jpg"
    icon: "fa-solid fa-diagram-project",
    thumbA: "#bfdbfe",
    thumbB: "#e0f2fe"
  },
  {
    id: "projects-onboarding-game",
    title: "Gamified Onboarding Platform",
    category: "projects",
    categoryLabel: "Projects",
    description: "Full case study: designing an engaging, points-based onboarding journey for new hires.",
    tags: ["UX Design", "Gamification", "Internal Comms"],
    image: "", // e.g. "images/projects-onboarding-game.jpg"
    icon: "fa-solid fa-gamepad",
    thumbA: "#0052ff22",
    thumbB: "#dbeafe"
  },
  {
    id: "projects-dashboard",
    title: "Utility & Management Dashboard",
    category: "projects",
    categoryLabel: "Projects",
    description: "Full case study: a dark/light-mode executive dashboard built with React, PHP, and SQL.",
    tags: ["React", "PHP", "SQL", "UI/UX"],
    image: "", // e.g. "images/projects-dashboard.jpg"
    icon: "fa-solid fa-chart-line",
    thumbA: "#bae6fd",
    thumbB: "#c7d2fe"
  }
];
