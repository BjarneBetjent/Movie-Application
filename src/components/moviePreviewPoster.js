import React from 'react';
import { Link } from "react-router-dom";

export default function MoviePreviewPoster ({setMovie, movie })
{
    const imgURL = `https://image.tmdb.org/t/p/w342/${movie.posterPath}`;
    const altText = `Poster from the movie ${movie.title}`;
    return (
        <div className="moviePreview">
            <Link to="/movie">
                <img className="previewImage" src={imgURL} alt={altText} onClick={() => setMovie(movie)}/>
            </Link>
        </div>
    )
}
