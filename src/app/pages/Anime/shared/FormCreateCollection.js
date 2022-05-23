import styled from '@emotion/styled'
import React from 'react'
import ExistCollectionCard from '../../../components/Card/ExistCollectionCard';
import NewCollectionCard from '../../../components/Card/NewCollectionCard';

function FormCreateCollection({ showPopUp, setShowPopUp, setCreateCollection }) {
  const [isInputTitle, setIsInputTitle] = React.useState(false)
  const [showPopUpForm, setShowPopUpForm] = React.useState(false)

  const createCollection = () => {

  }

  return (
    <Body>
      <WrapperCard>
        <NewCollectionCard onClick={() => {
          setShowPopUpForm(true)
        }} />
        <ExistCollectionCard
          coverImage="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx30-1Ro1NFFg28bu.jpg"
          title="Neon Genesis Evangelion"
        />

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
    </Body>
  )
}

const Body = styled.div`
  position: relative;
`

const WrapperCard = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0 20px;
  
  & p {
    margin: 0 0 30px 0 ;
    font-size: 13.5px;
  }

  @media (max-width: 768px) {
    row-gap: 60px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export default FormCreateCollection;