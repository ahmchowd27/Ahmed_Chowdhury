const certifications = [
  ["AWS Certified Solutions Architect – Associate", "Amazon Web Services"],
  ["Google Cloud Associate Cloud Engineer", "Google Cloud"]
];

const Certifications = () => (
  <section id="certifications" className="section">
    <div className="container">
      <p className="lab-eyebrow">07 / Credentials</p>
      <h2 className="headline-2 mb-8">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map(([title, issuer]) => (
          <div className="fire-card rounded-xl p-6" key={title}>
            <p className="text-xs uppercase tracking-widest text-red-300 mb-3">{issuer}</p>
            <h3 className="font-semibold text-gray-100">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
