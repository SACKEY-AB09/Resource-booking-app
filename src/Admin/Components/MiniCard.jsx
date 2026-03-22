import styles from "../admin_css.module.css";

const MiniCard = ({ heading, num, color }) => {
  return (
    <div className={styles.minicard} style={{ backgroundColor: color }}>
      <p style={{ fontWeight: "bold" }}>{heading}</p>
      <h2 className={styles.cardnum}>{num}</h2>
    </div>
  );
};

export default MiniCard;
