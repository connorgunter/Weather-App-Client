import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <header>
      <nav className="left-nav">
        <img className="logo" src="../../images/cropped-logo.png"/>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/favorites">Saved</Link>
        <Link className="nav-link" to="/about">About</Link>
        <div className="right-nav">
          {!isLoading ? (
            isAuthenticated ? (
              <span>
                <Link to="/profile">
                  <img
                    className="user-img"
                    src={user.picture}
                    alt={`Picture of ${user.name}`}
                  />
                </Link>{" "}
                 <LogoutButton />
              </span>
            ) : (
              <LoginButton />
            )
          ) : null}
        </div>
      </nav>
    </header>
  );
};
export default Header;
