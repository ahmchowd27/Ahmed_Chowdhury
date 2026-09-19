/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const experiences = [
  {
    content:
      "Independently built a Python/MCP code-intelligence platform across 13 enterprise repositories using symbol-aware chunking, BM25 and local-embedding semantic retrieval, and Reciprocal Rank Fusion ranking, cutting LLM context token consumption by ~30%. Built an agentic dependency-remediation workflow across 14 repositories that detects vulnerabilities and opens human-reviewed pull requests, cutting remediation time from ~4 hours to ~1 hour. Contributed to migrating an enterprise order-processing system from SQL Server to MongoDB and implemented reactive Redis caching that improved request latency by ~400ms. Develop Java and Kotlin Spring Boot microservices across a 30+ service order-fulfillment platform with event-driven Pub/Sub flows, deployed via Terraform, Jenkins, and Cloud Run on GCP.",
    name: "Software Engineer - Backend",
    imgSrc: "/images/ford.webp",
    company: "Ford Motor Company (GOMS Team) • April 2025 - Present",
    type: "work",
  },
  {
    content:
      "Led 160+ team members in high-volume fulfillment operations, applying data-driven approaches to optimize workflow efficiency. Identified 15% workflow improvement opportunities through analytics while maintaining KPIs including On Time Dispatch and safety compliance. Developed analytical and systems thinking skills directly applicable to software architecture design.",
    name: "Area Manager",
    imgSrc: "/images/amazon.webp",
    company: "Amazon Fulfillment • June 2024 - March 2025",
    type: "work",
  },
  {
    content:
      "Built and launched a K-12 rewards platform serving 500+ active users with Java, Spring Boot, React, and PostgreSQL, designing 15+ REST APIs and the data model behind authentication, roles, rewards, and redemptions. Containerized services with Docker and automated AWS deployments through GitHub Actions CI/CD.",
    name: "Founding Full Stack Engineer",
    imgSrc: "/images/perksway.webp",
    company: "Perksway • January 2024 - April 2025",
    type: "work",
  },
  {
    content:
      "Built real-time data pipelines for connected vehicle telemetry using Apache Kafka and Spark Streaming, processing terabytes of vehicle sensor data. Developed machine learning models reducing EV charging inefficiencies by 8% across Ford's test fleets. Created interactive dashboards with GCP BigQuery and Looker Studio for EV fleet analytics and collaborated with Android teams on system optimization.",
    name: "Data Science & Engineering Intern",
    imgSrc: "/images/ford.webp",
    company: "Ford Motor Company • May 2023 - August 2023",
    type: "work",
  },
  {
    content:
      "Graduated Summa Cum Laude with a 3.92 GPA, achieving Dean's List recognition for four consecutive years (2021-2024). Specialized in software development, data science, and IT systems with focus on enterprise applications and cloud technologies. Completed comprehensive coursework in algorithms, database systems, and software engineering principles.",
    name: "Bachelor of Science: Information Technology",
    imgSrc: "/images/wayne state.webp",
    company: "Wayne State University • Graduated December 2024",
    type: "education",
  },
];

const Review = () => {
  return (
    <section id="experience" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-4 text-center fire-text reveal-up">
          💼 Professional Experience
        </h2>
        
        <p className="text-center text-gray-300 mb-12 text-lg reveal-up">
          Building powerful systems and leading high-performance teams
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {experiences
            .filter(({ type }) => type === "work")
            .map(({ content, name, imgSrc, company, type }, key) => (
              <ReviewCard
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
                type={type}
                classes="reveal-up"
              />
            ))}
        </div>

        <h2 className="headline-2 mb-4 text-center fire-text reveal-up">
          🎓 Education
        </h2>
        
        <p className="text-center text-gray-300 mb-12 text-lg reveal-up">
          Academic foundation with focus on technology and innovation
        </p>

        <div className="flex justify-center">
          {experiences
            .filter(({ type }) => type === "education")
            .map(({ content, name, imgSrc, company, type }, key) => (
              <ReviewCard
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
                type={type}
                classes="reveal-up max-w-2xl"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
