import styled from '@emotion/styled';
import React from 'react'
import Pagination from '../../components/Pagination'
import Card from '../../components/Card'
import Show from '../../components/Pagination/show';
import LoadingCard from '../../components/skeleton/LoadingCard';
import { Link } from "react-router-dom";
import { useAnime } from '../../../contexts/AnimeContext';

function List() {
  const {
    items,
    loading,
    setPage
  } = useAnime();

  console.log(items)

  return (
    <Container>
      <h1>Serial Anime</h1>
      <Wrapper>
        {
          !loading
            ?
            items?.media.map((item, index) => (
              <Link to={`/detail/${item.id}`} key={item.id} className="link">
                <Card item={item} />
              </Link>
            ))
            : <LoadingCard count={10} />
        }
      </Wrapper>
      <Show
        total={items?.pageInfo.total || 0}
        currentPage={items?.pageInfo.currentPage || 0}
        show={items?.pageInfo.perPage || 0}
      />
      <Pagination
        total={items?.pageInfo.total || 0}
        currentPage={items?.pageInfo.currentPage || 0}
        limit={items?.pageInfo.perPage || 0}
        onChangePage={page => setPage(page)}
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 10px;
  
  h1 {
    margin: 30px 0;
  }
`

const Wrapper = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  
  @media (max-width: 768px) {
    row-gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export default List;