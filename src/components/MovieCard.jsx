import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard(props) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + props.peli.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + props.peli.id}>
        <img
          width={230}
          height={345}
          className={styles.peliImg}
          src={imageUrl}
          alt={props.peli.title}
        />
        <div>{props.peli.title}</div>
      </Link>
    </li>
  );
}
