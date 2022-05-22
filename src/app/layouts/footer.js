import styled from '@emotion/styled'

function Footer() {
  return (
    <Container>Footer</Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px 0 80px 0;
  text-align: center;

  @media (max-width: 768px) {
    background-color: #000000;
  }
`

export default Footer