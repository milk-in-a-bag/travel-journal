import styles from "../Entry.module.css";
import locationIcon from "../images/location-dot-solid.svg";

export default function Entry({
  img,
  country,
  title,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <section className={styles.fuji}>
      <div className={styles.entryWrapper}>
        <div className={styles.left}>
          <img src={img.src} alt={img.alt} className={styles.fujiImage} />
        </div>
        <div className={styles.right}>
          <div className={styles.location}>
            <img
              src={locationIcon}
              alt="Location icon"
              className={styles.locationIcon}
            />
            <p>{country}</p>
            <a href={googleMapsLink}>View on Google Maps</a>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>{dates}</p>
          <p className={styles.info}>{text}</p>
        </div>
      </div>
    </section>
  );
}
