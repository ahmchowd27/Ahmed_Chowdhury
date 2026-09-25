import ReviewCard from "./ReviewCard";

const experiences = [
  {
    name: "Software Engineer — Backend",
    company: "Ford Motor Company",
    period: "April 2025 – Present",
    imgSrc: "/images/ford.webp",
    content: "Independently built a Python/MCP code-intelligence platform across 13 enterprise repositories using symbol-aware chunking, BM25 and local-embedding semantic retrieval, and Reciprocal Rank Fusion ranking, cutting LLM context token consumption by approximately 30%. Built an agentic dependency-remediation workflow across 14 repositories that detects vulnerabilities and opens human-reviewed pull requests, cutting remediation time from roughly 4 hours to roughly 1 hour. Contributed to migrating an enterprise order-processing system from SQL Server to MongoDB and implemented reactive Redis caching that improved request latency by approximately 400 ms. Develop Java and Kotlin Spring Boot microservices with event-driven Pub/Sub flows, deployed via Terraform, Jenkins, and Cloud Run on GCP."
  },
  {
    name: "Area Manager",
    company: "Amazon Fulfillment",
    period: "June 2024 – March 2025",
    imgSrc: "/images/amazon.webp",
    content: "Led 160+ team members in high-volume fulfillment operations, applying data-driven approaches to optimize workflow efficiency. Identified 15% workflow improvement opportunities through analytics while maintaining KPIs including On Time Dispatch and safety compliance. Developed analytical and systems thinking skills directly applicable to software architecture design."
  },
  {
    name: "Founding Full Stack Engineer",
    company: "Perksway",
    period: "January 2024 – April 2025",
    imgSrc: "/images/perksway.webp",
    content: "Built and launched a K–12 rewards platform serving 500+ active users with Java, Spring Boot, React, and PostgreSQL, designing 15+ REST APIs and the data model behind authentication, roles, rewards, and redemptions. Containerized services with Docker and automated AWS deployments through GitHub Actions CI/CD."
  },
  {
    name: "Data Science & Engineering Intern",
    company: "Ford Motor Company",
    period: "May 2023 – August 2023",
    imgSrc: "/images/ford.webp",
    content: "Built real-time data pipelines for connected vehicle telemetry using Apache Kafka and Spark Streaming, processing terabytes of vehicle sensor data. Developed machine learning models reducing EV charging inefficiencies by 8% across Ford's test fleets. Created interactive dashboards with GCP BigQuery and Looker Studio for EV fleet analytics and collaborated with Android teams on system optimization."
  }
];

const education = {
  name: "Bachelor of Science: Information Technology",
  company: "Wayne State University",
  period: "Graduated December 2024",
  imgSrc: "/images/wayne state.webp",
  content: "Graduated Summa Cum Laude with a 3.92 GPA, achieving Dean's List recognition for four consecutive years (2021–2024). Specialized in software development, data science, and IT systems with focus on enterprise applications and cloud technologies. Completed coursework in algorithms, database systems, and software engineering principles."
};

const Review = () => (
  <section id="experience" className="section">
    <div className="container">
      <p className="lab-eyebrow">06 / Experience</p>
      <h2 className="headline-2 mb-8">Professional Experience</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <ReviewCard key={experience.name} {...experience} classes={index === 0 ? "md:col-span-2" : ""} />
        ))}
      </div>
      <h2 className="headline-2 mt-14 mb-6">Education</h2>
      <ReviewCard {...education} classes="max-w-3xl" />
    </div>
  </section>
);

export default Review;
