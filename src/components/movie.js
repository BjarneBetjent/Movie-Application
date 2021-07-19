import React from 'react'

export default function Movie ({ movie })
{
    const imgURL = `https://image.tmdb.org/t/p/w342/${movie.posterPath}`;
    const altText = `Poster from the movie ${movie.title}`;
    const showTitle = movie.title !== movie.originalTitle ? true : false

    return (
        <div className="movie">
            <div className="moviePoster">
                <img className="posterImage" src={imgURL} alt={altText} />
            </div>
            <div className="orgTitle smallTopMargin">
                {movie.originalTitle}
            </div>
            <div className={showTitle ? "title smallTopMargin" : "hiddenContent"}>
                {movie.title !== movie.originalTitle ? `(${movie.title})` : null}
            </div>
            <div className="releaseDate smallTopMargin">
                {movie.releaseDate}
            </div>
            <div className="overview smallTopMargin">
                {movie.overview}
            </div>
        </div>
    )
}
