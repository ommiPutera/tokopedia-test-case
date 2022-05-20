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
  margin: 50px 0 0 0;
  height: 100vh;
`

export default Index