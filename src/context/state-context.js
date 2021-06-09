import { React, useReducer, createContext } from "react";
import { reducer, initialState } from "./state-reducer";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartItems, account, billing, payment } = state;
  console.log(cartItems, account, billing, payment);
  return (
    // <StateContext.Provider value={[state, dispatch]}>
    <StateContext.Provider
      value={{
        cartItems: cartItems,
        account: account,
        billing: billing,
        payment: payment,
        dispatch: dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
