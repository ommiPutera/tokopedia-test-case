import React from 'react'
import styled from '@emotion/styled'

function ExistCollectionCard({ coverImage, disabled, title, onClick }) {
  return (
    <Container>
      <WrapperCard onClick={onClick} style={{ border: disabled && '1px solid #075c00' }}>
        <img src={coverImage || '/assets/no_image_available.png'} alt='' style={{ opacity: disabled ? '.4' : '1' }} />
      </WrapperCard>
      <p>{title}</p>
    </Container>
  )
}

const Container = styled.div`
  display: block;

  & p {
    text-align: left;
    line-height: 1.1;
    padding: 5px;
    font-size: 11.5px;
    z-index: 5;
  }
`

const WrapperCard = styled.div`
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1.5px solid #2e2e2e;
  align-items: center;
  border-radius: 15px;

  img {
    height: 105px;
    width: 105px;
    object-fit: cover;
    border-radius: 15px;
  }

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: rgb(24,24,24);
    background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0.21922272326899506) 61%, rgba(255,255,255,0) 100%);
  }

  @media (max-width: 768px) {
    height: 105px;
    width: 105px;

    ::after {
      background: rgb(24,24,24);
      background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0.21922272326899506) 61%, rgba(255,255,255,0) 100%);
    }
  }
`

export default ExistCollectionCard;