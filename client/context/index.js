import { useReducer, createContext, useEffect } from "react";

const initState = {
  user: null,
};
// create context
const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

//context provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initState);
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, AuthProvider };
