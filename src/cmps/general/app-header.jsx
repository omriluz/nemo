import { Link, useLocation, useParams } from "react-router-dom";
import { ReactComponent as HomeLogo } from "../../assets/svg/homePageLogo.svg";
import Logole from "../../assets/img/ttttCapture.PNG";

export const AppHeader = () => {
  const { pathname } = useLocation();

  let routeClass = "";


  // customized transparent
  if (pathname === "/") routeClass = "-home";
  if (pathname === "/login" || pathname === "/signup")
    routeClass = "-login-signup";
  if (pathname === "/workspace") routeClass = "-workspace";
  // later will come dynamically with api
  if (pathname.includes("/board")) routeClass = "-workspace";
  // if (pathname.includes("/board") && pathname.split("/").length >= 4) routeClass = "-task-details";

  return (
    <header className={`app-header${routeClass}`}>
      <nav className="nav-bar flex justify-between align-center">
        <div className="logo-container">
          {pathname === "/" && (
            // <HomeLogo />
            <>
              <img className="img-zain" src={Logole} alt="" />
              <span className="please-work">Nemo</span>
              {/* <span className="please-work">Nemo</span> */}
            </>
          )}
        </div>
        {pathname === "/" && (
          <div className="nav-menu">
            {/* change from Link to a */}
            <a href="/login" className="login-btn">
              Log In
            </a>
            {/* <button className="signup-btn">signup</button> */}
            <a href="/signup" className="signup-btn">
              Sign Up
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
