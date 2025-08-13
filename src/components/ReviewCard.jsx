import PropTypes from "prop-types";

const ReviewCard = ({ content, imgSrc, name, company, type }) => {
  return (
    <div className="fire-card p-6 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] relative overflow-hidden">
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="fire-text text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r from-red-400/20 to-orange-400/20 border border-red-400/30">
            {type === "education" ? "🎓 Education" : "💼 Professional Experience"}
          </span>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed text-sm">{content}</p>

        <div className="flex items-center gap-3 mt-auto">
          <figure className="img-box rounded-lg w-16 h-16 flex-shrink-0 fire-glow">
            <img
              src={imgSrc}
              alt={name}
              loading="lazy"
              className="w-full h-full object-contain rounded-lg"
            />
          </figure>

          <div className="flex-1">
            <h3 className="text-gray-100 font-semibold mb-1">{name}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ReviewCard;
