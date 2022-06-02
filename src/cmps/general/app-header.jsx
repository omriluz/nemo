import { Link, useLocation, useParams } from "react-router-dom";
import { ReactComponent as HomeLogo } from "../../assets/svg/homePageLogo.svg";
import { ImTrello } from "react-icons/im";
import Logole from "../../assets/img/ttttCapture.PNG";
import avatar from "../../assets/svg/avatar.svg"

export const AppHeader = () => {
  const { pathname } = useLocation();

  let routeClass = "";


  // customized transparent
  if (pathname === "/") routeClass = "-home";
  if (pathname === "/login" || pathname === "/signup")
    routeClass = "-login-signup";
  if (pathname === "/workspace") routeClass = "-workspace";
  if (pathname.includes("/board")) routeClass = "-workspace";
  // later will come dynamically with api
  if (pathname.includes("/board") && pathname.split("/").length >= 4) routeClass = "-task-details";

  return (
    <header className={`app-header${routeClass}`}>
      <nav className="nav-bar flex justify-between align-center">
        <div className="logo-container">
          {pathname === "/" && (
            // <HomeLogo />
            <>
              <img className="logo-img" src={Logole} alt="" />
              <span className="logo-title">Nemo</span>
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
        {(pathname === "/workspace" || pathname.includes("/board")) && (
          // <HomeLogo />

          <div className="app-warper flex ">
            <Link to={"/workspace"}><div className="logo-container flex">
              <span className="logo-trello"><ImTrello /></span>
              <span className="logo-title">Nemo</span> </div>
            </Link>
            <div className="user-container">
              <div className="avatar-img" background={avatar}>

              </div>
            </div>
          </div>

        )}

      </nav>
    </header>
  );
};
