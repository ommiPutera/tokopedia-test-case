import React from "react";

export const AnimeContext = React.createContext();

function animeReducer(state, action) {
  switch (action.type) {
    case 'load': {
      return {
        ...state,
        itemsList: action.itemsList,
        itemsDetail: action.itemsDetail,
        page: localStorage.getItem('page')
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const AnimeProvider = (props) => {
  const [data, dispatch] = React.useReducer(animeReducer, {
    items: null,
    page: 1,
  })

  const value = {
    list: data.itemsList,
    detail: data.itemsDetail,
    page: data.page,
    dispatch
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