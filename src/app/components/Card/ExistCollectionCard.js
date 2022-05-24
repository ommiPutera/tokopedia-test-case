import React from 'react'
import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import RemoveCollectionBtn from '../Button/RemoveCollectionBtn'

function ExistCollectionCard({ coverImage, item, to, onRemove, disabled, title, amount, withRemoveBtn, onClick }) {
  return (
    <Container>
      <Link to={to || ''} className="link">
        <WrapperCard onClick={!disabled ? onClick : null} style={{ border: disabled && '1px solid #0a9400' }}>
          {
            coverImage
              ?
              <img src={coverImage} alt='' style={{ opacity: disabled ? '.4' : '1' }} />
              :
              <p>No collection yet </p>
          }
        </WrapperCard>
      </Link>
      {
        withRemoveBtn
        &&
        <RemoveCollectionBtn onClick={onRemove} />
      }
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}

const Container = styled.div`
  display: block;
  position: relative;
  margin: 0;
`

const Title = styled.p`
  text-align: left;
  color: #fff;
  line-height: 1.1em !important;
  padding: 10px 6px 0 6px !important;
  margin: 0 !important;
  font-size: 12px !important;
  z-index: 5;
`

const Amount = styled.p`
  text-align: left;
  line-height: 1.1em !important;
  color: #616161;
  padding: 4px 6px 0 6px !important;
  margin: 0 !important;
  font-size: 12px !important;
  z-index: 5;
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

  & p {
    font-size: 11px;
    text-align: center;
    color: #636363;
    margin: 0 auto;
  }

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