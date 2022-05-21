import Footer from './footer'
import Header from './header'
import styled from '@emotion/styled'

function Index({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Content>
          {children}
        </Content>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
`

const Content = styled.div`
  padding: 5px 0 25px 0;
  height: 100%;
  min-height: 100vh;
`

export default Index