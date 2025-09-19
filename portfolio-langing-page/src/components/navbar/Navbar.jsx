import "./Navbar.css";

const Navbar = ({ onNavClick }) => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <a onClick={() => onNavClick("home")}>Home</a>
        <a onClick={() => onNavClick("about")}>About</a>
        <a onClick={() => onNavClick("projects")}>Projects</a>
        <a onClick={() => onNavClick("contact")}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
