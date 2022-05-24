import React from 'react'
import PopUp from '../../components/PopUp/Basic'
import styled from '@emotion/styled'

function PopUpRemoveCollection({ onClick, showPopUpConfirmation, setShowPopUpConfirmation }) {
  return (
    <PopUp
      zIndex="12"
      zIndexBackdrop="11"
      top='30%'
      botom='50%'
      in={showPopUpConfirmation}
      onClose={() => {
        setShowPopUpConfirmation(false)
      }}
    >
      <Container height="180px">
        <Content>
          <Head>
            <h4>Remove Collection</h4>
          </Head>
          <Body>
            <p>Are you sure you want to delete this collection?</p>
          </Body>
          <Footer>
            <CloseButton onClick={() => setShowPopUpConfirmation(false)}>Close</CloseButton>
            <RemoveButton
              onClick={onClick}
            >
              Yes, Remove
            </RemoveButton>
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
    line-height: 1.5em;
    margin: 6px 0;
    font-size: 14px;
  }
`

const RemoveButton = styled.button(props => ({
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

const Footer = styled.div`
  position: absolute;
  bottom: -1px;
  width: 100%;
  display: flex;
`

export default PopUpRemoveCollection