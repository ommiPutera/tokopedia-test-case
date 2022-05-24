import styled from '@emotion/styled';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';
import { useCollection } from '../../../contexts/CollectionContext';
import AnimeCard from '../../components/Card/AnimeCard';
import PopUpRemoveCollection from '../shared/PopUpRemoveCollection';

function Detail() {
  const {
    data,
    dispatch
  } = useCollection();

  const [items, setItems] = React.useState([])
  const [itemsDetail, setItemsDetail] = React.useState([])
  const [agreeToRemove, setAgreeToRemove] = React.useState(false)
  const [showPopUpConfirmation, setShowPopUpConfirmation] = React.useState(false)
  const [openSnackbar] = useSnackbar({
    style: {
      backgroundColor: "red"
    }
  })

  let params = useParams();
  let id = params.id;

  const removeAnime = () => {
    localStorage.setItem('itemsCollectionList', JSON.stringify(items));
    localStorage.setItem('itemsCollectionDetail', JSON.stringify(items));
    dispatch({ type: 'removeAnime', itemsCollectionList: [...items], itemsCollectionDetail: [...itemsDetail] })
    setShowPopUpConfirmation(false)
    openSnackbar('Anime has been deleted successfully.')
  }

  const handleRemoveAnime = ({ idAnime }) => {
    for (let i = 0; i < data?.itemsCollectionList.length; i++) {
      if (data?.itemsCollectionList[i].id === id) {
        setShowPopUpConfirmation(true)
        const arrList = [...data.itemsCollectionList]
        const arrDetail = [...data.itemsCollectionDetail]
        const indexAnime = arrList[i].animes.findIndex(val => val.id === idAnime)
        arrList[i].animes.splice(indexAnime, 1)
        arrDetail.splice(indexAnime, 1)
        const items = [...arrList]
        const itemsDetail = [...arrDetail]
        setItems(items)
        setItemsDetail(itemsDetail)
      }
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <h1>{data?.collectionName}</h1>
      <Wrapper>
        {
          data.itemsCollectionDetail
          &&
          data.itemsCollectionDetail.map((item, index) => (
            <AnimeCard
              withRemoveBtn
              onRemove={() => handleRemoveAnime({ idAnime: item.id })}
              to={`/detail/${item.id}`}
              key={item.id}
              item={item}
            />
          ))
        }
      </Wrapper>
      {
        !data.itemsCollectionDetail.length
          ?
          <EmptyCollection>
            <h3>No collection yet ...</h3>
            <p>Looks like you already have a collection, so let's add your favorite anime to the collection!</p>
            <Link to='/' className="link">
              <p>Home - Anime Test Case</p>
            </Link>
          </EmptyCollection>
          : null
      }

      <PopUpRemoveCollection
        message={`Are you sure you want to delete this anime from ${data?.collectionName} collection ?`}
        onClick={() => {
          setAgreeToRemove(true)
          if (agreeToRemove && items) removeAnime()
        }}
        showPopUpConfirmation={showPopUpConfirmation}
        setShowPopUpConfirmation={setShowPopUpConfirmation}
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

const EmptyCollection = styled.div`
  padding: 20vh 0;
  text-align: center;

  & p {
    font-size: 13px;
    line-height: 1.4em;
    margin-top: 10px;
  }

  .link {
    color: red;
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

export default Detail