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
    case 'insertIntoCollections': {
      return {
        ...state,
        itemsCollectionList: action.itemsCollectionList
      }
    }
    case 'removeCollection': {
      return {
        ...state,
        itemsCollectionList: action.itemsCollectionList
      }
    }
    case 'editCollection': {
      return {
        ...state,
        itemsCollectionList: action.itemsCollectionList
      }
    }
    case 'createCollection': {
      return {
        ...state,
        itemsCollectionList: action.itemsCollectionList,
      }
    }
    case 'loadCollectionDetail': {
      return {
        ...state,
        itemsCollectionDetail: action.itemsCollectionDetail,
        collectionName: action.collectionName,
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
    itemsCollectionDetail: null,
    itemsDetail: null,
    collectionName: '',
  }, () => {
    const localData = localStorage.getItem('itemsCollectionList');
    return localData ? JSON.parse(localData) : [];
  })

  React.useEffect(() => {
    if (data?.itemsCollectionList) {
      localStorage.setItem('itemsCollectionList', JSON.stringify(data));
    }
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