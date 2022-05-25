import styled from '@emotion/styled'

function Footer() {
  return (
    <Container>Copyright 2021 by Ommi Putera - Tokopedia Test Case</Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 0 80px 0;
  text-align: center;
  font-size: 12px;

  @media (max-width: 768px) {
    background-color: #000000;
  }
`

export default Footer