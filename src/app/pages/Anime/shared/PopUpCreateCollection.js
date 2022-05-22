import styled from '@emotion/styled'
import React from 'react'
import PopUp from '../../../components/PopUp/Basic'
import { XIcon } from '@heroicons/react/solid';
import FormCreateCollection from './FormCreateCollection';

function PopUpCreateCollection({
  showPopUp,
  setShowPopUp,
  createCollection,
  setCreateCollection
}) {
  return (
    <PopUp
      bottom={0}
      left={0}
      in={showPopUp}
      onClose={() => setShowPopUp(false)}
    >
      <Container height={createCollection ? '480px' : '260px'}>
        <Content>
          <Head>
            <h2>Create Collection</h2>
            <XButton onClick={() => {
              setCreateCollection(false)
              setShowPopUp(false)
            }}>
              <XIcon style={{ width: '30px', height: "30px" }} />
            </XButton>
          </Head>

          {
            createCollection
              ?
              <FormCreateCollection />
              :
              <Body>
                <p>Looks like you don't have any collections yet..</p>
                <CreateButton onClick={() => {
                  setCreateCollection(false)
                  setCreateCollection(true)
                }}>
                  Create
                </CreateButton>
                <CloseButton onClick={() => {
                  setCreateCollection(false)
                  setShowPopUp(false)
                }}>
                  Close
                </CloseButton>
              </Body>
          }
        </Content>
      </Container>
    </PopUp>
  )
}

const Container = styled.div(props => ({
  display: 'fixed',
  overflowY: 'scroll',
  bottom: '0',
  backgroundColor: '#181818',
  width: '100vw',
  height: props.height,
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
}))

const Content = styled.div`
  display: relative;
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

const CreateButton = styled.button`
  width: 100%;
  padding: 15px 0;
  margin: 0 0 10px 0;
  border: none;
  outline: none;
  background-color: red;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`

const CloseButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border: none;
  outline: none;
  background-color: #2e2e2e;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`

const Head = styled.div`
  margin: 20px 20px 30px 20px;
`

const Body = styled.div`
  margin: 0 20px;
  
  & p {
    margin: 0 0 30px 0 ;
    font-size: 13.5px;
  }
`

export default PopUpCreateCollection;