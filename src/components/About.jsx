const aboutItems = [
  {
    label: "Daily Requests Processed",
    number: "50K+",
    icon: "📈"
  },
  {
    label: "Team Members Led",
    number: "160+",
    icon: "👥"
  },
  {
    label: "Performance Improvement",
    number: "75%",
    icon: "⚡"
  },
  {
    label: "System Uptime",
    number: "99.9%",
    icon: "🟢"
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="fire-card p-7 rounded-2xl md:p-12 reveal-up relative overflow-hidden">

          <div className="relative z-10">
            <h2 className="headline-2 mb-6 fire-text">About</h2>

            <p className="text-gray-300 mb-6 md:mb-8 md:text-lg md:max-w-[65ch] leading-relaxed">
              I&apos;m a <span className="fire-text font-semibold">Software Engineer at Ford Motor Company</span>, working
              across backend systems, cloud platforms, and increasingly agentic AI engineering. I build production
              services that process <span className="fire-text font-semibold">50K+ daily requests</span> at 99.9% uptime,
              and bring leadership experience from managing <span className="fire-text font-semibold">160+ team members</span> in
              high-volume operations at Amazon.
            </p>

            <p className="text-gray-300 mb-8 md:text-lg md:max-w-[65ch] leading-relaxed">
              My work spans three areas: <span className="fire-text">backend &amp; distributed systems</span> (Java/Kotlin,
              Spring Boot, Kafka, MongoDB, Redis), <span className="fire-text">cloud &amp; data platforms</span> (GCP,
              BigQuery, Airflow, Terraform), and <span className="fire-text">AI &amp; agentic engineering</span> (Python,
              MCP, RAG, hybrid retrieval). I&apos;m a <span className="fire-text font-semibold">GCP Certified Associate Cloud Engineer</span> and
              an <span className="fire-text font-semibold">AWS Certified Solutions Architect Associate</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aboutItems.map(({ label, number, icon }, key) => (
                <div key={key} className="text-center">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="flex items-center justify-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-3xl fire-gradient bg-clip-text text-transparent">
                      {number}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg fire-gradient flex items-center justify-center font-bold text-black text-xl fire-glow">
                AC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
