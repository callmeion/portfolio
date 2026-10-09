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
    id: "print-school-brochure",
    title: "School Brochure Design",
    category: "print",
    categoryLabel: "Print Design",
    description: "Designed a printed introductory brochure for Prabhassorn Vidhaya School, Kindergarten level.",
    tags: ["InDesign", "Editorial Layout", "Print"],
    image: "images/001.jpg", 
    icon: "fa-solid fa-book-open",
    thumbA: "#dbeafe",
    thumbB: "#eff6ff"
  },
  {
    id: "print-company-profile",
    title: "Corporate Company Profile",
    category: "print",
    categoryLabel: "Print Design",
    description: "Designed the corporate company profile book for NSL Foods, featuring infographics illustrating the business structure and branches.",
    tags: ["Illustrator", "Infographics", "Editorial Layout"],
    image: "images/002.jpg", 
    icon: "fa-solid fa-chart-pie",
    thumbA: "#fed7aa",
    thumbB: "#ffedd5"
  },
  {
    id: "social-festive-csr",
    title: "Festive & CSR Social Content",
    category: "social",
    categoryLabel: "Social Media",
    description: "Created social media graphic content for various festivals and important dates, such as Earth Day and Songkran.",
    tags: ["Photoshop", "Content Creator", "Social Media"],
    image: "images/003.jpg", 
    icon: "fa-solid fa-images",
    thumbA: "#bbf7d0",
    thumbB: "#dcfce7"
  },
  {
    id: "event-exhibition-booth",
    title: "Exhibition Event Collateral",
    category: "print",
    categoryLabel: "Event Design",
    description: "Designed advertising materials and booth graphics for the THAIFEX-Anuga Asia 2024 exhibition.",
    tags: ["Illustrator", "Signage", "Booth Design"],
    image: "images/004.jpg", 
    icon: "fa-solid fa-store",
    thumbA: "#fed7aa",
    thumbB: "#ffedd5"
  },
  {
    id: "corporate-pr-esg",
    title: "Corporate PR & ESG Updates",
    category: "social",
    categoryLabel: "Corporate Comms",
    description: "Developed corporate PR materials summarizing sustainability performance (ESG) and Opportunity Day events.",
    tags: ["Infographics", "PR", "Illustrator"],
    image: "images/005.jpg", 
    icon: "fa-solid fa-bullhorn",
    thumbA: "#a7f3d0",
    thumbB: "#d1fae5"
  },
  {
    id: "internal-comms-poster",
    title: "Internal Operations Posters",
    category: "print",
    categoryLabel: "Internal Comms",
    description: "Created internal communication posters, including fire drill announcements and the IT department's data organization campaigns.",
    tags: ["Poster Design", "Internal Comms", "Photoshop"],
    image: "images/006.jpg", 
    icon: "fa-solid fa-circle-exclamation",
    thumbA: "#fecaca",
    thumbB: "#fee2e2"
  },
  {
    id: "ads-ooh-billboard",
    title: "OOH Billboard Advertisement",
    category: "ads",
    categoryLabel: "Ads",
    description: "Designed large OOH billboard advertisements for bakery products under the concept of happiness and deliciousness.",
    tags: ["OOH", "Retouching", "Photoshop"],
    image: "images/007.jpg", 
    icon: "fa-solid fa-rectangle-ad",
    thumbA: "#e0e7ff",
    thumbB: "#eef2ff"
  },
  {
    id: "social-creative-campaign",
    title: "Creative Parody Campaign",
    category: "social",
    categoryLabel: "Social Media",
    description: "Developed a creative Facebook ad campaign for Pet Gourmet pet food using a movie poster parody concept.",
    tags: ["Creative Design", "Social Media", "Photoshop"],
    image: "images/008.jpg", 
    icon: "fa-solid fa-film",
    thumbA: "#c7d2fe",
    thumbB: "#e0e7ff"
  },
  {
    id: "social-product-promo",
    title: "Product Promotional Ads",
    category: "ads",
    categoryLabel: "Ads",
    description: "A collection of online promotional graphics for various products, including seasonal snacks, skincare, and dog food.",
    tags: ["Product Ads", "Social Media", "Commercial"],
    image: "images/009.jpg", 
    icon: "fa-solid fa-tag",
    thumbA: "#fbcfe8",
    thumbB: "#fce7f3"
  },
  {
    id: "branding-packaging",
    title: "Pet Food Brand Identity",
    category: "branding",
    categoryLabel: "Branding",
    description: "Designed the logo and packaging for the Pet Gourmet dog food brand, complete with 3D mockups.",
    tags: ["Logo Design", "Packaging", "Illustrator"],
    image: "images/010.jpg", 
    icon: "fa-solid fa-box-open",
    thumbA: "#fde047",
    thumbB: "#fef08a"
  }
  {
    id: "illustration-hr-recruitment",
    title: "HR On Tour Booth Illustrations",
    category: "illustration",
    categoryLabel: "Illustration",
    description: "Designed illustrated X-stand banners and booth graphics for the HR recruitment campaign, highlighting job openings and employee benefits for NSL Foods.",
    tags: ["Illustration", "Employer Branding", "Signage"],
    image: "images/011.jpg", 
    icon: "fa-solid fa-users",
    thumbA: "#fdba74",
    thumbB: "#ffedd5"
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
