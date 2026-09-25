import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-black/30 backdrop-blur-xl border-b border-red-500/20">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center lg:px-6 lg:grid lg:grid-cols-[1fr,auto,1fr]">
        <h1>
          <a href="#home" className="logo flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg fire-gradient flex items-center justify-center font-bold text-black">
              AC
            </div>
            <span className="text-sm xl:text-lg font-bold text-gray-100">Ahmed Chowdhury</span>
          </a>
        </h1>

        <div className="relative lg:justify-self-center">
          <button
            className="menu-btn lg:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
          >
            <span className="material-symbols-rounded text-red-400">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} onNavigate={() => setNavOpen(false)} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-lg:hidden lg:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
