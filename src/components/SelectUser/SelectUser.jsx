import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUsers } from "../../../api";
import "./SelectUser.css";

const SelectUser = ({ clickSelectUser }) => {
  const { user, setUser } = useContext(UserContext);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setAllUsers(data.users);
    });
  }, []);

  const handleClick = (selectedUser) => {
    setUser(selectedUser);
    clickSelectUser();
  };

  return (
    <div className="select-user-popup">
      <p className="logged-user">Logged in as {user.username}</p>
      <p>Choose another user:</p>
      <div className="alternative-users">
        <ul>
          {allUsers.map((user) => (
            <li key={user.username}>
              <button onClick={() => handleClick(user)}>
                <img
                  src={user.avatar_url}
                  alt={`avatar image for ${user.username}`}
                />
                <p>{user.username}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectUser;
