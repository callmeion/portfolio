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
    image: "images/001.jpg", // e.g. "images/print-annual-report.jpg"
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
    image: "images/002.jpg", // e.g. "images/print-event-collateral.jpg"
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
    image: "images/003.jpg", // e.g. "images/social-campaign-carousel.jpg"
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
    image: "images/004.jpg", // e.g. "images/social-culture-highlights.jpg"
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
    image: "images/005.jpg", // e.g. "images/branding-culture-identity.jpg"
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
    image: "images/006.jpg", // e.g. "images/branding-training-subbrand.jpg"
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
    image: "images/008jpg", // e.g. "images/ads-phishing-simulation.jpg"
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
    image: "images/009.jpg", // e.g. "images/illustration-onboarding-mascot.jpg"
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
    image: "images/010.jpg", // e.g. "images/illustration-infographics.jpg"
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


/**
 * RESUME — drives resume.html (Resume & Training page)
 * ---------------------------------------------------------
 * Synced with the Jobthai resume (Oct 2026). Edit the text below;
 * the page re-renders automatically.
 *
 *   experience / education : { period, title, org, points[], tags[] }
 *   training  (courses taken) : { period, title, org, note }
 *   delivered (projects, awards & activities) : { period, title, org, note }
 * ---------------------------------------------------------
 */
const RESUME = {
  experience: [
    {
      period: "Oct 2025 — Present",
      title: "Personal Assistant ",
      org: "NSL Foods Public Company Limited",
      points: [
        "Oversee corporate social media channels (Facebook, Facebook Careers, YouTube, Google Business Profile) to drive employer branding and recruitment communication.",
        "Support senior executives with cross-functional coordination, strategic task follow-up, and comprehensive report preparation.",
        "Handle core HR and IT operations alongside executive support, acting as a bridge to align technological solutions with organizational development.",
        "Spearhead the annual employee activity calendar, orchestrating major corporate events, team-building initiatives, and targeted People Experience (PX) programs to foster a strong workplace culture.",
        "Act as the lead Art Director for branch-level communications, designing CI-compliant visual assets, infographics, and multi-language announcements.",
        "Take part in planning and managing digital transformation projects, including digitized welfare registration systems, to modernize internal processes and employee services.",
        "Improve team efficiency by streamlining workflows, cutting unnecessary steps, and systematically integrating Generative AI into daily operations and Learning Experience Design."
      ],
      tags: ["Executive Support", "People Experience (PX)", "Internal Comm & Art Direction", "HR & IT", "AI Projects"]
    },
    {
      period: "Nov 2023 — Present",
      title: "IT Supervisor",
      org: "NSL Foods Public Company Limited",
      points: [
        "Designed brand visuals and PR materials for online channels.",
        "Designed and prepared booths for company activities and events.",
        "Designed UX/UI in Figma and Adobe XD.",
        "Managed social media communication and engagement, including the Google Business profile.",
        "Updated and maintained the company website with WordPress, HTML, and CSS.",
        "Photographed events and produced video content.",
        "Provided technical support for online meetings and set up / troubleshot various platforms.",
        "Gave first-line IT support, including office hardware and software issues."
      ],
      tags: ["Graphic Design", "UX/UI", "WordPress", "Social Media", "IT Support"]
    },
    {
      period: "Mar 2022 — Oct 2023",
      title: "Information Technology Support Officer & IT Teacher",
      org: "Prapassorn Witthaya School, Chonburi",
      points: [
        "Instructed Information Technology and Computing Science for primary (Grades 4-5) and secondary (Grades 8-9) students.",
        "Content creation: produced graphics, videos, and written posts that promoted the school's brand.",
        "Community engagement: replied to comments, messages, and feedback online.",
        "Brand consistency: kept all social media platforms in line with brand guidelines and voice.",
        "Kept up to date with social media trends, algorithms, and platform changes.",
        "IT support: troubleshot hardware and basic software issues to keep operations running smoothly.",
        "Camera work: video recording, photography, and video editing for social media and marketing."
      ],
      tags: ["Content Creation", "Social Media", "Video", "IT Support"]
    },
    {
      period: "Nov 2021 — Mar 2022",
      title: "Graphic Designer",
      org: "Print Plus Co., Ltd.",
      points: [
        "Created print-ready designs: brochures, flyers, posters, banners, business cards, and promotional items.",
        "Used Adobe Creative Suite (Photoshop, Illustrator, InDesign) to create and edit designs.",
        "Worked closely with clients to understand design requirements, preferences, and brand guidelines.",
        "Coordinated with the print production team to oversee the printing process."
      ],
      tags: ["Print Design", "Adobe Creative Suite", "Client Collaboration"]
    },
    {
      period: "Jul 2019 — Oct 2021",
      title: "Public Relations Officer",
      org: "Nong Tamlueng Subdistrict Municipality",
      points: [
        "Media relations: built relationships and pitched press releases and stories to gain media coverage.",
        "Managed the organization's social media profiles: created and curated content, replied to messages, and monitored online reputation.",
        "IT support: troubleshot hardware and basic software issues.",
        "Camera work: video recording, photography, and video editing for social media campaigns and marketing."
      ],
      tags: ["Public Relations", "Social Media", "Video", "IT Support"]
    }
  ],

  education: [
    {
      period: "Graduated 2019",
      title: "Bachelor of Education (B.Ed.) — Educational Technology",
      org: "Burapha University, Faculty of Education",
      points: ["GPA 3.21"],
      tags: []
    }
  ],

  // Courses, certificates and workshops you have ATTENDED
  training: [
    {
      period: "Feb 2026",
      title: "Safety Officer (Executive Level)",
      org: "NSL Foods Public Company Limited",
      note: "Certified executive-level occupational health and safety training."
    },
    {
      period: "Feb 2026",
      title: "AI Workshop for Professionals (Batch 2)",
      org: "Software Park Thailand",
      note: "Hands-on AI workshop for working professionals to enhance daily workflow."
    },
    {
      period: "Jul 2025",
      title: "In-depth Dismissal Law (Labor Law)",
      org: "Sprout Solutions (Thailand) Co., Ltd.",
      note: "Comprehensive training on Thai labor laws regarding employment termination."
    },
    {
      period: "Jul 2025",
      title: "AI Workshop for Professionals (Batch 2)",
      org: "K-DAI Center, KMITL & Digital Quantum Next Academy",
      note: "Hands-on AI workshop for working professionals."
    },
    {
      period: "May 2025",
      title: "AI for Presentation",
      org: "Skillane",
      note: "Using AI tools to build and improve presentations."
    },
    {
      period: "Mar — May 2025",
      title: "HTML + CSS for Front-end Web Development",
      org: "Skillane",
      note: "Foundations of building front-end web pages with HTML and CSS."
    },
    {
      period: "Mar 2022",
      title: "Computational Science Teaching Workshop — Coding for Grade 7–9 Teachers (C4Y-4)",
      org: "Institute for the Promotion of Teaching Science and Technology (IPST)",
      note: "Training on teaching computational science and coding for lower-secondary teachers."
    },
    {
      period: "Oct 2021",
      title: "Fundamentals of Multimedia Production for Online Marketing",
      org: "Mahidol University",
      note: "Basics of producing multimedia content for online marketing."
    }
  ],

  // Projects, awards and other activities (from the resume)
  delivered: [
    {
      period: "Company event",
      title: "Master of Ceremonies",
      org: "NSL Foods · Internal activities",
      note: "Hosted a company event that trained employees on corporate culture and related topics."
    },
    {
      period: "Award",
      title: "2nd Runner-up, Video Clip Contest",
      org: "Chonburi Provincial Education Office",
      note: "Won second runner-up in the provincial video clip competition."
    },
    {
      period: "2022 academic year",
      title: "Short Film Competition Judge",
      org: "70th Student Arts & Crafts Fair · Grades 10–12",
      note: "Served on the judging panel for the short-film category."
    },
    {
      period: "Exhibition",
      title: "REO 8 Learning Space Exhibition",
      org: "Regional Education Office 8",
      note: "Co-organized an exhibition at the REO 8 meeting."
    }
  ]
};
