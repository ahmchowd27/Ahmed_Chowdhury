const dimensions = [
  ["Backend & Distributed Systems", "Java, Kotlin, Spring Boot, event-driven services, and resilient data access."],
  ["Cloud & Data Platforms", "GCP, BigQuery, Pub/Sub, Terraform, and observable delivery pipelines."],
  ["AI & Agentic Engineering", "Code retrieval, MCP tooling, and human-reviewed automation built with production engineering discipline."],
];

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="fire-card rounded-2xl p-7 md:p-10">
        <p className="lab-eyebrow">01 / Profile</p>
        <h2 className="headline-2 mb-5">About</h2>
        <p className="max-w-3xl text-gray-200 leading-relaxed md:text-lg">
          I&apos;m Ahmed Chowdhury, a software engineer at Ford working across backend systems, cloud and data platforms, and developer tooling. My AI work builds on experience delivering production software.
        </p>
        <div className="grid gap-5 md:grid-cols-3 mt-8">
          {dimensions.map(([title, description]) => (
            <div key={title} className="border-t border-red-500/30 pt-4">
              <h3 className="text-gray-100 font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-8">AWS Certified Solutions Architect – Associate · Google Cloud Associate Cloud Engineer</p>
      </div>
    </div>
  </section>
);

export default About;
