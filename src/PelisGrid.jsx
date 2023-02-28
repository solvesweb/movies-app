import pelis from "./pelis.json";
import { PeliCard } from "./PeliCard";

export function PelisGrid() {
  return (
    <ul>
      {pelis.map((peli) => <PeliCard key={peli.id}> peli={peli} />)}
    </ul>
  );
}
