const certifications = [
  {
    title: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "Valid",
    description: "Validates the ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform",
    icon: "☁️",
    skills: ["GCP", "Cloud Deployment", "BigQuery", "Cloud Operations"]
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialId: "Valid",
    description: "Validates expertise in designing distributed systems and applications on AWS",
    icon: "☁️",
    badge: "/images/aws.webp",
    skills: ["AWS Architecture", "Cloud Design", "Security", "Cost Optimization"]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4 reveal-up text-center fire-text">
          🏆 Professional Certifications
        </h2>

        <p className="text-center text-gray-300 mb-12 text-lg reveal-up">
          Industry-recognized credentials that validate technical expertise
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map(({ title, issuer, date, credentialId, description, icon, skills }, key) => (
            <div key={key} className="fire-card rounded-xl p-6 reveal-up relative">

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100 mb-1">{title}</h3>
                      <p className="text-red-400 font-medium text-sm">{issuer}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 bg-red-900/30 border border-red-500/30 px-3 py-1 rounded-full">
                    {date}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {description}
                </p>

                {credentialId && (
                  <p className="text-xs text-gray-400 mb-4 font-mono">
                    ID: {credentialId}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-400/20 to-orange-400/20 text-red-400 border border-current/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats about certifications */}
        <div className="mt-12 text-center reveal-up">
          <div className="inline-flex items-center gap-8 fire-card rounded-xl p-6">
            <div className="text-center">
              <div className="text-2xl font-bold fire-gradient bg-clip-text text-transparent mb-1">
                2
              </div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
            <div className="w-px h-8 bg-red-500/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold fire-gradient bg-clip-text text-transparent mb-1">
                GCP + AWS
              </div>
              <div className="text-sm text-gray-400">Multi-Cloud</div>
            </div>
            <div className="w-px h-8 bg-red-500/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold fire-gradient bg-clip-text text-transparent mb-1">
                2025
              </div>
              <div className="text-sm text-gray-400">Latest Cert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
