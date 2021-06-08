import { React, useReducer, createContext } from "react";
import { reducer, initialState } from "./state-reducer";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { cartItems, account, billing, payment } = state;
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
