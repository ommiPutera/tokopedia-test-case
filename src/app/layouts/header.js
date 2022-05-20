import styled from '@emotion/styled'

function Header() {
  return (
    <Container>
      Header
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 15px 30px;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
`

export default Header