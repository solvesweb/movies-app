import styles from "./Search.module.css";
import { ImSearch } from "react-icons/im";
import { useSearchParams } from "react-router-dom";

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search ?? ""}
          onChange={(e) => {
            const value = e.target.value;

            setQuery({ search: value });
          }}
        />
        <ImSearch size={20} color="grey" className={styles.searchButton} />
      </div>
    </form>
  );
}
