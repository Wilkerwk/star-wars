const url = `https://swapi.dev/api/films/`


//scans all episodes bringing the complete number of indexes (length)
async function apiInfoCards(url) {
    let response = await fetch(url);
    let data = await response.json();
    let dataCards = await data.results;
    return dataCards;
}

let apiInfoCard = await Promise.all([apiInfoCards(url)]);

/*returns all information about all movies
let apiInfoFilms = async function apiInfoFilms(urlFilm) {
    let response = await fetch(url);
    let data = await response.json();
    let film = await data;
    return film;
}
*/

export {apiInfoCard,}
