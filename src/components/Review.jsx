const roles = [
  {
    role: "Software Engineer · Backend",
    organization: "Ford Motor Company",
    period: "April 2025 – Present",
    details: [
      "Build Java/Kotlin Spring Boot services and work across MongoDB, Redis, BigQuery, Pub/Sub, GCP, and production delivery tooling.",
      "Independently built code intelligence across 13 enterprise repositories with symbol-aware chunks, BM25, local semantic retrieval, and RRF; targeted retrieval reduced LLM context consumption by approximately 30%.",
      "Independently built a human-reviewed dependency remediation workflow across 14 repositories, reducing a roughly four-hour manual process to roughly one hour.",
      "Contributed to SQL Server to MongoDB modernization and implemented reactive Redis caching that improved request latency by approximately 400 ms."
    ]
  },
  {
    role: "Founding Full Stack Engineer",
    organization: "Perksway",
    period: "January 2024 – April 2025",
    details: ["Built a rewards platform with Java, Spring Boot, React, and PostgreSQL; delivered APIs, data modeling, and AWS deployment automation."]
  },
  {
    role: "Area Manager",
    organization: "Amazon Fulfillment",
    period: "June 2024 – March 2025",
    details: ["Led fulfillment operations and used data to improve workflows and delivery performance."]
  },
  {
    role: "Data Science & Engineering Intern",
    organization: "Ford Motor Company",
    period: "May 2023 – August 2023",
    details: ["Worked on data pipelines and vehicle analytics using Kafka, Spark Streaming, BigQuery, and Looker Studio."]
  }
];

const Review = () => (
  <section id="experience" className="section">
    <div className="container">
      <p className="lab-eyebrow">06 / Experience</p>
      <h2 className="headline-2 mb-8">Professional Experience</h2>
      <div className="space-y-4">
        {roles.map(({ role, organization, period, details }) => (
          <article key={role} className="fire-card rounded-xl p-6 md:p-8 grid gap-5 md:grid-cols-[minmax(0,13rem)_1fr]">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">{role}</h3>
              <p className="text-red-300 text-sm mt-1">{organization}</p>
              <p className="text-gray-400 text-xs mt-2">{period}</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed list-disc pl-5">
              {details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Review;
