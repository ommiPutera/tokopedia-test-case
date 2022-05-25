import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCollection } from '../../../contexts/CollectionContext';

function CollectionInfo({ exsitInCollection, to }) {
  const {
    data,
    dispatch
  } = useCollection();


  React.useEffect(() => {
    console.log(exsitInCollection);
    dispatch({
      type: 'loadCollectionDetail',
      itemsCollectionDetail: exsitInCollection?.animes,
      collectionName: exsitInCollection?.collectionName
    })
  }, [dispatch])

  return (
    <>
      {
        exsitInCollection.length
          ?
          exsitInCollection.map(item => (
            <Link key={item.id} to={`/collection/detail/${item.id}`} className="link">
              <BulkCollections>
                <p>{item.collectionName}</p>
              </BulkCollections>
            </Link>
          ))
          : null
      }
    </>
  )
}

const BulkCollections = styled.button(props => ({
  padding: '8px 15px',
  marginRight: '10px',
  borderRadius: '5px',
  backgroundColor: '#0e86d4',
  border: 'none',
  outline: 'none',
  fontWeight: 'bold',
  fontSize: '13px',
  color: '#fff',
}))

export default CollectionInfo