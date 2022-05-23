import styled from '@emotion/styled'
import { CollectionIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <WrapperHeader>
        <Link to='/' className="link">
          <p>Anime Test Case</p>
        </Link>
        <Link to='/collection/list' className="link">
          <CollectionIcon style={{ width: '27px', height: "27px" }} />
        </Link>
      </WrapperHeader>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  background-color: #000000;
  position: fixed;
  top: 0px;
  z-index: 9;
`

const WrapperHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p, svg {
    color: #fff;
  }
`

export default Header