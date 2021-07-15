import React from 'react'

import loadingImg from "./../img/spinner.svg";
import MoviePreview from "./moviePreview";

export default function SearchResult ({ searchResult, status })
{

    const {state, error} = status;
    console.log("status", status);
    console.log(`STATE`, state);
    

    if (state === "idle")
    {
        return (
            null
        );
    }
    else if (state === "pending")
    {
        return (<img className="loadingImg centered" src={loadingImg} alt="loading icon" />)
    }
    else if(state === "resolved")
    {
        return (searchResult.map(movie => <MoviePreview key={movie.id} movie={movie} />));
    }
    else if(state === "error")
    {
        return (<p className="centered" id="error">{error}</p>);
    }
}
