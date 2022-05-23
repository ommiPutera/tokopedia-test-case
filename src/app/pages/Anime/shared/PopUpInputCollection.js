import styled from '@emotion/styled'
import React from 'react'
import PopUp from '../../../components/PopUp/Basic'
import { XIcon } from '@heroicons/react/solid';
import { useCollection } from '../../../../contexts/CollectionContext';

function PopUpInputCollection({ setShowPopUp, showPopUpForm, setShowPopUpForm }) {
  const titleInputRef = React.useRef(null);

  const [inputs, setInputs] = React.useState({
    collectionName: "",
  })

  const {
    data,
    dispatch: dispatchCollection
  } = useCollection();

  React.useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    setShowPopUpForm(false)
    const data = {
      id: Math.random(),
      collectionName: inputs.collectionName,
    }

    let itemsLocalStorage = localStorage.getItem('itemsCollectionList')
    let localData = JSON.parse(itemsLocalStorage)

    console.log(localData)
    dispatchCollection({
      type: 'createCollection',
      itemsCollectionList: [...localData?.itemsCollectionList || [], data]
    })
    setInputs({
      collectionName: "",
    })
  }

  return (
    <PopUp
      zIndex="12"
      zIndexBackdrop="11"
      top='25%'
      botom='50%'
      in={showPopUpForm}
      onClose={() => {
        setShowPopUpForm(false)
      }}
    >
      <Container height="210px">
        <Content>
          <Head>
            <h4>Create New Collection</h4>
            <XButton onClick={() => {
              setShowPopUpForm(false)
            }}>
              <XIcon style={{ width: '23px', height: "23px" }} />
            </XButton>
          </Head>
          <form>
            <Body>
              <p>Input title for this collection</p>
              <InputTitleCollection
                ref={titleInputRef}
                type="text"
                name="collectionName"
                placeholder='Title'
                value={inputs.collectionName}
                onChange={handleChange}
              />
            </Body>
            <Footer>
              <CloseButton onClick={() => setShowPopUpForm(false)}>Close</CloseButton>
              <CreateButton
                type="submit"
                disabled={!inputs.collectionName}
                onClick={handleSubmit}
              >
                Create
              </CreateButton>
            </Footer>
          </form>
        </Content>
      </Container>
    </PopUp>
  )
}

const Container = styled.div(props => ({
  display: 'fixed',
  overflowY: 'hidden',
  bottom: '0',
  backgroundColor: '#383838',
  borderRadius: '12px',
  width: '90vw',
  marginLeft: '5vw',
  height: props.height,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
}))


const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`


const XButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  outline: none;
  background: none;
  color: #fff;
`
const CreateButton = styled.button(props => ({
  width: '100%',
  padding: '12px 0',
  border: 'none',
  outline: 'none',
  backgroundColor: 'red',
  fontSize: '13px',
  color: '#fff',
  opacity: props.disabled && 0.3
}))

const CloseButton = styled.button`
  width: 100%;
  padding: 12px 0;
  border: none;
  outline: none;
  background-color: #2e2e2e;
  font-size: 13px;
  color: #fff;
`

const InputTitleCollection = styled.input`
  bottom: 0px;
  padding: 10px;
  border: 1px solid #636363;
  outline: none;
  border-radius: 10px;
  background-color: #2e2e2e;
  width: 89%;
  color: #fff;
  font-size: 13.5px;
`

const Head = styled.div`
  margin: 20px;
`

const Body = styled.div`
  margin: 0 20px 25px 20px;
  
  & p {
    margin: 8px 0;
    font-size: 13px;
  }
`
const Footer = styled.div`
  display: flex;
`

export default PopUpInputCollection;