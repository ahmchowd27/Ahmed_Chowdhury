import ProjectCard from "./ProjectCard";

const Work = () => (
  <section id="work" className="section">
    <div className="container">
      <p className="lab-eyebrow">05 / Applied engineering</p>
      <h2 className="headline-2 mb-3">Featured Project</h2>
      <p className="text-gray-300 mb-8 max-w-2xl">SafeSnap brings applied AI into a backend safety reporting workflow.</p>
      <ProjectCard
        imgSrc="/images/safesnap-architecture.svg"
        title="SafeSnap — Safety Reporting Platform"
        tags={["Kotlin", "Spring Boot", "PostgreSQL", "Google Vision API", "OpenAI", "AWS S3"]}
        projectLink="https://github.com/ahmchowd27/SafeSnap-Backend"
        description="A backend for safety incident reporting with secured REST APIs, image analysis, and assisted root cause analysis. Explore its public repository for implementation details."
        featured
        classes=""
      />
    </div>
  </section>
);

export default Work;
