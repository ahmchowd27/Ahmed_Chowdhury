import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const experiences = [
  {
    content:
      "Designed and developed scalable microservices using Kotlin, Spring Boot, Kafka, Hazelcast, and Google BigQuery. Built high-performance, cloud-native search capabilities with SQL and BigQuery, optimized using distributed caching. Implemented secure authentication with JWT, service discovery with Eureka, and resilient messaging with Kafka. Automated deployments with Jenkins and GitHub Actions, contributing to multi-environment pipelines (development, staging, production). Practiced Test-Driven Development (TDD) to maintain code quality and reliability. Integrated GCP services with secure authentication, handled BigQuery-based search features, and collaborated on debugging complex production issues within a hybrid cloud infrastructure.",
    name: "Software Engineer",
    imgSrc: "/images/ford.webp",
    company: "Ford Motor Company",
    duration: "April 2025 - Current",
    type: "work",
  },

  {
    content:
      "Directed 160 associates, optimizing operational efficiency through strategic task assignments. Enhanced dispatch and delivery rates by 10% via data-driven analysis and strategy implementation. Assessed reports to evaluate performance, develop targeted improvements, and implement changes.",
    name: "Area Manager (L4)",
    imgSrc: "/images/amazon.webp",
    company: "Amazon",
    duration: "Jun 2021 - May 2025",
    type: "work",
  },
  {
    content:
      "Developed a user authentication system and managed page routing for a classroom reward platform. Utilized full-stack development skills to enhance user experience and streamline platform functionality. Integrated third-party APIs to improve functionality and user experience.",
    name: "Full Stack Developer(Co Founder)",
    imgSrc: "/images/perksway.webp",
    company: "Perksway",
    duration: "Jan 2024 - Current",
    type: "work",
  },
  {
    content:
      "Visualized data in Jupyter Notebook, aiding strategic decisions with Looker Studio dashboards. Developed Python models for battery health, improving vehicle performance and longevity. Enhanced decision-making through data visualization and predictive analytics.",
    name: "Data Science Intern",
    imgSrc: "/images/ford.webp",
    company: "Ford Motor Company",
    duration: "May 2023 - Aug 2023",
    type: "work",
  },
  {
    content:
      "Dean's List recipient for 2021, 2022, 2023, and 2024. Maintained a GPA of 3.92/4.00 while excelling in coursework related to software development, data science, and IT systems.",
    name: "Bachelor of Science: Information Technology",
    imgSrc: "/images/wayne state.webp",
    company: "Wayne State University",
    duration: "Summa Cum Laude Graduate Dec 2024",
    type: "education",
  },
];

const Review = () => {
  return (
    <section id="work-experience" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Work Experience</h2>

        <div className="flex items-stretch gap-3 flex-wrap">
          {experiences
            .filter(({ type }) => type === "work")
            .map(({ content, name, imgSrc, company, duration, type }, key) => (
              <ReviewCard
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={`${company} (${duration})`}
                content={content}
                type={type}
              />
            ))}
        </div>

        <h2 className="headline-2 mt-12 mb-8 reveal-up">My Education</h2>

        <div className="flex items-stretch gap-3 flex-wrap">
          {experiences
            .filter(({ type }) => type === "education")
            .map(({ content, name, imgSrc, company, duration, type }, key) => (
              <ReviewCard
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={`${company} (${duration})`}
                content={content}
                type={type}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
