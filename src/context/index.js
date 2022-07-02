import { useState, useContext } from "react";
import { createContext } from "react";
import AppRouter from "../AppRouter";

const Context = createContext();

function ContextProvider() {
  const [collectionLoc, setCollectionLoc] = useState({});
  const [lateCollectionLoc, setLateCollectionLoc] = useState({});

  const locKeys = Object.freeze({
    COLLECTION: "collection",
    LATE_COLLECTION: "late-collection",
  });

  const getFromLocalStorage = () => {
    const coll = localStorage.getItem(locKeys.COLLECTION);
    const lateColl = localStorage.getItem(locKeys.LATE_COLLECTION);

    return {
      collection: JSON.parse(coll),
      lateCollection: JSON.parse(lateColl),
    };
  };

  const setLocalStorage = (collection, latecollection) => {
    localStorage.setItem(locKeys.COLLECTION, JSON.stringify(collection));
    localStorage.setItem(
      locKeys.LATE_COLLECTION,
      JSON.stringify(latecollection)
    );
  };

  return (
    <Context.Provider value={{ locKeys, getFromLocalStorage, setLocalStorage }}>
      <AppRouter />
    </Context.Provider>
  );
}

const useContextSelector = () => useContext(Context);

export { ContextProvider, useContextSelector };
