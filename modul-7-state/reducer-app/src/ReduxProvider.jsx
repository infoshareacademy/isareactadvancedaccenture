import { createContext, useReducer } from "react";

export const ReduxContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export const ReduxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <ReduxContext.Provider value={[state, dispatch]}>
      {children}
    </ReduxContext.Provider>
  );
};
