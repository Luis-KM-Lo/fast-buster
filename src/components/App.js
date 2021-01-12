import React, { useReducer } from "react";
import CartView from "./CartView";
import ConfirmationView from "./ConfirmationView";
import SearchView from "./SearchView";
import CardList from "./CardList";
import { StateContext, DispatchContext } from "../context/";
import { initialState, reducer } from "../reducer";

import "../index.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    title,
    fetchedTitles,
    selectedTitles,
    hasResult,
    currentView,
    confirmationNumber
  } = state;

  function renderView(currentView, listOfTitles) {
    switch (currentView) {
      case "search":
        return (
          <>
            <SearchView />
            <CardList listOfTitles={listOfTitles} />
          </>
        );
      case "cart":
        return (
          <>
            <CartView />
            <CardList listOfTitles={listOfTitles} />
          </>
        );
      case "confirmation":
        return <ConfirmationView />;
      default:
        return (
          <>
            <SearchView />
            <CardList listOfTitles={listOfTitles} />
          </>
        );
    }
  }

  const listOfTitles = currentView === "cart" ? selectedTitles : fetchedTitles;

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider
        value={{
          title,
          fetchedTitles,
          selectedTitles,
          hasResult,
          currentView,
          confirmationNumber
        }}
      >
        <div className="App">
          <h1>Fastbuster</h1>
          {renderView(currentView, listOfTitles)}
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
