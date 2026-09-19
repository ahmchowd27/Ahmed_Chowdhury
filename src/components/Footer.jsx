/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About", 
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#work",
  },
  {
    label: "Certifications",
    href: "#certifications",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ahmchowd27",
    icon: "🔗"
  },
  {
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/ahmed-s-chowdhury",
    icon: "💼"
  },
  {
    label: "Portfolio",
    href: "https://ahmed-chowdhury.onrender.com",
    icon: "🌐"
  },
  {
    label: "Email",
    href: "mailto:ahmedssofa@gmail.com",
    icon: "✉️"
  },
];

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-red-500/20 py-16">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg fire-gradient flex items-center justify-center font-bold text-black text-lg fire-glow">
                AC
              </div>
              <span className="text-xl font-bold text-gray-100">Ahmed Chowdhury</span>
            </div>

            <h2 className="headline-1 mb-6 lg:max-w-[15ch] reveal-up">
              Ready to build something amazing together?
            </h2>

            <p className="text-gray-300 mb-8 max-w-md leading-relaxed reveal-up">
              Backend Engineer specializing in scalable microservices and cloud architecture. 
              Let's discuss your next project and create high-performance solutions.
            </p>

            <ButtonPrimary
              href="mailto:ahmedssofa@gmail.com"
              label="Start Collaboration"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 lg:pl-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-100 mb-4 reveal-up">Quick Links</h4>

              <ul className="space-y-2">
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-gray-300 py-1 transition-colors hover:text-red-400 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-100 mb-4 reveal-up">Connect</h4>

              <ul className="space-y-2">
                {socials.map(({ label, href, icon }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 py-1 transition-colors hover:text-red-400 reveal-up"
                    >
                      <span>{icon}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 fire-card p-4 rounded-lg reveal-up">
                <h5 className="text-sm font-semibold text-gray-100 mb-2">Contact Info</h5>
                <p className="text-xs text-gray-400 mb-1">📧 ahmedssofa@gmail.com</p>
                <p className="text-xs text-gray-400 mb-1">📱 313-455-6138</p>
                <p className="text-xs text-gray-400">📍 Warren, MI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg fire-gradient flex items-center justify-center font-bold text-black text-sm">
              AC
            </div>
            <p className="text-gray-300 text-sm reveal-up">
              &copy; 2025 <span className="fire-text font-semibold">Ahmed Chowdhury</span>. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <span className="text-gray-300 text-xs flex items-center reveal-up">
              <span className="mr-2">⚡</span>
              Built with React & Passion
            </span>
            <span className="text-gray-300 text-xs flex items-center reveal-up">
              <span className="mr-2">🔥</span>
              Powered by Innovation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
