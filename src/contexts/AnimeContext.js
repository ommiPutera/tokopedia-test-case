import React from "react";
import { queryAnimeList } from "../graphQL/Queries";
import { animeApi } from "../services/animeApi";
import { handleResponse } from "../utils/handleResponse";

export const AnimeContext = React.createContext();

// function animeReducer(state, action) {
//   switch (action.type) {
//     case 'LOAD': {
//       return { count: state.count + 1 }
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`)
//     }
//   }
// }

const AnimeProvider = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const load = React.useCallback(() => {
    async function fetchData() {
      setLoading(true)
      animeApi
        .get(queryAnimeList, {
          page,
          perPage: 10
        })
        .then(handleResponse)
        .then((items) => {
          setItems(items.data.Page)
          setLoading(false)
        }).catch((err) => {
          alert('Error, check console');
          console.error(err);
        })
    }
    fetchData()
  }, [page])

  React.useEffect(() => {
    load()
  }, [load])

  const value = {
    items,
    loading,
    setPage
  }

  return (
    <AnimeContext.Provider value={value}>
      {props.children}
    </AnimeContext.Provider>
  );
}

export function useAnime() {
  const context = React.useContext(AnimeContext);
  if (context === undefined) {
    throw new Error("useAnime must be used within a AnimeProvider");
  }
  return context;
}

export default React.memo(AnimeProvider);