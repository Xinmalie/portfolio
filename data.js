// ============================================================
//  data.js : THE ONLY FILE YOU NEED TO EDIT FOR CONTENT
//  - Change any text here and the website updates.
//  - Images go in the /assets folder (see assets/README.txt).
//    If an image is missing, the site shows a placeholder
//    instead of breaking, so you can add images later.
//  - Style rule for this site: no em dashes anywhere.
// ============================================================

const DATA = {
  // ---------- BASIC INFO ----------
  firstName: "Malika",
  lastName: "Touirssa",
  role: "Computer Science Graduate",
  focus: ["Cybersecurity", "Artificial Intelligence", "IT Support", "Web Development"],
  heroQuote:
    "I speak five languages and debug in all of them. Cybersecurity, AI and clean user experience are where I feel at home.",
  about:
    "I'm a Computer Science graduate from Asia Pacific University (APU) in Malaysia, dual-awarded with De Montfort University (UK). I'm Ukrainian and Moroccan, and I work comfortably across cultures: as an IT Analyst Intern at SLB I supported employees worldwide in their own languages. I build AI and web apps, run my own malware-analysis lab, and I'm growing my career in cybersecurity and AI.",
  birthDate: "2006-02-22",          // YYYY-MM-DD, age is calculated automatically
  nationality: "Ukrainian & Moroccan",
  location: "Kuala Lumpur, Malaysia",
  email: "xinmalie@gmail.com",
  phone: "+60 14-306 7294",
  cvFile: "assets/cv.pdf",           // put your CV PDF here (or set to "" to hide the button)

  // "Open to work" badge (hero + contact). Set open: false to hide it.
  availability: {
    open: true,
    label: "Open to work",
    detail: "2-month internship, or full-time from December 2026 / January 2027",
  },

  // label = short tag shown in the hero, like "BE: / IG: / LI:" in the template
  socials: [
    { label: "LI", name: "LinkedIn", handle: "/malika-touirssa", url: "https://www.linkedin.com/in/malika-touirssa-296137300/" },
    { label: "EM", name: "Email",    handle: "xinmalie@gmail.com", url: "mailto:xinmalie@gmail.com" },
    // Add more later, for example:
    // { label: "GH", name: "GitHub", handle: "/your-username", url: "https://github.com/your-username" },
  ],

  // ---------- RESUME ----------
  education: [
    {
      years: "2023-2026",
      place: "Asia Pacific University (APU), Malaysia",
      detail: "BSc (Hons) Computer Science, dual award with De Montfort University (UK). Final results: November 2026.",
    },
    {
      years: "2023",
      place: "High School, Morocco",
      detail: "Baccalaureate (Moroccan national high school diploma)",
    },
  ],

  experience: [
    {
      year: "20XX",                  // put the year of your internship here
      title: "IT Analyst Intern",
      org: "SLB, Global Service Desk (GSD) IT team",
      detail: "Supported SLB employees worldwide in multiple languages, resolving IT, security, VPN, IAM, SAP and LDAP issues.",
    },
  ],

  traits: ["#Multilingual", "#ProblemSolving", "#Teamwork", "#Adaptability"],

  skills: {
    // short = 2 letters shown in the box (like Ps / Ai in the template), name = tooltip
    tools: [
      { short: "Py", name: "Python" },
      { short: "JS", name: "JavaScript" },
      { short: "Re", name: "React" },
      { short: "Fa", name: "FastAPI" },
      { short: "Pt", name: "PyTorch" },
      { short: "Pg", name: "PostgreSQL" },
      { short: "Lx", name: "Linux (RHEL)" },
      { short: "Aw", name: "AWS" },
      { short: "Ws", name: "Wireshark" },
    ],
    knowledge: ["HTML / CSS", "SQL", "IAM & LDAP", "VPN support", "SAP support", "Networking"],
    areas: ["SOC / Blue team", "Malware analysis", "IT support", "Computer vision", "Full-stack web", "UI design"],
  },

  // ---------- PROJECTS ----------
  // category is used for the filter buttons (All / AI / Web / ...)
  // link = live website, repo = GitHub. Leave "" to hide the button.
  projects: [
    {
      title: "ScoliCare",
      category: "AI",
      tag: "Final Year Project",
      year: "2026",
      desc: "AI-assisted scoliosis assessment web app that measures the Cobb angle from spinal X-rays using a U-Net segmentation model, built for doctors.",
      tech: ["FastAPI", "PyTorch", "React", "PostgreSQL", "Vercel", "Render"],
      image: "assets/projects/scolicare.jpg",
      link: "",
      repo: "",
    },
    {
      title: "ENORA",
      category: "Web",
      tag: "Web Platform",
      year: "2026",
      desc: "English tutoring website with time-based dynamic themes, CEFR-level lessons, an AI writing-correction tool and Stripe payments.",
      tech: ["React", "Vite", "Stripe", "Vercel"],
      image: "assets/projects/enora.jpg",
      link: "",
      repo: "",
    },
    {
      title: "CRUX",
      category: "Web",
      tag: "United Hacks V7",
      year: "2026",
      desc: "Bouldering route analyzer: snap the wall, tap the holds, and Dijkstra pathfinding plus a biomechanics engine plans the smartest route for your skills.",
      tech: ["React", "Graph theory", "Dijkstra"],
      image: "assets/projects/crux.jpg",
      link: "",
      repo: "",
    },
    {
      title: "SOC Home Lab",
      category: "Security",
      tag: "Cybersecurity",
      year: "2026",
      desc: "Isolated malware-analysis lab (FLARE-VM + REMnux) used for PCAP analysis, phishing triage and malicious-document CTFs.",
      tech: ["FLARE-VM", "REMnux", "Wireshark", "CyberChef", "Sysmon"],
      image: "assets/projects/soc-lab.jpg",
      link: "",
      repo: "",
    },
    {
      title: "ScholarLink",
      category: "Cloud",
      tag: "Group Project",
      year: "2026",
      desc: "Digital Scholarship Management System designed and deployed on AWS as a team cloud project.",
      tech: ["AWS"],
      image: "assets/projects/scholarlink.jpg",
      link: "",
      repo: "",
    },
  ],

  // ---------- EVENTS I ORGANISED ----------
  // r = tilt of the polaroid card in degrees (try -4 to 4)
  events: [
    {
      title: "Great Game Week 2025",
      role: "Decoration Committee",
      org: "Asia Pacific University (APU)",
      date: "Aug 2025",
      desc: "Designed and set up the event spaces for APU's Great Game Week as part of the decoration team, from concept to the final themed areas.",
      image: "assets/events/ggw-2025.jpg",
      r: -3,
    },
    // Copy this block to add another event:
    // {
    //   title: "Event name",
    //   role: "Your role",
    //   org: "Club / organisation",
    //   date: "Mon 2026",
    //   desc: "One or two lines about what you did.",
    //   image: "assets/events/event-name.jpg",
    //   r: 3,
    // },
  ],

  // ---------- CERTIFICATES ----------
  // logo = issuer logo (square), image = photo/screenshot of the certificate itself
  certificates: [
    {
      title: "Practical SOC T1/T2 Preparation Course",
      issuer: "Udemy",
      year: "Jul 2026",
      link: "https://ude.my/UC-afdaa374-a3b1-49e6-9df6-912bf23ae7a3",
      logo: "assets/certs/udemy.png",
      image: "assets/certs/soc-udemy.jpg",
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      year: "May 2025",
      link: "",
      logo: "assets/certs/cisco.png",
      image: "assets/certs/cisco-ai.jpg",
    },
    {
      title: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat",
      year: "Dec 2024",
      link: "",
      logo: "assets/certs/redhat.png",
      image: "assets/certs/redhat-rh124.jpg",
    },
    {
      title: "Intercultural Awareness and Cultural Diversity (MOOC)",
      issuer: "Erasmus+",
      year: "Jan 2024",
      link: "",
      logo: "assets/certs/erasmus.png",
      image: "assets/certs/erasmus-mooc.jpg",
    },
  ],

  // ---------- WORKSHOPS / HACKATHONS / ACTIVITIES ----------
  workshops: [
    {
      year: "Jul 2026",
      title: "United Hacks V7 (Hackathon)",
      org: "Hack United",
      detail: "Built CRUX for the sports theme, a bouldering route analyzer using React and Dijkstra's algorithm.",
    },
    {
      year: "Mar 2026",
      title: "Plug-and-Play AI: How to Build Applications with Chutes.ai",
      org: "APU AI Club x Chutes.ai",
      detail: "Learned how AI applications are built and deployed using Chutes.ai.",
    },
    {
      year: "Apr 2025",
      title: "XAI Workshop",
      org: "APU AI Club",
      detail: "Hands-on Explainable AI: interpreting and visualising how models make decisions.",
    },
    {
      year: "Jun 2024",
      title: "Python Powered AI Chatbot Workshop",
      org: "APU AI Club",
      detail: "Built a Python chatbot with voice recognition.",
    },
    {
      year: "May 2024",
      title: "Cameron Highlands Trip",
      org: "APU Photography Club",
      detail: "Creative field trip practising landscape, portrait and nature photography.",
    },
  ],

  // ---------- LANGUAGES (dots = 1 to 5) ----------
  languages: [
    { name: "English",   level: "Fluent",       dots: 5 },
    { name: "French",    level: "Fluent",       dots: 5 },
    { name: "Russian",   level: "Fluent",       dots: 5 },
    { name: "Arabic",    level: "Fluent",       dots: 5 },
    { name: "Ukrainian", level: "Intermediate", dots: 3 },
  ],

  // ---------- HOBBIES ----------
  // emoji shows until you add your own icon image at the given path
  hobbies: [
    { emoji: "🧗", label: "Bouldering",       image: "assets/icons/bouldering.png" },
    { emoji: "📷", label: "Photography",      image: "assets/icons/photography.png" },
    { emoji: "🎧", label: "Music production", image: "assets/icons/music.png" },
    { emoji: "🎮", label: "Gaming",           image: "assets/icons/gaming.png" },
    { emoji: "🎬", label: "2D animation",     image: "assets/icons/animation.png" },
  ],


};
