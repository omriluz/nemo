import { Link, useLocation, useParams } from "react-router-dom";
import { ReactComponent as HomeLogo } from "../../assets/svg/homePageLogo.svg";
import Logole from "../../assets/img/ttttCapture.PNG";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, onLogout } from "../../store/actions/user.actions";
import { userService } from "../../services/user.service";
import { useNavigate } from "react-router";

export const AppHeader = () => {
  const { pathname } = useLocation();
  // might need to come from store
  const {user} = useSelector((storeState) => storeState.userModule)
  // const user = userService.getLoggedinUser()
  const {board} = useSelector((storeState) => storeState.boardModule)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let routeClass = "";

  // customized transparent
  if (pathname === "/") routeClass = "-home";
  if (pathname === "/login" || pathname === "/signup")
    routeClass = "-login-signup";
  if (pathname === "/workspace") routeClass = "-workspace";
  // later will come dynamically with api
  if (pathname.includes("/board")) routeClass = "-workspace";
  
  // if (pathname.includes("/board") && pathname.split("/").length >= 4)
  // routeClass = "-task-details";

  const onUserLogout = () => {
    dispatch(onLogout())
    navigate('/login')
  }

  return (
    <header style={pathname.includes("board") ? {...board?.style, filter:'brightness(0.9)'} : {}} className={`app-header${routeClass}`}>
    {pathname === "/" && (
      <nav className="nav-bar flex justify-between align-center">
        <div className="logo-container">
          <img className="logo-img-home" src={Logole} alt="" />
          <span className="logo-title-home">Nemo</span>
        </div>
        <div className="nav-menu">
          <a href="/login" className="login-btn">
            Log In
          </a>
          <a href="/signup" className="signup-btn">
            Sign Up
          </a>
        </div>
      </nav>
    )}

    {pathname !== "/" && (
      <nav className="nav-bar">
        <button onClick={onUserLogout}>logout</button>
        {/* <span>hello {user?.username || 'guest'}</span> */}
        {/* implement guest feature if no user logged in */}
        <div style={{ float: 'right', background: `url(${user?.imgUrl}) center center / cover ` }} className="user-avatar"></div>
      </nav>

    )}


  </header>






  );
};
