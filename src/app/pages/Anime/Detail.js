import React from 'react'
import { useParams } from "react-router-dom";
import styled from '@emotion/styled';
import { useAnime } from '../../../contexts/AnimeContext';
import { queryAnimeDetail } from '../../../graphQL/Queries';
import { animeApi } from '../../../services/animeApi';
import { handleResponse } from '../../../utils/handleResponse';
import LoadingIcon from '../../../assets/LoadingIcon'
import CollectionInfo from './shared/CollectionInfo';
import { useCollection } from '../../../contexts/CollectionContext';
import AnimeInfo from './shared/AnimeInfo';
import PopUpCreateCollection from './shared/PopUpCreateCollection';
import FormCreateCollection from './shared/FormCreateCollection';

function Detail() {
  const {
    detail,
    dispatch: dispatchAnime
  } = useAnime();

  const {
    dispatch: dispatchCollection
  } = useCollection();

  const [showPopUp, setShowPopUP] = React.useState(false)
  const [createCollection, setCreateCollection] = React.useState(false)

  let params = useParams();
  let id = params.id;

  const load = React.useCallback(() => {
    function fetchData() {
      animeApi
        .get(queryAnimeDetail, {
          id: id
        })
        .then(handleResponse)
        .then(res => {
          dispatchAnime({ type: 'load', itemsDetail: res.data.Media })
          dispatchCollection({ type: 'load', itemsDetail: res.data.Media })
        })
        .catch((err) => {
          alert('Error, check console');
          console.error(err);
        })
    }
    fetchData()
  }, [dispatchAnime, dispatchCollection, id])

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
            <WrapperInformation>
              <AnimeInfo detail={detail} />
              <CollectionInfo />
            </WrapperInformation>
          </>
          : <LoadingIcon />
      }

      <AddToCollection onClick={() => {
        setShowPopUP(true)

        // if (!collectionList) {
        //   dispatchCollection({
        //     type: 'addToCollection',
        //   })
        // } else {

        // }
      }}
      >
        Add to collection
      </AddToCollection>

      <PopUpCreateCollection
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUP}
        createCollection={createCollection}
        setCreateCollection={setCreateCollection}
      />

    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const WrapperInformation = styled.div`
  position: relative;
  margin: 0 20px;
`

const WrapperImage = styled.div`
  position: relative;

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: rgb(24,24,24);
    background: linear-gradient(90deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0.8102591378348214) 41%, rgba(255,255,255,0) 100%);
  }

  @media (max-width: 768px) {
    img {
      height: 200px;
    }

    ::after {
      background: rgb(24,24,24);
      background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0.7262255243894433) 24%, rgba(255,255,255,0) 100%);
    }
  }
`

const AddToCollection = styled.button`
  margin: 50px 20px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: red;
  padding: 17px 30px;
  
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    margin: 0;
    width: 100%;
  }
`

export default Detail