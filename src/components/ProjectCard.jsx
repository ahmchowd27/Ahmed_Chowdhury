import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, description, impact, classes }) => {
  return (
    <div
      className={
        "relative fire-card rounded-xl p-6 group hover:scale-105 transform transition-all duration-500 " +
        classes
      }
    >
      {/* Animated border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      <div className="relative z-10">
        <figure className="img-box aspect-video rounded-lg mb-4 overflow-hidden">
          <img src={imgSrc} alt={title} loading="lazy" className="img-cover group-hover:scale-110 transition-transform duration-500" />
        </figure>

        <div className="flex items-center mb-3">
          <h3 className="text-xl font-bold text-gray-100 flex-1">{title}</h3>
          <div className="w-10 h-10 rounded-lg fire-gradient flex items-center justify-center text-black shrink-0 group-hover:scale-110 transition-transform">
            <span className="material-symbols-rounded text-sm" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>

        {description && (
          <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
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
      </div>

      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  description: PropTypes.string,
  impact: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
