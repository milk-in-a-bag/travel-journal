import styles from "../Header.module.css";
import globeIcon from "../images/earth-americas-solid.svg";

export default function Header() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContent}>
        <img src={globeIcon} alt="globe" className={styles.globe} />
        <h1>My travel journal</h1>
      </div>
    </nav>
  );
}
