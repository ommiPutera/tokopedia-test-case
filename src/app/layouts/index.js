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
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
`

const Content = styled.div`
  padding: 0 0 15px 0;
  height: 100%;
  min-height: 100vh;
`

export default Index