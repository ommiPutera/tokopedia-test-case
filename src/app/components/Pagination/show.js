import styled from '@emotion/styled';
import React, { useMemo } from 'react';

const Show = ({ show, total, currentPage }) => {
  const from = useMemo(() => {
    let res = ((currentPage - 1) * show) + 1
    return res
  }, [currentPage, show])

  const to = useMemo(() => {
    let res = currentPage * show;
    if (res > total) res = total;
    return res
  }, [currentPage, show, total])

  return (
    <Container>
      <p>
        Showing {from} to {to} of {total}
      </p>
    </Container>
  )
}

const Container = styled.div`
  margin: 60px 0 0 0;
  text-align: center;

  & p {
    font-size: 14px
  } 
`

export default Show
