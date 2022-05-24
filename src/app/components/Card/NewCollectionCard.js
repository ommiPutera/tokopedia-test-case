import styled from '@emotion/styled'
import { PlusCircleIcon } from '@heroicons/react/solid';
import PopUpInputCollection from '../../pages/shared/PopUpInputCollection';

function NewCollectionCard({
  onClick,
  showPopUpForm,
  setShowPopUpForm,
  onCreate
}) {
  return (
    <Container>
      {
        !onCreate
        &&
        <>
          <WrapperCard onClick={onClick}>
            <PlusCircleIcon style={{ width: '40px', height: "40px", color: '#fff' }} />
          </WrapperCard>
          <p>New Collection</p>
        </>
      }

      {
        onCreate
        &&
        <PopUpInputCollection
          showPopUpForm={showPopUpForm}
          setShowPopUpForm={setShowPopUpForm}
        />
      }
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  & p {
    text-align: left;
    line-height: 1.1;
    padding: 10px 6px;
    margin: 0 !important;
    font-size: 12px;
    z-index: 5;
  }
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