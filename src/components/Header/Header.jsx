import "./Header.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import SelectUser from "../SelectUser/SelectUser";

const Header = () => {
  const { user } = useContext(UserContext);
  const [showSelectUser, setShowSelectUser] = useState(false);

  const clickSelectUser = () => {
    setShowSelectUser(!showSelectUser);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <div className="logo-components">
            <img src="https://github.com/darinaJur/fe-nc-news/blob/23b613d2d0045ece5bcc39e0c7771481e4970f3a/src/images/new-logo.png?raw=true" alt="logo image" />
          </div>
        </Link>
      </div>
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/post-article">Post</Link>
        <Link to="/about">About</Link>
        <div className="avatar-container">
          <button onClick={clickSelectUser} className="avatar-button">
            <img
              src={user.avatar_url}
              alt={`avatar image for ${user.username}`}
            />
          </button>
          {showSelectUser && <SelectUser clickSelectUser={clickSelectUser} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
