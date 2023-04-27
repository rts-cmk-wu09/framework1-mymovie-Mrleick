import "./App.css";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import SecondMovieCard from "./templates/SecondMovieCard";
import StyledLabel from "./components/Label";


function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovies" size="16" as="h1" />
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Popular" size="16" as="h1" marginBottom="10" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer secondMovieCardContainer">
            <SecondMovieCard />
            <SecondMovieCard />
          </div>
        </section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
