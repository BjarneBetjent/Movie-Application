import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import SearchResult from "./searchResult";
import { getMovies } from "../utils/getMovies";

const SearchPage = ({ search, setSearch, setMovie }) =>
{
  const [status, setStatus] = useState({ state: "idle", error: null });
  const [searchResult, setSearchResult] = useState(null);
  const [debouncedSearch] = useDebounce(search, 600);


  /**
   * Makes server request based on the search string 600ms after the user 
   * stops typing. 
   */
  useEffect(() =>
  {
    const searchMovies = async () =>
    {
      try
      {
        const movieResult = await getMovies(debouncedSearch);
        setSearchResult(movieResult);
        setStatus({ state: "resolved" });
      }
      catch (error)
      {
        setStatus({ state: "error", error: error.message });
      }
    }

    if (debouncedSearch.length < 1) return;

    searchMovies();
  }, [debouncedSearch])

  /**
   * Move the search bar to the top if currently centered
   * Sets the search state equal to input value, and clears the error state 
   * @param {*} event search field input element
   */
  const searchOnChange = (event) =>
  {
    setSearch(event.target.value);
    if (event.target.value.length === 0) setStatus({ state: "idle" });
    else setStatus({ state: "pending" });
  }

  return (
    <div className="search-container">
      <div className="tmdb"><p>All movie info is gathered from themoviedb.org</p></div>
      <SearchResult searchResult={searchResult} status={status} setMovie={setMovie} />
      <input id="search" className={search === "" ? "centered" : "search-top"} placeholder="Search Movie" onChange={searchOnChange} value={search} autoComplete="off"></input>
      {/* <p id="attribution">This product uses the TMDb API but is not endorsed or certified by TMDb.</p> */}
    </div>
  );
}

export default SearchPage;
