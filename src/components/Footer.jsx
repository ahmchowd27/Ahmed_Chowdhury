import { ButtonPrimary } from "./Button";

const sitemap = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["AI Lab", "#ai-lab"],
  ["SafeSnap", "#work"],
  ["Experience", "#experience"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"]
];

const socials = [
  ["GitHub", "https://github.com/ahmchowd27"],
  ["LinkedIn", "https://linkedin.com/in/ahmed-s-chowdhury"],
  ["Email", "mailto:ahmedssofa@gmail.com"]
];

const Footer = () => (
  <footer className="mt-20 border-t border-red-500/20 bg-black/40 py-12 md:py-16">
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="grid h-10 w-10 place-items-center rounded-lg fire-gradient text-black font-bold">AC</span>
            <span className="font-semibold text-gray-100">Ahmed Chowdhury</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-3">Let&apos;s build something useful.</h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-300 mb-6">
            Software engineer building backend, cloud, data, and agentic developer systems.
          </p>
          <ButtonPrimary href="mailto:ahmedssofa@gmail.com" label="Start a conversation" icon="chevron_right" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">Quick links</h3>
            <ul className="space-y-2">
              {sitemap.map(([label, href]) => (
                <li key={href}><a href={href} className="text-sm text-gray-400 hover:text-orange-300">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">Connect</h3>
            <ul className="space-y-2">
              {socials.map(([label, href]) => (
                <li key={label}><a href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-sm text-gray-400 hover:text-orange-300">{label}</a></li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-6 break-all">ahmedssofa@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-red-500/20 mt-10 pt-6 flex flex-wrap justify-between gap-3 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Ahmed Chowdhury. All rights reserved.</p>
        <a href="#home" className="hover:text-orange-300">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
