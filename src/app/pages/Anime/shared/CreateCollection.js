import styled from '@emotion/styled'
import React from 'react'
import PopUp from '../../../components/PopUp/Basic'
import { XIcon } from '@heroicons/react/solid';

function CreateCollection({ showPopUp, setShowPopUp }) {
  return (
    <PopUp
      bottom={0}
      left={0}
      in={showPopUp}
      onClose={() => setShowPopUp(false)}
    >
      <Container>
        <Content>
          <CloseButton onClick={() => setShowPopUp(false)}>
            <XIcon style={{ width: '30px', height: "30px" }} />
          </CloseButton>
          CreateCollection
        </Content>
      </Container>
    </PopUp>
  )
}

const Container = styled.div`
  display: fixed;
  bottom: 0;
  background-color: #181818;
  width: 100vw;
  height: 320px;
`

const Content = styled.div`
  display: relative;
  margin: 20px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  outline: none;
  background: none;
  color: #fff;
`

export default CreateCollection