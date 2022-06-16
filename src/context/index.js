import { useState, useContext } from "react";
import { createContext } from "react";
import AppRouter from "../AppRouter";

const Context = createContext();

function ContextProvider() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Context.Provider value={{ loggedIn, setLoggedIn }}>
      <AppRouter />
    </Context.Provider>
  );
}

const useContextSelector = () => useContext(Context);

export { ContextProvider, useContextSelector };
