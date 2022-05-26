import { Link,useLocation } from "react-router-dom";
import { ReactComponent as HomeLogo } from "../../assets/svg/homePageLogo.svg";
export const AppHeader = () => {
  const { pathname } = useLocation();
  let routeClass = "";

  switch (pathname) {
    case "/":
      // customized transparent
      routeClass = "-home";
      break;
    case "/login":
    case "/signup":
      routeClass = "-login-signup";
      break;
    case "/workspace":
      routeClass = "-workspace";
      break;
    case "/board":
      // will come dynamically with api
      break;
  }

  return (
    <header className={`app-header${routeClass}`}>
      <nav className="nav-bar flex justify-between">
        <div className="logo-container">
          {pathname === "/" && (
            <HomeLogo />
          )}
        </div>
        {pathname === '/' && <div className="nav-menu">
            <a href="/login" className="login-btn">Log In</a>
          {/* <button className="signup-btn">signup</button> */}
          <a href="/signup" className="signup-btn">Sign Up</a>
        </div>}
      </nav>
    </header>
  );
};
