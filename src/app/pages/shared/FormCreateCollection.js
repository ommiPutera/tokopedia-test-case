import styled from '@emotion/styled'
import React from 'react'
import { useSnackbar } from 'react-simple-snackbar'
import LoadingIcon from '../../../assets/LoadingIcon';
import { useCollection } from '../../../contexts/CollectionContext';
import ExistCollectionCard from '../../components/Card/ExistCollectionCard';
import NewCollectionCard from '../../components/Card/NewCollectionCard';

function FormCreateCollection({ showPopUp, setShowPopUp, setCreateCollection }) {
  const [showPopUpForm, setShowPopUpForm] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [openSnackbar] = useSnackbar({
    position: 'bottom-center',
    style: {
      backgroundColor: '#0a9400',
      marginBottom: '50px'
    }
  })

  const {
    data,
  } = useCollection();

  const onInsertToCollection = ({ idCollection, collectionName }) => {
    console.log('here')
    setShowPopUp(false)
    // for (let i = 0; i < data?.itemsCollectionList.length; i++) {
    //   if (data?.itemsCollectionList[i].id === idCollection) {
    //     const items = [...data?.itemsCollectionList]
    //     items[i].animes = [...data?.itemsCollectionList[i].animes, data?.itemsDetail]
    //     localStorage.setItem('itemsCollectionList', JSON.stringify(items));
    //     dispatch({ type: 'insertIntoCollections', itemsCollectionList: [...items] })
    //     setIsSuccess(true)
    //   }
    // }

    setTimeout(() => {
      setIsSuccess(false)
      setCreateCollection(false)
      openSnackbar(`Anime has been added to ${collectionName} collection.`)
    }, 200)
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
                  coverImage={item?.animes[0]?.coverImage?.medium || ''}
                  idCollection={item.id}
                  amount={item.animes.length}
                  onClick={() => onInsertToCollection({ idCollection: item.id, collectionName: item.collectionName })}
                  collectionName={item.collectionName}
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
  margin-top: 60px;
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