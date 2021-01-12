export const initialState = {
  title: "Pokemon",
  fetchedTitles: [],
  selectedTitles: [],
  hasResult: true,
  currentView: "search",
  confirmationNumber: ""
};

export function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_TITLE":
      return { ...state, title: action.payload };
    case "FETCHED_TITLES":
      return { ...state, fetchedTitles: action.payload };
    case "SELECTED_TITLES":
      return { ...state, selectedTitles: action.payload };
    case "HAS_RESULT":
      return { ...state, hasResult: action.payload };
    case "TOGGLE_VIEW":
      return { ...state, currentView: action.payload };
    case "FAST_CHEKOUT":
      return {
        ...state,
        selectedTitles: [],
        confirmationNumber: action.payload
      };
    default:
      throw new Error();
  }
}
