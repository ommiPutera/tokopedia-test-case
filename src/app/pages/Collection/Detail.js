import styled from '@emotion/styled';
import React from 'react'
import { Link } from "react-router-dom";
import { useCollection } from '../../../contexts/CollectionContext';
import AnimeCard from '../../components/Card/AnimeCard';

function Detail() {
  const {
    data
  } = useCollection();

  return (
    <Container>
      <h1>{data?.collectionName}</h1>
      <Wrapper>
        {
          data?.itemsCollectionDetail
          &&
          data.itemsCollectionDetail.map((item, index) => (
            <Link to={`/detail/${item.id}`} key={item.id} className="link">
              <AnimeCard withRemoveBtn item={item} />
            </Link>
          ))
        }
      </Wrapper>
      {
        !data?.itemsCollectionDetail
        &&
        <EmptyCollection>
          <h4>No collection yet ...</h4>
        </EmptyCollection>
      }
    </Container>
  )
}

const Container = styled.div`
  margin: 100px 10px;
  
  h1 {
    margin: 30px 0;
  }
`

const EmptyCollection = styled.div`
  padding: 32vh 0;
  text-align: center;
`

const Wrapper = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  
  @media (max-width: 768px) {
    row-gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export default Detail