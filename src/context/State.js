import React, { useReducer, useContext, createContext } from "react";

export const StateContext = createContext();

export const State = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
