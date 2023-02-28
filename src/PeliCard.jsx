import styles from "./PeliCard.module.css";

export function PeliCard({ peli }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + peli.poster_path;
  return (
    <li className={styles.peliCard}>
      <img width={230} height={345} className={styles.peliImg} src={imageUrl} alt={peli.title} />
      <div>{peli.title}</div>
    </li>
  );
}
