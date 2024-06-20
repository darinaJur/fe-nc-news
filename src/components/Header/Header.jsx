import "./Header.css"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


const Header = () => {
    const { user } = useContext(UserContext)

    return (<header>
        <p>You are logged in as {user.username}</p>
    </header>)
}

export default Header;