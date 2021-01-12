import React, { useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../context/";

import "../index.css";

export default function SearchView() {
  const { title } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  async function fetchTitle(title) {
    try {
      // remember to use .env
      let URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}`;
      const res = await fetch(URL);
      const { Search: list, Response: success } = await res.json();
      if (success === "True") {
        dispatch({ type: "HAS_RESULT", payload: true });
        dispatch({
          type: "FETCHED_TITLES",
          payload: list.map((movie) => ({ ...movie, selected: false }))
        });
      } else if (success === "False") {
        dispatch({ type: "HAS_RESULT", payload: false });
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    fetchTitle(title);
  }, []);

  return (
    <div className="flex-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "TOGGLE_VIEW", payload: "search" });
          fetchTitle(title);
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Search Title..."
          className="search"
          onChange={(e) =>
            dispatch({ type: "SEARCH_TITLE", payload: e.target.value })
          }
          aria-label="Search Title"
        />
        <input className="button" type="submit" value="Submit" />
      </form>
      <button
        className="button right-button"
        onClick={() => {
          dispatch({ type: "TOGGLE_VIEW", payload: "cart" });
        }}
      >
        Cart
      </button>
    </div>
  );
}
