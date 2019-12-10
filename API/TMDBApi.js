const API_TOKEN = "c9e0bce44b256e722e7fc17bd12c2594";

export function getFilmsFromApiWithSearchedText(text) {
  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=" +
    API_TOKEN +
    "&language=fr&query" +
    text;
  //fetch is a JS librairy that return 2 options
  return fetch(url)
    .then(Response => Response.json())
    .catch(error => console.error());
}
