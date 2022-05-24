import React from 'react';
import { useCollection } from '../../../contexts/CollectionContext';
import styled from '@emotion/styled';
import ExistCollectionCard from '../../components/Card/ExistCollectionCard';
import NewCollectionCard from '../../components/Card/NewCollectionCard';
import PopUpRemoveCollection from '../shared/PopUpRemoveCollection';
import { useSnackbar } from 'react-simple-snackbar';
import PopUpInputCollection from '../shared/PopUpInputCollection';

function List() {
  const {
    data,
    dispatch
  } = useCollection();

  const [showPopUpCreate, setShowPopUpCreate] = React.useState(false)
  const [showPopUpEdit, setShowPopUpEdit] = React.useState(false)
  const [agreeToRemove, setAgreeToRemove] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [idCollectiononEdit, setIdCollectiononEdit] = React.useState('')
  const [initialValue, setInitialValue] = React.useState([])
  const [showPopUpConfirmation, setShowPopUpConfirmation] = React.useState(false)
  const [openSnackbar] = useSnackbar({
    style: {
      backgroundColor: "green"
    }
  })

  const removeCollection = () => {
    localStorage.setItem('itemsCollectionList', JSON.stringify(items));
    dispatch({ type: 'removeCollection', itemsCollectionList: [...items] })
    setShowPopUpConfirmation(false)
    openSnackbar('Collection has been deleted successfully.')
  }

  const handleEditCollection = ({ newCollectionName }) => {
    for (let i = 0; i < data?.itemsCollectionList.length; i++) {
      console.log(idCollectiononEdit, newCollectionName)
      if (data?.itemsCollectionList[i].id === idCollectiononEdit) {
        setInitialValue(data.itemsCollectionList[i])
        const arrList = [...data.itemsCollectionList]
        arrList[i].collectionName = newCollectionName
        const newItems = [...arrList]
        localStorage.setItem('itemsCollectionList', JSON.stringify(newItems));
        setShowPopUpEdit(false)
        dispatch({ type: 'editCollection', itemsCollectionList: [...newItems] })
        openSnackbar('Collection has been edited successfully.')
      }
    }
  }

  const handleRemoveCollection = ({ idCollection }) => {
    for (let i = 0; i < data?.itemsCollectionList.length; i++) {
      if (data?.itemsCollectionList[i].id === idCollection) {
        setShowPopUpConfirmation(true)
        const arrList = [...data.itemsCollectionList]
        arrList.splice(i, 1)
        const items = [...arrList]
        setItems(items)
      }
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <h1>Anime Collections</h1>
      <WrapperCard>
        <NewCollectionCard onClick={() => setShowPopUpCreate(true)} />
        {
          data?.itemsCollectionList
          &&
          data?.itemsCollectionList.map((item, index) => (
            <ExistCollectionCard
              key={item.id}
              onRedirect={() => dispatch({
                type: 'loadCollectionDetail',
                itemsCollectionDetail: item.animes,
                collectionName: item.collectionName
              })}
              to={`/collection/detail/${item.id}`}
              onRemove={() => handleRemoveCollection({ idCollection: item.id })}
              onEdit={() => {
                if (initialValue) setShowPopUpEdit(true)
                setIdCollectiononEdit(item.id)
              }}
              coverImage={item?.animes[0]?.coverImage.medium}
              title={item.collectionName}
              amount={item.animes.length}
              withRemoveBtn
              withEditBtn
            />
          ))
        }
      </WrapperCard>
      <PopUpRemoveCollection
        onClick={() => {
          setAgreeToRemove(true)
          if (agreeToRemove && items) removeCollection()
        }}
        showPopUpConfirmation={showPopUpConfirmation}
        setShowPopUpConfirmation={setShowPopUpConfirmation}
      />
      <PopUpInputCollection
        onSubmbit={(data) => handleEditCollection({ newCollectionName: data.collectionName })}
        editAction
        initialValue={initialValue}
        propsEdit={{
          btn: 'Edit',
          popUptitle: 'Edit Collection Name',
          popUpSubtitle: 'Input new title for this Collection',
        }}
        showPopUpForm={showPopUpEdit}
        setShowPopUpForm={setShowPopUpEdit}
      />
      <NewCollectionCard
        onCreate
        showPopUpForm={showPopUpCreate}
        setShowPopUpForm={setShowPopUpCreate}
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

const WrapperCard = styled.div`
  display: grid;
  column-gap: 12px;
  row-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0 auto;
  
  & p {
    margin: 0 0 30px 0 ;
    font-size: 13.5px;
  }

  @media (max-width: 768px) {
    row-gap: 12px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export default List