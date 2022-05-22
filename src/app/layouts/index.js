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
  width: 1600px;
  max-width: 100%;
  margin: 0 auto;
`

const Content = styled.div`
  height: 100%;
`

export default Index