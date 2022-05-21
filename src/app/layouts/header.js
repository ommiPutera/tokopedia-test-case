import styled from '@emotion/styled'

function Header() {
  return (
    <Container>
      <div>
        <p>Header</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  background-color: #000000;
  position: sticky;
  top: 0px;
  z-index: 100;

  div {
    padding: 20px;
  }
`

export default Header