export const searchResultsArray = (result) =>
{
    console.log("serach result arraY: ", result.data);
    return result.data;
    
    /* let movieArray = [];
    
    for (let i = 0; i < result.data.length; i++)
    {
        
        const trimmedMovie = {
            id: result.data[i].id,
            title: result.data[i].title,
            originalTitle: result.data[i].original_title,
            posterPath: result.data[i].poster_path,
            overview: result.data[i].overview,
            releaseDate: result.data[i].release_date            
        }
        movieArray.push(trimmedMovie);
    }    
    console.log(movieArray);
    
    return movieArray; */
}

/**
 * result.data.results == array
 */