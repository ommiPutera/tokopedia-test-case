import styled from '@emotion/styled'
import React from 'react'
import PopUp from '../../components/PopUp/Basic'
import { useCollection } from '../../../contexts/CollectionContext';
import { generateUniqueId } from '../../../utils/generateUniqueId';

function PopUpInputCollection({
  propsEdit,
  onSubmbit,
  editAction,
  initialValue,
  showPopUpForm,
  setShowPopUpForm,
}) {
  const titleInputRef = React.useRef(null);
  const [isValidTitle, setIsValidTitle] = React.useState(null)
  const [isNotUniqueTitle, setIsNotUniqueTitle] = React.useState(null)

  const [inputs, setInputs] = React.useState({
    collectionName: "",
  })

  const {
    data,
    dispatch: dispatchCollection
  } = useCollection();

  React.useEffect(() => {
    if (initialValue) {
      setInputs({ collectionName: initialValue.collectionName })
    }
    titleInputRef?.current?.focus();
  }, [initialValue]);

  React.useEffect(() => {
    for (let i = 0; i < data?.itemsCollectionList?.length; i++) {
      if (Boolean(data?.itemsCollectionList.find(val => val.collectionName === inputs.collectionName))) setIsNotUniqueTitle(true)
      else setIsNotUniqueTitle(false)
    }
    if (/^[A-Za-z0-9 ]+$/.test(inputs?.collectionName) || inputs?.collectionName === '') setIsValidTitle(true)
    else setIsValidTitle(false)
  }, [inputs, data.itemsCollectionList]);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    if (editAction) {
      onSubmbit({ collectionName: inputs.collectionName })
    } else {
      setShowPopUpForm(false)
      const data = {
        id: generateUniqueId(),
        collectionName: inputs.collectionName,
        animes: []
      }

      let itemsLocalStorage = localStorage.getItem('itemsCollectionList')
      let localData = itemsLocalStorage ? JSON.parse(itemsLocalStorage) : []
      dispatchCollection({
        type: 'createCollection',
        itemsCollectionList: [...localData?.itemsCollectionList || [], data]
      })
    }
    setInputs({
      collectionName: "",
    })
  }

  return (
    <PopUp
      zIndex="12"
      zIndexBackdrop="11"
      top='20%'
      botom='50%'
      in={showPopUpForm}
      onClose={() => setShowPopUpForm(false)}
    >
      <Container height={!isValidTitle || isNotUniqueTitle ? "210px" : "190px"}>
        <Content>
          <Head>
            <h4>{propsEdit?.popUptitle || "Create New Collection"}</h4>
            <p>{propsEdit?.popUpSubtitle || "Input title for this collection"}</p>
          </Head>
          <Body>
            <InputTitleCollection
              ref={titleInputRef}
              type="text"
              name="collectionName"
              placeholder='Title'
              value={inputs.collectionName}
              onChange={handleChange}
            />
            <p>{!isValidTitle && '- Only title without special characters are allowed.'}</p>
            <p>{isNotUniqueTitle && '- There is already a collection with this name.'}</p>
          </Body>
          <Footer>
            <CloseButton onClick={() => setShowPopUpForm(false)}>Close</CloseButton>
            <CreateButton
              type="submit"
              disabled={!inputs.collectionName || !isValidTitle || isNotUniqueTitle}
              onClick={handleSubmit}
            >
              {propsEdit?.btn || "Create"}
            </CreateButton>
          </Footer>
        </Content>
      </Container>
    </PopUp>
  )
}

const Container = styled.div(props => ({
  position: 'relative',
  display: 'fixed',
  overflowY: 'hidden',
  bottom: '0',
  backgroundColor: '#242424',
  borderRadius: '12px',
  width: '80vw',
  marginLeft: '10vw',
  height: props.height,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
}))


const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CreateButton = styled.button(props => ({
  width: '100%',
  padding: '16px 0',
  border: 'none',
  outline: 'none',
  backgroundColor: 'red',
  fontSize: '13px',
  color: '#fff',
  opacity: props.disabled && 0.3
}))

const CloseButton = styled.button`
  width: 100%;
  padding: 16px 0;
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
  width: 92%;
  color: #fff;
  font-size: 13.5px;
`

const Head = styled.div`
  margin: 15px 0 10px 0;
  text-align: center;

  & p {
    margin: 3px 0;
    font-size: 13.5px;
  }
`

const Body = styled.div`
  margin: 11px 20px 30px 20px;

  & p {
    line-height: 1.2em;
    margin: 6px 0;
    font-size: 11px;
    color: #c40017;
  }
`
const Footer = styled.div`
  position: absolute;
  bottom: -1px;
  width: 100%;
  display: flex;
`

export default PopUpInputCollection;