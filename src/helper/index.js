export function checkIfSelected(arrOfMovies, imdbID) {
  for (let obj of arrOfMovies) {
    if (obj.imdbID === imdbID) {
      return true;
    }
  }
  return false;
}

export function selectMovie(movie, selectedTitles, dispatch) {
  if (checkIfSelected(selectedTitles, movie.imdbID)) {
    const newList = selectedTitles.filter(
      ({ imdbID }) => imdbID !== movie.imdbID
    );
    dispatch({ type: "SELECTED_TITLES", payload: newList });
  } else {
    const newList = [...selectedTitles, movie];
    dispatch({ type: "SELECTED_TITLES", payload: newList });
  }
}
