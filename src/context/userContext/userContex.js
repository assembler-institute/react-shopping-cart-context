  // import React, { createContext, useReducer } from "react";



  // const checkInitialState = {
  //   stepOne: {
  //     completed: false,
  //     name: "",
  //     email: "",
  //     countryCode: "+34",
  //     phone: "",
  //   }
  // }

  // const SUBMITONE = "SUBMITONE";
  // const SUBMITTWO = "SUBMITTWO";
  // const SUBMITTHREE = "SUBMITTHREE";
  // const RESET = "RESET";

  // export const userContext = createContext(checkInitialState)

  // function userReducer(state, action) {
  //   switch (action.type) {
  //     case SUBMITONE: {
  //       return {
  //         ...state,
  //         stepOne: {
  //           ...action.payload,
  //           completed: true,
  //         },
  //       };
  //     }
  //     default: {
  //       return state;
  //     }
  //   }
  // }

  // function UserContextProvider({ children }) {
  //   const [checkState, dispatch] = useReducer(useReducer, checkInitialState);

  //   function submitStepOne(formOne) {
  //     dispatch({
  //       type: SUBMITONE,
  //       payload: formOne,
  //     });
  //   }


  //   return (
  //     <UserContext.Provider
  //       value={{
  //         stepOne: checkState.stepOne,
  //         submitStepOne: submitStepOne,
  //       }}
  //     >
  //       {children}
  //     </UserContext.Provider>
  //   );
  // }

  // export default UserContextProvider;