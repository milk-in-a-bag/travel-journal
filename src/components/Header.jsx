import styles from "../Header.module.css";

export default function Header() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContent}>
        <img
          src="src/images/earth-americas-solid.svg"
          alt="globe"
          className={styles.globe}
        />
        <h1>My travel journal</h1>
      </div>
    </nav>
  );
}
