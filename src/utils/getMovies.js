import axios from "axios";

/**
 * Makes server request with given search string
 * @param {*} searchString   
 * @returns
 */
export const getMovies = async (searchString = "") =>
{
    try
    {
        const result = await axios.get("/search/movie", {
            params: {
                searchString
            }
        })
        return result.data;
    }
    catch (error)
    {      
        //throw error.response.data;
        throw new Error("Unable to find movie");
    }
}