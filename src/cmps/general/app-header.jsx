import { useLocation } from "react-router-dom";
// import Logo from '../../assets/img/logoPngHomePNG.png'
import { ReactComponent as Logo } from "../../assets/svg/homePageLogo.svg";
// import { ReactComponent as Logo } from "../../assets/svg/trello-icon.svg";
// import { ReactComponent as Logo } from "../../assets/svg/svgAttempt.svg";

export const AppHeader = () => {
  const { pathname } = useLocation();
  // console.log("pathname", pathname);
  const style = {};

  // switch (pathname) {
  //   case "/":
  //     // customized transparent
  //     style.backgroundColor = "transparent";
  //     break;
  //   case "/login":
  //     style.display = "none";
  //     break;
  //   case "/workspace":
  //     style.backgroundColor = '#026aa7'
  //     style.minHeight = '44px'
  //     style.maxHeight = '44px'
  //     style.overflow = 'hidden'
  //     break;
  //   case "/board":
  //     // changes color
  //     break;
  // }

  return (
    // <header style={style} className="app-header-workspace">
    <header className="app-header-login-signup ">
      <nav className="nav-bar flex justify-between">
        {/* <nav className="nav-bar"> */}
        {/* <div className="logo-container flex justify-center"> */}
        <div className="logo-container">
          <Logo />
          {/* <img src={Logo} alt="" /> */}
          {/* <span>lalala</span> */}
        </div>
        <div className="nav-menu">
          <button>login</button>
          <button>signup</button>
        </div>
      </nav>
    </header>
  );
};
