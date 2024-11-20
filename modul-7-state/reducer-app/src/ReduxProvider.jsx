import { createContext, useReducer } from "react";

export const ReduxContext = createContext(null);

export const ReduxProvider = ({ children }) => {
  return <ReduxContext.Provider value={null}>{children}</ReduxContext.Provider>;
};
