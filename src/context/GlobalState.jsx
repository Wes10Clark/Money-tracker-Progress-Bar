import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  logs: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function addLog(log) {
    dispatch({
      type: "ADD_LOG",
      payload: log,
    });
  }
  function deleteLog(id) {
    dispatch({
      type: "DELETE_LOG",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider value={{ logs: state.logs, addLog, deleteLog }}>
      {children}
    </GlobalContext.Provider>
  );
};
