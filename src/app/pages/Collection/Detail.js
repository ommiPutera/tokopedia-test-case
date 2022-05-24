import styled from '@emotion/styled';
import React from 'react'
import { useParams } from "react-router-dom";

function Detail() {
  let params = useParams();
  let id = params.id;

  return (
    <Container>Detail Collection {id}</Container>
  )
}

const Container = styled.div`
  margin: 100px 10px;
  
  h1 {
    margin: 30px 0;
  }
`

export default Detail