import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../context/";
import { selectMovie, checkIfSelected } from "../helper/";

import "../index.css";

export default function Card({ Title, Year, imdbID, Type, Poster }) {
  const { currentView, selectedTitles } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div
      key={imdbID}
      id={imdbID}
      className={`Card ${
        checkIfSelected(selectedTitles, imdbID) && currentView === "search"
          ? "selected"
          : ""
      }`}
    >
      <img
        src={
          Poster === "N/A" ? "https://via.placeholder.com/300x450.png" : Poster
        }
        alt="poster"
      />
      <p>
        {Title} ({Year})
      </p>
      <p>Category: {Type}</p>
      <button
        className="button"
        onClick={() => {
          selectMovie(
            { Title, Year, imdbID, Type, Poster },
            selectedTitles,
            dispatch
          );
        }}
      >
        {checkIfSelected(selectedTitles, imdbID)
          ? "Remove from Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
}
