import PropTypes from "prop-types";

const items = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["AI Lab", "#ai-lab"],
  ["SafeSnap", "#work"],
  ["Experience", "#experience"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"]
];

const Navbar = ({ navOpen, onNavigate }) => (
  <nav id="primary-navigation" aria-label="Primary navigation" className={`navbar ${navOpen ? "active" : ""}`}>
    {items.map(([label, href]) => (
      <a key={href} href={href} className="nav-link" onClick={onNavigate}>{label}</a>
    ))}
  </nav>
);

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default Navbar;
