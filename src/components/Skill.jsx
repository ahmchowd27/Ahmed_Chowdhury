const skillCategories = [
  {
    title: "Backend & Systems",
    icon: "⚙️",
    description: "Server-side development and system architecture",
    skills: ["Java/Kotlin", "Spring Boot", "Microservices", "Apache Kafka", "System Design"]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    description: "Cloud platforms and deployment infrastructure",
    skills: ["AWS/GCP", "Docker/Kubernetes", "CI/CD", "Infrastructure as Code", "Performance Optimization"]
  },
  {
    title: "Data & Analytics",
    icon: "📊",
    description: "Data processing and analytics platforms",
    skills: ["SQL/BigQuery", "Apache Spark", "PostgreSQL/MongoDB", "Data Pipelines", "Machine Learning"]
  },
  {
    title: "Frontend & Full-Stack",
    icon: "💻",
    description: "User interfaces and complete application development",
    skills: ["React/JavaScript", "Python", "REST APIs", "TDD/BDD", "Event-Driven Architecture"]
  }
];

const SkillCategory = ({ category }) => (
  <div className="fire-card rounded-xl p-6 reveal-up relative overflow-hidden">
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{category.icon}</span>
        <h3 className="text-lg font-bold text-gray-100">{category.title}</h3>
      </div>
      <p className="text-sm text-gray-300 mb-4">{category.description}</p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-400/20 to-orange-400/20 text-red-400 border border-current/30">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up text-center fire-text mb-4">
          💻 Technical Skills
        </h2>

        <p className="text-gray-300 mt-3 mb-12 text-lg text-center reveal-up max-w-2xl mx-auto">
          Technologies and tools I use to build scalable, high-performance applications that power enterprise systems
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
