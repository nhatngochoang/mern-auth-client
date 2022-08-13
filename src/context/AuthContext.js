import { createContext, useReducer } from "react";

const INITIAL_STATE = {
   user: [],
   isLoggedIn: false,
   token: "",
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
   switch (action.type) {
      case "SIGNING":
         return {
            ...state,
            isLoggedIn: true,
         };
      case "GET_TOKEN":
         return {
            ...state,
            token: action.payload,
         };
      case "GET_USER":
         return {
            ...state,
            user: action.payload,
         };
      case "UPDATE_AVATAR":
         return {
            ...state,
            user: [{ avatar: action.payload }],
         };
      case "SIGNOUT":
         return {
            ...state,
            isLoggedIn: false,
            token: "",
            user: [],
         };
      default:
         return state;
   }
};


export const AuthContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

   return (
      <AuthContext.Provider
         value={{
            user: state.user,
            isLoggedIn: state.isLoggedIn,
            token: state.token,
            dispatch,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};