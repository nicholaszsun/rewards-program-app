import logo from "../assets/app-logo__image.svg";
import "./AppNavBar.css";

const AppNavBar = () => {
  return (
    <div className="app-nav-bar">
      <img src={logo} alt="720 Martial Arts" />
      <div className="log-out-outline">
        <ion-icon name="log-out-sharp" size="large"></ion-icon>
      </div>
    </div>
  );
};
export default AppNavBar;
