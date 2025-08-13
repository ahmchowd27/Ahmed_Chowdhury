import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-32 lg:pt-36 min-h-screen flex items-center">
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

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Flame Hashira Forging High-Performance Systems to Slay Digital Demons
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
            Mastering Flame Breathing techniques in scalable microservices, cloud architecture, and enterprise systems that protect Ford&apos;s digital realm and beyond.
          </p>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/images/Ahmed_Chowdhury_Resume_SWE.pdf"
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

        <div className="hidden lg:block lg:flex lg:justify-center">
          <figure className="w-64 h-64 fire-gradient rounded-full overflow-hidden fire-glow p-1">
            <div className="w-full h-full bg-black/50 rounded-full overflow-hidden">
              <img
                src="/images/hero.jpg"
                width={256}
                height={256}
                alt="Ahmed Chowdhury"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
