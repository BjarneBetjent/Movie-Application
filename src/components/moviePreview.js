import React from 'react'

export default function MoviePreview ({ movie })
{
    const imgURL = `http://image.tmdb.org/t/p/w342/${movie.posterPath}`;
    const altText = `Poster from the movie ${movie.title}`;
    return (
        <div className="moviePreview">
            <img className="previewImage" src={imgURL} alt={altText} />
        </div>
    )
}
