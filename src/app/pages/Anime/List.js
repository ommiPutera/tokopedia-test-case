import styled from '@emotion/styled';
import React from 'react'
import { queryAnimeList } from '../../../graphQL/Queries';
import { animeApi } from '../../../services/animeApi';
import { handleResponse } from '../../../utils/handleResponse';
import Pagination from '../../components/Pagination'
import Card from '../../components/Card'
import Show from '../../components/Pagination/show';
import LoadingCard from '../../components/skeleton/LoadingCard';

function List() {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState(null);
  const [perPage] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const load = React.useCallback(() => {
    setLoading(true)
    animeApi
      .list(queryAnimeList, {
        page,
        perPage
      })
      .then(handleResponse)
      .then((items) => {
        setItems(items.data.Page)
        setLoading(false)
      })
      .catch((err) => {
        alert('Error, check console');
        console.error(err);
      })
  }, [page, perPage])

  React.useEffect(() => {
    load()
  }, [load])

  return (
    <>
      <Container>
        <h1>Serial Anime</h1>
        <Wrapper>
          {
            !loading && items
              ?
              items.media.map((item, index) => (
                <Card key={item.id} item={item} />
              ))
              : <LoadingCard count={10} />
          }
        </Wrapper>

        {
          !loading && items
          &&
          <>
            <Show
              total={items.pageInfo.total}
              currentPage={items.pageInfo.currentPage}
              show={items.pageInfo.perPage}
            />
            <Pagination
              total={items.pageInfo.total}
              currentPage={items.pageInfo.currentPage}
              limit={items.pageInfo.perPage}
              onChangePage={page => setPage(page)}
            />
          </>
        }
      </Container>
    </>
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
  row-gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export default List