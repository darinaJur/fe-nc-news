import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-menu">
      <Link to="/">Home</Link>
      <Link to="/">Post</Link>
      <Link to="/">Profile</Link>
    </nav>
  );
};

export default NavBar;