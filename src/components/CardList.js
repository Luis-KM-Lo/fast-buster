import React, { useContext } from "react";
import { StateContext } from "../context/";
import Card from "./Card";

import "../index.css";

export default function CardList({ listOfTitles }) {
  const { hasResult } = useContext(StateContext);

  return (
    <>
      {hasResult ? (
        <div className="CardList">
          {listOfTitles.map((props) => (
            <Card key={props.imdbID} {...props} />
          ))}
        </div>
      ) : (
        <p>No result found</p>
      )}
    </>
  );
}
