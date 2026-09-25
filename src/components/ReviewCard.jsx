import PropTypes from "prop-types";

const ReviewCard = ({ content, imgSrc, name, company, period, classes = "" }) => (
  <article className={`fire-card rounded-xl p-6 md:p-8 min-w-0 ${classes}`}>
    <div className="flex items-center gap-4 mb-5">
      <figure className="img-box rounded-lg w-14 h-14 shrink-0">
        <img src={imgSrc} alt={`${company} logo`} loading="lazy" width="56" height="56"
          className="w-full h-full object-contain rounded-lg" />
      </figure>
      <div className="min-w-0">
        <h3 className="text-gray-100 font-semibold">{name}</h3>
        <p className="text-sm text-orange-300">{company}</p>
        <p className="text-xs text-gray-400">{period}</p>
      </div>
    </div>
    <p className="text-sm leading-relaxed text-gray-300">{content}</p>
  </article>
);

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default ReviewCard;
