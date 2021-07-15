import { useState, useEffect, useMemo, useCallback } from "react";
import "./styles.css";


import SearchResult from "./components/searchResult";
import { getMovies } from "./utils/getMovies";
import { debounce } from "./utils/debounce";


const App = () =>
{
  const [status, setStatus] = useState({ state: "idle", error: null });
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  /**
   * Search for movies with the given search term
   */
  const searchMovies = useCallback(async () =>
  {
    try
    {
      const movieResult = await getMovies(search);
      setSearchResult(movieResult);
      setStatus({ state: "resolved" });
    }
    catch (error)
    {
      setStatus({ state: "error", error });
    }
  }, [search])

  /**
   * Debouced version of the searchMovies function 
   * to avoid unnecessary server requests
   */
  const debouncedSearchMovies = useMemo(() =>
  {
    return debounce(searchMovies, 500);
  }, [searchMovies]);


  /**
   * Runs when search state is changed.
   */
  useEffect(() =>
  {
    if (search.length < 1) return;
    setStatus({ state: "pending" });

    debouncedSearchMovies();
  }, [debouncedSearchMovies, search]);

  /**
   * Move the search bar to the top if currently centered
   * Sets the search state equal to input value, and clears the error state 
   * @param {*} event search field input element
   */
  const searchOnChange = (event) =>
  {
    if (event.target.className === "centered") event.target.className = "search-top";
    setSearch(event.target.value);
  }

  return (
    <div className="container">
      <div className="tmdb"><p>All movie info is gathered from themoviedb.org</p></div>
      <SearchResult searchResult={searchResult} status={status} />
      <input id="search" className="centered" placeholder="Search Movie" onChange={searchOnChange} value={search} autoComplete="off"></input>
      {/* <p id="attribution">This product uses the TMDb API but is not endorsed or certified by TMDb.</p> */}
    </div>
  );
}

export default App;
