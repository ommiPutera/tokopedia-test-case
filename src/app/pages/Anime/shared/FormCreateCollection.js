import styled from '@emotion/styled'
import React from 'react'
import LoadingIcon from '../../../../assets/LoadingIcon';
import { useCollection } from '../../../../contexts/CollectionContext';
import ExistCollectionCard from '../../../components/Card/ExistCollectionCard';
import NewCollectionCard from '../../../components/Card/NewCollectionCard';

function FormCreateCollection({ showPopUp, setShowPopUp, setCreateCollection }) {
  const [showPopUpForm, setShowPopUpForm] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const {
    data,
    dispatch,
  } = useCollection();

  const onInsertToCollection = () => {
    for (let i = 0; i < data?.itemsCollectionList.length; i++) {
      const items = [...data?.itemsCollectionList]
      items[i].animes = [...data?.itemsCollectionList[i].animes, data?.itemsDetail]
      localStorage.setItem('itemsCollectionList', JSON.stringify(items));
      dispatch({ type: 'insertIntoCollections', itemsCollectionList: [...items] })
      setIsSuccess(true)
    }
    setTimeout(() => {
      setIsSuccess(false)
    }, 1000)
  }

  return (
    <Body>
      {
        !isSuccess
          ?
          <WrapperCard>
            <NewCollectionCard onClick={() => setShowPopUpForm(true)} />
            {
              data?.itemsCollectionList
              &&
              data?.itemsCollectionList.map((item) => (
                <ExistCollectionCard
                  disabled={Boolean(item.animes.find(val => val.id === data?.itemsDetail.id))}
                  key={item.id}
                  onClick={() => onInsertToCollection({ idCollection: item.id })}
                  coverImage="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx30-1Ro1NFFg28bu.jpg"
                  title={item.collectionName}
                />
              ))
            }

            {
              showPopUpForm
              &&
              <NewCollectionCard
                onCreate
                showPopUp={showPopUp}
                setShowPopUp={setShowPopUp}
                showPopUpForm={showPopUpForm}
                setShowPopUpForm={setShowPopUpForm}
              />
            }
          </WrapperCard>
          : <LoadingIcon />
      }
    </Body>
  )
}

const Body = styled.div`
  position: relative;
`

const WrapperCard = styled.div`
  display: grid;
  column-gap: 12px;
  row-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0 20px;
  
  & p {
    margin: 0 0 30px 0 ;
    font-size: 13.5px;
  }

  @media (max-width: 768px) {
    row-gap: 12px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export default FormCreateCollection;