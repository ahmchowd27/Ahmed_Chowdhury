/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const experiences = [
  {
    content:
      "Architecting high-performance microservices for vehicle order management, processing 50K+ daily queries with 99.9% uptime. Leading modernization of legacy systems with event-driven architecture using Kotlin, Spring Boot, Kafka, and BigQuery. Improved query performance by 75% and reduced infrastructure costs by 40% through system optimization. Implemented secure authentication with JWT, service discovery with Eureka, and automated deployments with Jenkins.",
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
      "Co-built production application serving 1,000+ active users with React frontend and Spring Boot backend. Implemented real-time order tracking with Kafka event-driven architecture and comprehensive CI/CD pipelines. Developed responsive web interface with seamless integration between user, order, and delivery services achieving 90%+ test coverage.",
    name: "Software Engineer (Co-Owner)",
    imgSrc: "/images/perksway.webp",
    company: "Perksway • January 2024 - Present",
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
