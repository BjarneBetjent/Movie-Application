/**
 * Debounce method to avoid running heavy code more times than
 * necessary.  * 
 * @param {*} func function to be called after the given delay
 * @param {*} delay how long to delay running the function
 * @returns 
 */
export function debounce(func, delay = 300)
{
    let timer;

    return (...args) =>
    {   
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, delay);
    }
}