import styled from '@emotion/styled';
import React from 'react'
import Pagination from '../../components/Pagination'
import AnimeCard from '../../components/Card/AnimeCard'
import Show from '../../components/Pagination/show';
import LoadingCard from '../../components/skeleton/LoadingCard';
import { Link } from "react-router-dom";
import { useAnime } from '../../../contexts/AnimeContext';
import { queryAnimeList } from '../../../graphQL/Queries';
import { animeApi } from '../../../services/animeApi';
import { handleResponse } from '../../../utils/handleResponse';

function List() {
  const {
    list,
    page,
    dispatch
  } = useAnime();

  const load = React.useCallback(() => {
    function fetchData() {
      animeApi
        .get(queryAnimeList, {
          page: page,
          perPage: 10
        })
        .then(handleResponse)
        .then(res => dispatch({
          type: 'load',
          itemsList: res.data.Page,
          page: page
        }))
        .catch((err) => {
          alert('Error, check console');
          console.error(err);
        })
    }
    fetchData()
  }, [dispatch, page])

  React.useEffect(() => {
    load()
    window.scrollTo(0, 0)
  }, [load])

  return (
    <Container>
      <h1>Serial Anime</h1>
      <Wrapper>
        {
          list
            ?
            list.media.map((item, index) => (
              <Link to={`/detail/${item.id}`} key={item.id} className="link">
                <AnimeCard item={item} />
              </Link>
            ))
            : <LoadingCard count={10} />
        }
      </Wrapper>
      <Show
        total={list?.pageInfo.total || 0}
        currentPage={list?.pageInfo.currentPage || 0}
        show={list?.pageInfo.perPage || 0}
      />
      <Pagination
        total={list?.pageInfo.total || 0}
        currentPage={list?.pageInfo.currentPage || 0}
        limit={list?.pageInfo.perPage || 0}
        onChangePage={page => {
          dispatch({ type: 'load', page: page })
          localStorage.setItem('page', page);
        }}
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 100px 10px;
  
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export default List;