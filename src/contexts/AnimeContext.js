import React, { createContext, useReducer, useEffect } from "react";
import AnimeReducer from "../reducers/AnimeReducer";

export const AnimeContext = createContext();

const AnimeContextProvider = (props) => {
  const [animeList, dispatch] = useReducer(AnimeReducer, [], () => {
    const localData = localStorage.getItem('pokemons');
    return localData ? JSON.parse(localData) : [];
  })

  useEffect(() => {
    localStorage.setItem('anime_list', JSON.stringify(animeList));
  }, [animeList]);

  return (
    <AnimeContext.Provider value={{ animeList, dispatch }}>
      {props.children}
    </AnimeContext.Provider>
  );
}

export default React.memo(AnimeContextProvider);