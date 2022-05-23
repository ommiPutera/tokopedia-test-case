import React from 'react'
import styled from '@emotion/styled'

function ExistCollectionCard({ coverImage, disabled, title, onClick }) {
  return (
    <Container onClick={onClick} style={{ opacity: disabled ? '.4' : '1', border: disabled && '1px solid #fff' }}>
      <img src={coverImage || '/assets/no_image_available.png'} alt='' />
      <p>{title}</p>
    </Container>
  )
}

const Container = styled.div`
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
    height: 130px;
    width: 100px;
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
    background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0.7262255243894433) 42%, rgba(255,255,255,0) 100%);
  }

  & p {
    position: absolute;
    text-align: center;
    line-height: 1.1;
    padding: 10px;
    font-size: 11px;
    z-index: 5;
    margin: 0;
    bottom: 0;
  }

  @media (max-width: 768px) {
    height: 130px;
    width: 100px;

    ::after {
      background: rgb(24,24,24);
      background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0.7262255243894433) 42%, rgba(255,255,255,0) 100%);
  }

  }
`

export default ExistCollectionCard;