import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, liveLink, description, impact, classes, featured }) => {

  return (
    <div
      className={
        "relative fire-card rounded-xl p-6 transition-shadow duration-300 hover:shadow-xl " +
        (featured ? "md:p-8 " : "") +
        classes
      }
    >

      <div className="relative z-10">
        {featured && (
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold fire-gradient text-black">
            Featured Project
          </span>
        )}

        <div className={"rounded-lg mb-4 overflow-hidden bg-gray-800 border border-red-500/30 " + (featured ? "aspect-[16/7]" : "aspect-video")}>
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${imgSrc}`);
              e.target.style.display = 'block';
              e.target.style.background = '#1f2937';
              e.target.style.border = '2px solid #ef4444';
            }}
          />
        </div>

        <div className="flex items-center mb-3">
          <h3 className={"font-bold text-gray-100 flex-1 " + (featured ? "text-2xl" : "text-xl")}>{title}</h3>
        </div>

        {description && (
          <p className={"text-gray-300 text-sm mb-4 leading-relaxed " + (featured ? "" : "line-clamp-3")}>
            {description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {tags.map((label, key) => (
            <span
              key={key}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-400/20 to-orange-400/20 text-red-400 border border-current/30"
            >
              {label}
            </span>
          ))}
        </div>

        {impact && (
          <div className="text-xs fire-text font-semibold border-t border-red-500/20 pt-3">
            {impact}
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-6">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open live app <span aria-hidden="true">↗</span>
            </a>
          )}
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View source <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  liveLink: PropTypes.string,
  description: PropTypes.string,
  impact: PropTypes.string,
  classes: PropTypes.string,
  featured: PropTypes.bool,
};

export default ProjectCard;
