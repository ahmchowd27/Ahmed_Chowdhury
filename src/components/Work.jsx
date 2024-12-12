import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/netflix.webp",
    title: "Full stack Netflix-Clone",
    tags: ["REST API", "React", "NodeJS", "MongoDB"],
    projectLink: "https://ahmed-netflix.onrender.com/",
  },
  {
    imgSrc: "/images/booklet.webp",
    title: "Booklet,a book managing app",
    tags: ["Admin Dashboard ", "JavaScript", "Responsive Design"],
    projectLink: "https://book-store-48hm.onrender.com",
  },
  {
    imgSrc: "/images/ATM.webp",
    title: "ATM SIMULATOR",
    tags: ["Java", "Swing", "JDBC", "PostgreSQL"],
    projectLink: "https://github.com/ahmchowd27/BankManagement",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real estate website",
    tags: ["Next.js", "TailwindCSS", "Dynamic Content"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["Stripe API", "React", "NodeJS", "MongoDB"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
