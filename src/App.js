import { useState, useEffect } from "react";
import "./styles.css";

import MoviePreview from "./components/moviePreview";
import loadingImg from "./img/spinner.svg";
import { getMovies } from "./utils/getMovies";

const App = () =>
{
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * Runs when search state is changed.
   * Updates searchResult state based on response from server
   */
  useEffect(() =>
  {
    async function fetchData ()
    {
      if (search.length < 1) return;
      setLoading(true);

      try
      {
        const movieResult = await getMovies(search);
        setSearchResult(movieResult);
      }
      catch (error)
      {
        setSearchResult(null);
        setError(error);
      }
      setLoading(false);
    }

    fetchData();
  }, [search]);

  /**
   * Move the search bar to the top if currently centered
   * Sets the search state equal to input value, and clears the error state 
   * @param {*} event search field input element
   */
  const searchOnChange = (event) =>
  {
    if (event.target.className === "centered") event.target.className = "search-top";
    setSearch(event.target.value);
    setError("");
  }

  return (
    <div className="container">
        {(loading && <img className="loadingImg centered" src={loadingImg} alt="loading icon" />)
          || (searchResult && searchResult.map(movie => <MoviePreview key={movie.id} movie={movie} />))
        }
        {error && <p className="centered" id="error">{error}</p>}
        <input id="search" className="centered" placeholder="Search Movie" onChange={searchOnChange} value={search} autoComplete="off"></input>
        {/* <p id="attribution">This product uses the TMDb API but is not endorsed or certified by TMDb.</p> */}
    </div>
  );
}

export default App;
