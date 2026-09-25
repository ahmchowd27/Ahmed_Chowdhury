import { ButtonPrimary, ButtonOutline } from "./Button";
import TerminalHero from "./TerminalHero";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-10 lg:pt-36 min-h-screen flex items-center">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg fire-glow">
              <img
                src="/images/me.webp"
                width={40}
                height={40}
                alt="Ahmed portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-gray-300 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-red-400">
              </span>
              Ahmed Chowdhury
            </div>
          </div>

          <h2 className="headline-1 max-w-[18ch] sm:max-w-[22ch] lg:max-w-[17ch] mt-5 mb-8 lg:mb-10">
            Software Engineer Building Backend Systems and Agentic AI Tooling
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
            I build backend and cloud systems, and develop retrieval and agentic tooling for engineers. My work spans distributed services, data platforms, and developer infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonPrimary
              href="/images/Ahmed-Chowdhury-Resume.pdf"
              target="_blank"
              label="Download Resume"
              icon="download"
            />

            <ButtonOutline
              href="#work"
              label="View Projects"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-0">
          <TerminalHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;
