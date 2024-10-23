import { Link } from "react-router-dom";
import Logo from "../components/UI/Logo";
import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();

  return (
    <header className="border-b border-slate-200">
      <div className="container">
        <div className="flex items-center justify-between py-3 gap-10">
          <Logo />
          <nav className="navigation">
            <ul className="flex flex-wrap gap-3">
              <Link to="/dashboard">Dashbaord</Link>
              <Link to="/">Crud</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact us</Link>
            </ul>
          </nav>
          <div>
            {!isAuthenticated ? (
              <Button onClick={() => loginWithRedirect()}>
                <span>Log In</span>
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="ms-2"
                />
              </Button>
            ) : (
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <span>Log Out</span>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="ms-2"
                />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
