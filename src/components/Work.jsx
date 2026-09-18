import ProjectCard from "./ProjectCard";

const featuredWork = {
  imgSrc: "/images/safesnap-architecture.svg",
  title: "SafeSnap — AI-Powered Safety Reporting Platform",
  tags: ["Kotlin", "Spring Boot", "PostgreSQL", "Google Vision API", "OpenAI", "AWS S3"],
  projectLink: "https://github.com/ahmchowd27/SafeSnap-Backend",
  description: "Production-grade backend for construction site safety reporting. Combines JWT-secured REST APIs, AI-powered hazard image analysis, and automated root-cause-analysis generation into a workflow field teams use to report and resolve safety incidents faster.",
  impact: "40+ REST endpoints • AI-assisted hazard detection • 80%+ test coverage"
};

const otherWorks = [
  {
    imgSrc: "/images/risk.webp",
    title: "Predictive Risk Analysis",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    projectLink: "https://github.com/ahmchowd27/risk-prediction",
    description: "Machine learning pipeline that models business risk patterns from historical data, using statistical analysis and visualization to surface actionable insights.",
    impact: "85% prediction accuracy • Statistical modeling • Data visualization"
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real Estate Listings Portal",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    projectLink: "https://github.com/ahmchowd27/real-estate-portal",
    description: "Full-stack property listing platform with search, filtering, user accounts, and a booking flow, built end-to-end from data model to UI.",
    impact: "Full-text property search • User accounts • Booking workflow"
  }
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4 reveal-up text-center fire-text">
          Featured Work
        </h2>

        <p className="text-center text-gray-300 mb-12 text-lg reveal-up">
          A closer look at what I&apos;ve built, from a production AI-backed safety platform to smaller full-stack projects
        </p>

        <div className="mb-8">
          <ProjectCard
            {...featuredWork}
            featured
            classes="reveal-up"
          />
        </div>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {otherWorks.map(({ imgSrc, title, tags, projectLink, description, impact }, key) => (
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
