import React from 'react';
import { useCollection } from '../../../contexts/CollectionContext';
import styled from '@emotion/styled';
import ExistCollectionCard from '../../components/Card/ExistCollectionCard';
import NewCollectionCard from '../../components/Card/NewCollectionCard';
import PopUpRemoveCollection from '../shared/PopUpRemoveCollection';

function List() {
  const {
    data,
    dispatch
  } = useCollection();
  const [showPopUpForm, setShowPopUpForm] = React.useState(false)
  const [showPopUpConfirmation, setShowPopUpConfirmation] = React.useState(false)

  React.useEffect(() => {
    // console.log(data)
  }, [])

  const handleRemoveCollection = ({ idCollection }) => {
    for (let i = 0; i < data?.itemsCollectionList.length; i++) {
      if (data?.itemsCollectionList[i].id === idCollection) {
        setShowPopUpConfirmation(true)
        const arrList = [...data.itemsCollectionList]
        arrList.splice(i, 1)
        const items = [...arrList]
        console.log(items)
        // localStorage.setItem('itemsCollectionList', JSON.stringify(items));
        // dispatch({ type: 'removeCollection', itemsCollectionList: [...items] })
      }
    }
  }

  return (
    <Container>
      <WrapperCard>
        <NewCollectionCard onClick={() => setShowPopUpForm(true)} />
        {
          data?.itemsCollectionList
          &&
          data?.itemsCollectionList.map((item, index) => (
            <ExistCollectionCard
              item={item}
              to={`/collection/detail/${item.id}`}
              onRemove={() => handleRemoveCollection({ idCollection: item.id })}
              coverImage={item?.animes[0]?.coverImage.medium}
              title={item.collectionName}
              amount={item.animes.length}
              withRemoveBtn
            />
          ))
        }
      </WrapperCard>
      <PopUpRemoveCollection
        showPopUpConfirmation={showPopUpConfirmation}
        setShowPopUpConfirmation={setShowPopUpConfirmation}
      />
      {
        showPopUpForm
        &&
        <NewCollectionCard
          onCreate
          showPopUpForm={showPopUpForm}
          setShowPopUpForm={setShowPopUpForm}
        />
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


const WrapperCard = styled.div`
  display: grid;
  column-gap: 12px;
  row-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0 10px;
  
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