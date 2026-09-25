const socialLinks = [
  { label: "GitHub", href: "https://github.com/ahmchowd27", mark: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ahmed-s-chowdhury", mark: "in" },
  { label: "Email", href: "mailto:ahmedssofa@gmail.com", mark: "@" }
];

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="lab-eyebrow">08 / Connect</p>
          <h2 className="headline-2 mb-4">Connect with me</h2>
          <p className="text-gray-300 max-w-md leading-relaxed">
            Have a backend, cloud, or developer tooling problem to discuss? Send a message or reach me directly.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {socialLinks.map(({ label, href, mark }) => (
              <a key={label} href={href} aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-black/30 px-4 py-3 text-sm text-gray-200 hover:border-orange-400/60 hover:text-orange-200">
                <span className="grid h-6 w-6 place-items-center rounded bg-orange-400/10 font-mono text-xs font-bold text-orange-300" aria-hidden="true">{mark}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
        <form action="https://getform.io/f/bollrnva" method="POST" className="fire-card rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-gray-100 mb-5">Send a message</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required className="text-field" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="label">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="text-field" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="label">Message</label>
            <textarea id="message" name="message" required className="text-field resize-y min-h-32 max-h-80" placeholder="Tell me what you're working on" />
          </div>
          <button type="submit" className="btn btn-primary mt-5">Submit message <span aria-hidden="true">→</span></button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
