const API_TOKEN = "c9e0bce44b256e722e7fc17bd12c2594";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  //fetch is a JS librairy that return 2 options
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error + " Erreur ne compile pas"));
}

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}
