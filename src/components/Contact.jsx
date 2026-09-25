const links = [
  ["GitHub", "https://github.com/ahmchowd27"],
  ["LinkedIn", "https://linkedin.com/in/ahmed-s-chowdhury"],
  ["Email", "mailto:ahmedssofa@gmail.com"]
];

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <div className="fire-card rounded-2xl p-7 md:p-10">
        <p className="lab-eyebrow">08 / Connect</p>
        <h2 className="headline-2 mb-4">Get in touch</h2>
        <p className="text-gray-300 mb-7 max-w-xl">Interested in backend engineering, cloud systems, or developer infrastructure? I&apos;d be glad to talk.</p>
        <div className="flex flex-wrap gap-3">
          {links.map(([label, href]) => (
            <a className="btn btn-outline" key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>{label} <span aria-hidden="true">↗</span></a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
