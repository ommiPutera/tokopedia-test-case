import styled from '@emotion/styled'
import { PlusCircleIcon } from '@heroicons/react/solid';

function NewCollectionCard({ onClick, onCreate }) {
  const Form = () => {

    return (
      <>
        <InputTitleCollection
          type="text"
          autofocus
          placeholder="Create Title.."
        />
        <ButtonRemove>
          Remove
        </ButtonRemove>
      </>
    )
  }

  return (
    <Container>
      <WrapperCard onClick={onClick}>
        {
          !onCreate
          &&
          <PlusCircleIcon style={{ width: '40px', height: "40px", color: '#fff' }} />
        }
      </WrapperCard>

      {
        onCreate
        &&
        <Form />
      }
    </Container>
  )
}

const InputTitleCollection = styled.input`
  position: absolute;
  bottom: 0px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #2e2e2e;
  width: 76%;
  color: #fff;
  font-size: 10px;
`

const ButtonRemove = styled.button`
  position: absolute;
  bottom: -35px;
  text-align: center;
  padding: 5px 8px;
  border: none;
  color: #fff;
  width: 96%;
  background-color: red;
  border-radius: 8px;
`

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
    height: 130px;
    width: 100px;
  }
`

export default NewCollectionCard;