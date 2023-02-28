import pelis from "./pelis.json";
import { PeliCard } from "./PeliCard";
import styles from "./PelisGrid.module.css"

export function PelisGrid() {
  return (
    <ul className={styles.pelisGrid}>
      {pelis.map((peli) => (
        <PeliCard key={peli.id} peli={peli} />
      ))}
    </ul>    
  )
}
