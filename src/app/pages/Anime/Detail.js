import React, { Suspense } from 'react'
import { useParams } from "react-router-dom";
import styled from '@emotion/styled';
import { useAnime } from '../../../contexts/AnimeContext';
import { queryAnimeDetail } from '../../../graphQL/Queries';
import { animeApi } from '../../../services/animeApi';
import { handleResponse } from '../../../utils/handleResponse';
import LoadingIcon from '../../../assets/LoadingIcon'

const AnimeInfo = React.lazy(() => import('./shared/AnimeInfo'));

function Detail() {
  const {
    detail,
    dispatch
  } = useAnime();

  let params = useParams();
  let id = params.id;

  const load = React.useCallback(() => {
    function fetchData() {
      animeApi
        .get(queryAnimeDetail, {
          id: id
        })
        .then(handleResponse)
        .then(res => dispatch({
          type: 'load',
          itemsDetail: res.data.Media
        }))
        .catch((err) => {
          alert('Error, check console');
          console.error(err);
        })
    }
    fetchData()
  }, [dispatch, id])

  React.useEffect(() => {
    load()
  }, [load])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      {
        detail
          ?
          <>
            <WrapperImage>
              <img src={detail?.bannerImage || '/assets/no_image_available.png'} alt='' />
            </WrapperImage>
            <Suspense fallback={'Loading..'}>
              <AnimeInfo detail={detail} />
            </Suspense>
          </>
          : <LoadingIcon />
      }
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  
  img {
    height: 140px;
    width: 100%;
    object-fit: cover;
  }
  
  h2 {
    margin: 15px 20px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    img {
      height: 150px;
    }
  }
`

const WrapperImage = styled.div`
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(to top,#181818 0,rgba(23,23,23,.987) 1.62%,rgba(23,23,23,.951) 3.1%,rgba(23,23,23,.896) 4.5%,rgba(23,23,23,.825) 5.8%,rgba(23,23,23,.741) 7.06%,rgba(23,23,23,.648) 8.24%,rgba(23,23,23,.55) 9.42%,rgba(23,23,23,.45) 10.58%,rgba(23,23,23,.352) 11.76%,rgba(23,23,23,.259) 12.94%,rgba(23,23,23,.175) 14.2%,rgba(23,23,23,.104) 15.5%,rgba(23,23,23,.049) 16.9%,rgba(23,23,23,.013) 18.38%,rgba(23,23,23,0) 20%);
  }
`

export default Detail