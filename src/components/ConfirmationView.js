import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../context/";

import "../index.css";

export default function ConfirmationView() {
  const { confirmationNumber } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <h1>Order successfully received!</h1>
      <h2>This is your order number: </h2>
      <h3>{confirmationNumber}</h3>
      <button
        className="button"
        onClick={() => {
          dispatch({ type: "TOGGLE_VIEW", payload: "search" });
        }}
      >
        Back to search
      </button>
    </>
  );
}
