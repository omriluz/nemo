import { useLocation } from "react-router-dom";
// import Logo from '../../assets/img/logoPngHomePNG.png'
import { ReactComponent as HomeLogo } from "../../assets/svg/homePageLogo.svg";
// import { ReactComponent as Logo } from "../../assets/svg/trello-icon.svg";
// import { ReactComponent as Logo } from "../../assets/svg/svgAttempt.svg";

export const AppHeader = () => {
  const { pathname } = useLocation();
  // console.log("pathname", pathname);
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
        {/* {pathname === '/workspace' && } */}
          </div>
        <div className="nav-menu">
          <button>login</button>
          <button>signup</button>
        </div>
      </nav>
    </header>
  );
};
