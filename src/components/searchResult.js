import React from 'react'

import loadingImg from "./../img/spinner.svg";
import MoviePreviewPoster from "./moviePreviewPoster";

export default function SearchResult ({ searchResult, status, setMovie })
{
    const {state, error} = status;    

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
        return (searchResult.map(movie => <MoviePreviewPoster key={movie.id} movie={movie} setMovie={setMovie}/>));
    }
    else if(state === "error")
    {
        return (<p className="centered" id="error">{error}</p>);
    }
}
