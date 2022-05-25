import { useLocation } from "react-router-dom";
// import Logo from '../../assets/svg/Trello.svg'
import { ReactComponent as YourSvg } from '../../assets/svg/Trello.svg';


export const AppHeader = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const style = {};

  switch (pathname) {
    case "/":
      // customized transparent
      style.backgroundColor = 'transparent'
      break;
    case "/login":
      style.display = 'none'
      break;
    case "/workspace":
      style.backgroundColor = '#026aa7'
      style.height = '44px'
      break;
    case "/board":
      // changes color
      break;
  }

  return (
    <header style={style} className="app-header">
      <nav className="nav-bar flex justify-between">
        <YourSvg />
        {/* <img src={Logo} alt="" /> */}
        <div className="nav-menu">
          <button>login</button>
          <button>signup</button>
        </div>
      </nav>
    </header>
  );
};
