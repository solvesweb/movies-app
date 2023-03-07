import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  /* Navigate, */
} from "react-router-dom";
import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>The Movies App 📽️</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}
