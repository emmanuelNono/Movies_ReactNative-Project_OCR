const API_TOKEN = "c9e0bce44b256e722e7fc17bd12c2594";

export function getFilmsFromApiWithSearchedText(text) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=en-US&query=" +
    text;
  //https://api.themoviedb.org/3/search/movie?api_key=c9e0bce44b256e722e7fc17bd12c2594&language=en-US&query=star
  //fetch is a JS librairy that return 2 options
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error + " ne compile pas"));
}
