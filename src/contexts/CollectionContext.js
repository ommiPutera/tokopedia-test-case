import React from "react";

export const CollectionContext = React.createContext();

function collectionReducer(state, action) {
  switch (action.type) {
    case 'load': {
      return {
        ...state,
        itemsDetail: action.itemsDetail
      }
    }
    case 'insertIntoCollection': {
      return {
        ...state,
        itemsCollectionList: []
      }
    }
    case 'createCollection': {
      return {
        ...state,
        itemsCollectionList: action.itemsCollectionList
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const CollectionProvider = (props) => {
  const [data, dispatch] = React.useReducer(collectionReducer, {
    itemsCollectionList: null,
    itemsDetail: null
  }, () => {
    const localData = localStorage.getItem('itemsCollectionList');
    return localData ? JSON.parse(localData) : [];
  })

  React.useEffect(() => {
    localStorage.setItem('itemsCollectionList', JSON.stringify(data));
  }, [data]);

  const value = {
    data,
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