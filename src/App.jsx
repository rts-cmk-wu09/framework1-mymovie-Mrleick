import "./App.css";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Outlet />
=======
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading
          title="MyMovie"
          size="16px"
          weight="bold"
          as="h1"
          color="#110E47"
        />
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading
              title="Now Showing"
              size="16px"
              weight="regular"
              color="#110e47"
              as="h2"
            />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
>>>>>>> e2c6a6eec0e1aeb9c06777af17f982364897f673
    </div>
  );
}

export default App;
