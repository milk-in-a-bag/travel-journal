import styles from "../Entry.module.css";

export default function Entry() {
  return (
    <section className={styles.fuji}>
      <div className={styles.entryWrapper}>
        <div className={styles.left}>
          <img
            src="src/images/fuji.jpg"
            alt="Mount Fuji"
            className={styles.fujiImage}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.location}>
            <img
              src="src/images/location-dot-solid.svg"
              alt="Location icon"
              className={styles.locationIcon}
            />
            <p>JAPAN</p>
            <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
              View on Google Maps
            </a>
          </div>
          <h1 className={styles.title}>Mount Fuji</h1>
          <p className={styles.date}>12 Jan, 2024 - 24 Jan, 2024</p>
          <p className={styles.info}>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            metres (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, and for good reason. The mountain is a dormant
            volcano, which is considered sacred by the Japanese people.
          </p>
        </div>
      </div>
    </section>
  );
}
