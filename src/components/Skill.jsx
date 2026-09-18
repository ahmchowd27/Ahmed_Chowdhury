const skillCategories = [
  {
    title: "Backend & Distributed Systems",
    icon: "🖥️",
    description: "Designing and running production backend services and event-driven systems at scale",
    skills: ["Java / Kotlin", "Spring Boot", "REST APIs", "Kafka / Pub-Sub", "MongoDB & Redis", "Concurrency & Async Systems"]
  },
  {
    title: "Cloud & Data Platforms",
    icon: "☁️",
    description: "Building cloud infrastructure and data pipelines that keep production systems reliable and observable",
    skills: ["GCP (BigQuery, Cloud Run)", "Terraform / IaC", "Airflow & Astronomer", "SQL Server & MongoDB Modernization", "CI/CD & Observability"]
  },
  {
    title: "AI & Agentic Engineering",
    icon: "🤖",
    description: "Designing retrieval systems and agentic workflows that extend how software gets built and operated",
    skills: ["MCP (Model Context Protocol)", "RAG & Hybrid Retrieval", "Semantic Search & Embeddings", "BM25 & RRF Ranking", "Human-in-the-Loop Workflows"]
  }
];

import PropTypes from 'prop-types';

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

SkillCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up text-center fire-text mb-4">
          Technical Skills
        </h2>

        <p className="text-gray-300 mt-3 mb-12 text-lg text-center reveal-up max-w-2xl mx-auto">
          Three areas I work across day to day: backend engineering, cloud &amp; data platforms, and agentic AI systems
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
