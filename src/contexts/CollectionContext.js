import React from "react";

export const CollectionContext = React.createContext();

function collectionReducer(state, action) {
  switch (action.type) {
    case 'addToCollection': {
      return {
        ...state,
        itemsCollectionList: action.itemsCollectionList,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const CollectionProvider = (props) => {
  const [data, dispatch] = React.useReducer(collectionReducer, {
    itemsCollectionList: null
  })

  const value = {
    list: data.itemsCollectionList,
    dispatch
  }

  return (
    <CollectionContext.Provider value={value}>
      {props.children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const context = React.useContext(CollectionContext);
  if (context === undefined) {
    throw new Error("useCollection must be used within a CollectionContext");
  }
  return context;
}

export default React.memo(CollectionProvider);