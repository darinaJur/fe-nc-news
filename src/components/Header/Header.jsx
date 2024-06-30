import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <div className="logo">
        <Link to = "/">
      <img src = "src/images/NC-NEWS-logo (1).png" alt="logo image" />
        </Link>
      </div>
      <div className= "navbar-container">
      <Link to="/">Home</Link>
      <Link to="/">Post</Link>
      <Link to="/">
      <img src = {user.avatar_url} alt={`avatar image for ${user.username}`} />
      </Link>
      </div>
    </header>
  );
};

export default Header;
