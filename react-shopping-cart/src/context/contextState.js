import { React, useReducer, createContext } from "react"; // UseReducer is an alternative to useState. Dispatchs instead of callbacks. And is not as complex when multiple sub-values depend on it.
import { reducer, initialState } from "./reducerState";

export const ContextState = createContext(); // createContext reads the current context value closest Provider above in the tree. Is given a default value.

const StateProvider = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartItems, account, billing, payment, currentStep } = state;
  return (
    <ContextState.Provider // The provider accepts values and override and force always a re-render values deeper within the tree.
      value={{
        cartItems: cartItems,
        account: account,
        billing: billing,
        payment: payment,
        dispatch: dispatch,
        currentStep: currentStep,
      }}
    >
      {children}
    </ContextState.Provider>
  );
};

export default StateProvider;
