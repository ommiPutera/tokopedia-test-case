import styled from '@emotion/styled'
import { PlusCircleIcon } from '@heroicons/react/solid';
import PopUpInputCollection from '../../pages/Anime/shared/PopUpInputCollection';

function NewCollectionCard({
  onClick,
  showPopUp,
  setShowPopUp,
  showPopUpForm,
  setShowPopUpForm,
  onCreate
}) {
  const Form = () => {

    return (
      <>
        <PopUpInputCollection />
      </>
    )
  }

  return (
    <Container>
      {
        !onCreate
        &&
        <WrapperCard onClick={onClick}>
          <PlusCircleIcon style={{ width: '40px', height: "40px", color: '#fff' }} />
        </WrapperCard>
      }

      {
        onCreate
        &&
        <PopUpInputCollection
          setShowPopUp={setShowPopUp}
          showPopUpForm={showPopUpForm}
          setShowPopUpForm={setShowPopUpForm}
        />
      }
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const WrapperCard = styled.button`
  position: relative;
  overflow: hidden;
  background-color: #2e2e2e;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 105px;
    width: 105px;
  }
`

export default NewCollectionCard;