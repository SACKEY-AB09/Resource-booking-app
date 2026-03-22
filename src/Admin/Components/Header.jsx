import styles from "../admin_css.module.css";
import User from "../../assets/User.svg";
import Shield from "../../assets/Shield.svg";

const Header = ({ screen, panel, username }) => {
  return (
    <div className={styles.header}>
      <p>{screen}</p>
      <div className={styles.userInfo}>
        <div className={styles.panel}>
          <img src={Shield} width={30} />
          <p>{panel} panel</p>
        </div>
        <div className={styles.name}>
          <img src={User} width={30} />
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
