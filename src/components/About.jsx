const aboutItems = [
  {
    label: "Daily Queries Handled",
    number: "50K+",
    icon: "🚗"
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
    icon: "✅"
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="fire-card p-7 rounded-2xl md:p-12 reveal-up relative overflow-hidden group">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/5 via-orange-400/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="headline-2 mb-6 fire-text">💼 About Me</h2>
            
            <p className="text-gray-300 mb-6 md:mb-8 md:text-lg md:max-w-[65ch] leading-relaxed">
              Backend Engineer at <span className="fire-text font-semibold">Ford Motor Company</span> specializing in high-performance microservices and cloud architecture. 
              I architect scalable systems that handle <span className="fire-text font-semibold">50K+ daily queries</span> with 99.9% uptime, 
              while also bringing leadership experience from managing <span className="fire-text font-semibold">160+ team members</span> at Amazon.
            </p>

            <p className="text-gray-300 mb-8 md:text-lg md:max-w-[65ch] leading-relaxed">
              My expertise spans <span className="fire-text">Java/Kotlin, Spring Boot, Apache Kafka, and cloud platforms (AWS/GCP)</span>. 
              I excel at modernizing legacy systems, implementing event-driven architectures, and delivering 
              enterprise solutions that drive real business impact.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aboutItems.map(({ label, number, icon }, key) => (
                <div key={key} className="text-center group/stat hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl mb-2 group-hover/stat:animate-bounce">{icon}</div>
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
