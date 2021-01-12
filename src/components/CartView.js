import React, { useContext } from "react";
import { DispatchContext, StateContext } from "../context/";

import "../index.css";

export default function CartView() {
  const dispatch = useContext(DispatchContext);
  const { selectedTitles } = useContext(StateContext);

  async function sendOrders(selectedTitles) {
    const res = await fetch(
      "https://5ffd4fd4d9ddad0017f67cae.mockapi.io/api/v1/orders",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(selectedTitles)
      }
    );
    const { createdAt: confirmationNumber } = await res.json();
    dispatch({ type: "FAST_CHEKOUT", payload: confirmationNumber });
    console.log(confirmationNumber);
    dispatch({ type: "TOGGLE_VIEW", payload: "confirmation" });
  }

  return (
    <div>
      <button
        className="button"
        onClick={() => {
          dispatch({ type: "TOGGLE_VIEW", payload: "search" });
        }}
      >
        Back to search
      </button>
      <button
        className="button right-button"
        onClick={() => {
          sendOrders(selectedTitles);
        }}
        disabled={selectedTitles.length === 0 ? true : false}
      >
        Fast Checkout
      </button>
      <h2>Your Cart</h2>
    </div>
  );
}
