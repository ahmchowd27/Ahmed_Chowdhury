const skillCategories = [
  {
    title: "Flame Breathing - Backend Arts",
    icon: "🔥",
    description: "Master of server-side systems and microservices architecture",
    skills: ["Java/Kotlin Blade", "Spring Boot Technique", "Microservices Formation", "Apache Kafka Stream", "System Design Mastery"]
  },
  {
    title: "Thunder Breathing - Cloud Arts", 
    icon: "⚡",
    description: "Lightning-fast cloud deployment and infrastructure mastery",
    skills: ["AWS/GCP Domain", "Docker/Kubernetes Style", "CI/CD Lightning", "Infrastructure Arts", "Performance Optimization"]
  },
  {
    title: "Water Breathing - Data Arts",
    icon: "🌊", 
    description: "Fluid data processing and analytical techniques",
    skills: ["SQL/BigQuery Flow", "Apache Spark Rapids", "Database Mastery", "Data Pipeline Forms", "Machine Learning"]
  },
  {
    title: "Sun Breathing - Full-Stack Arts",
    icon: "☀️",
    description: "The most powerful complete development technique",
    skills: ["React/JavaScript", "Python Serpent", "REST API Forms", "Testing Frameworks", "Event-Driven Systems"]
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
          ⚔️ Demon Slayer Breathing Techniques
        </h2>

        <p className="text-gray-300 mt-3 mb-12 text-lg text-center reveal-up max-w-2xl mx-auto">
          Mastered breathing forms to build enterprise systems and slay technical demons
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
