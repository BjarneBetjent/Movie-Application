import React from 'react'

export default function Movie ({ movie })
{
    return (
        <div className="movie">
            {movie.title}
        </div>
    )
}
