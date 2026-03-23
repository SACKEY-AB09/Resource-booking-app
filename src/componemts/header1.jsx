import "../Pages/mybookings.css";
import Userprofile from "./userprofile";

const Header = ({ name }) => {
  return (
    <header className="header">
      <h3>Resource Management</h3>
      <div className="user">
        <Userprofile />
        <h3>{name}</h3>
      </div>
    </header>
  );
};

export default Header;
