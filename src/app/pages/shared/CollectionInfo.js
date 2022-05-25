import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

function CollectionInfo({ exsitInCollection }) {
  return (
    <Link>
      <BulkCollections>
        {
          exsitInCollection.length
          &&
          exsitInCollection.map(name => (
            <p>{name}</p>
          ))
        }
      </BulkCollections>
    </Link>
  )
}

const BulkCollections = styled.button(props => ({
  padding: '5px 10px',
  borderRadius: '5px',
  margin: '20px 0',
  backgroundColor: 'rgba(255, 0, 0, 0.8)',
  border: 'none',
  outline: 'none',
  fontSize: '12px',
  color: '#fff',
}))

export default CollectionInfo