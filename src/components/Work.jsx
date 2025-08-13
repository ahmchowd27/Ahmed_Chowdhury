import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/netflix.webp",
    title: "Flame Breathing: Streaming Demon Slayer",
    tags: ["React Blade", "Node.js Fire", "MongoDB Storm", "REST Technique", "JWT Protection"],
    projectLink: "https://ahmed-netflix.onrender.com/",
    description: "Full-stack streaming dojo with demon authentication, video streaming jutsu, and personalized recommendation spirits. Built with flame breathing techniques to replicate streaming mastery.",
    impact: "Full video streaming • Demon authentication • Responsive blade work"
  },
  {
    imgSrc: "/images/rest.webp",
    title: "Thunder Breathing: SafeSnap Demon Detection API",
    tags: ["Kotlin Lightning", "Spring Boot Storm", "PostgreSQL Foundation", "Google Vision Sight", "OpenAI Spirit", "AWS S3 Cloud"],
    projectLink: "https://github.com/ahmchowd27/SafeSnap-Backend",
    description: "Production-ready enterprise backend dojo for safety demon reporting. Features JWT protection barriers, AI-powered demon vision analysis, automated Root Cause Analysis generation, and comprehensive workflow mastery for construction corps.",
    impact: "40+ REST battle techniques • AI-powered demon detection • Enterprise protection • 80%+ test coverage"
  },
  {
    imgSrc: "/images/booklet.webp",
    title: "Water Breathing: Digital Booklet Flow Creation",
    tags: ["Flutter Wave", "Dart Stream", "Firebase Temple", "Google Cloud Spirit"],
    projectLink: "https://github.com/ahmchowd27/digital-booklet-creator",
    description: "Mobile meditation app dojo for creating flowing digital booklets. Features cloud synchronization techniques, offline mastery mode, and temple-like user experience. Enables seamless creation and sharing of mystical documents.",
    impact: "Cross-platform flow • Cloud synchronization • Offline mastery • Temple UX"
  },
  {
    imgSrc: "/images/risk.webp",
    title: "Mist Breathing: Predictive Risk Vision Analysis",
    tags: ["Python Serpent", "Pandas Flow", "Scikit Technique", "Matplotlib Spirit", "Statistical Arts"],
    projectLink: "https://github.com/ahmchowd27/risk-prediction",
    description: "Machine learning prophecy system for predicting business risk patterns through the mist. Advanced statistical breathing techniques and data visualization mastery reveal hidden insights for strategic demon hunting decisions.",
    impact: "85% prediction accuracy • Advanced ML techniques • Risk visualization • Strategic insights"
  },
  {
    imgSrc: "/images/ATM.webp",
    title: "Stone Breathing: Fortress Banking Terminal",
    tags: ["Java Foundation", "MySQL Bedrock", "JFrame Temple", "Security Arts"],
    projectLink: "https://github.com/ahmchowd27/atm-system",
    description: "Unbreakable banking fortress system with stone-solid security. Features account protection barriers, transaction history scrolls, balance inquiry techniques, and withdrawal/deposit mastery with fortress-level authentication.",
    impact: "Secure transactions • Account management • History tracking • Admin controls"
  },
  {
    imgSrc: "/images/perksway.webp",
    title: "Wind Breathing: Estate Portal Mastery",
    tags: ["React Breeze", "Node.js Gale", "Express Storm", "MongoDB Earth"],
    projectLink: "https://github.com/ahmchowd27/real-estate-portal",
    description: "Swift and powerful real estate hunting ground for property seekers. Features lightning-fast property search techniques, user account dojo management, and seamless booking flow like the wind through mountains.",
    impact: "Fast property search • User management • Booking system • Responsive design"
  }
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4 reveal-up text-center fire-text">
          ⚔️ Demon Slaying Missions
        </h2>
        
        <p className="text-center text-gray-300 mb-12 text-lg reveal-up">
          Epic battles against digital demons showcasing breathing techniques and blade mastery
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, description, impact }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              description={description}
              impact={impact}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
