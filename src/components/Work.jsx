import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/netflix.webp",
    title: "Netflix-Style Streaming Platform",
    tags: ["React", "Node.js", "MongoDB", "REST API", "JWT"],
    projectLink: "https://ahmed-netflix.onrender.com/",
    description: "Full-stack streaming application with user authentication, video streaming, and personalized recommendations. Built with modern technologies to replicate Netflix's core functionality.",
    impact: "Full video streaming • User authentication • Responsive design"
  },
  {
    imgSrc: "/images/rest.webp",
    title: "SafeSnap - AI Safety Incident Reporting API",
    tags: ["Kotlin", "Spring Boot", "PostgreSQL", "Google Vision AI", "OpenAI", "AWS S3"],
    projectLink: "https://github.com/ahmchowd27/SafeSnap-Backend",
    description: "Production-ready enterprise backend system for safety incident reporting. Features JWT authentication, AI-powered image analysis, automated Root Cause Analysis generation, and comprehensive workflow management for construction teams.",
    impact: "40+ REST endpoints • AI-powered analysis • Enterprise security • 80%+ test coverage"
  },
  {
    imgSrc: "/images/booklet.webp", 
    title: "Booklet Management System",
    tags: ["JavaScript", "Admin Dashboard", "Responsive Design", "Database"],
    projectLink: "https://book-store-48hm.onrender.com",
    description: "Comprehensive book management application with admin dashboard for inventory management and user-friendly interface for browsing and ordering books.",
    impact: "Admin dashboard • Inventory management • User-friendly interface"
  },
  {
    imgSrc: "/images/risk.webp",
    title: "Student Risk Prediction System",
    tags: ["React", "Python", "PostgreSQL", "AWS Kinesis", "Machine Learning"],
    projectLink: "https://risk-olpd.onrender.com/",
    description: "AI-powered early warning system that analyzes student performance patterns to predict academic risk, helping educational institutions intervene proactively.",
    impact: "Predictive analytics • Early intervention • Data-driven insights"
  },
  {
    imgSrc: "/images/ATM.webp",
    title: "ATM Banking Simulator",
    tags: ["Java", "Swing", "JDBC", "PostgreSQL", "Desktop App"],
    projectLink: "https://github.com/ahmchowd27/BankManagement",
    description: "Desktop banking application simulating ATM operations with secure transaction processing, account management, and comprehensive banking features.",
    impact: "Secure transactions • Account management • Desktop application"
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real Estate Management Platform",
    tags: ["React", "Java Spring", "PostgreSQL", "AWS S3", "Full-Stack"],
    projectLink: "https://github.com/ahmchowd27/real-estate",
    description: "Comprehensive property management system with advanced search capabilities, virtual tours, and automated valuation models for real estate operations.",
    impact: "Property management • Advanced search • Automated valuations"
  }
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4 reveal-up text-center fire-text">
          🚀 Featured Projects
        </h2>
        
        <p className="text-center text-gray-300 mb-12 text-lg reveal-up">
          Independent projects showcasing full-stack development and problem-solving skills
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
