import { /* React, */ /*  useReducer, */ createContext } from "react";
// import reducer, { initialState } from "./state-reducer";

const StateContext = createContext({
  cartItems: [],
});

// const StateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <StateContext.Provider value={[state, dispatch]}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export default StateProvider;
export default StateContext;
