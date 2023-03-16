import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useSearchParams } from "react-router-dom";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  return <div>
    <Search />
    <MoviesGrid search={ search }/>
  </div> 
}
