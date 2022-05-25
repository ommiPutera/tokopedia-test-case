import styled from '@emotion/styled'
import { CollectionIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useCollection } from '../../contexts/CollectionContext';

function Header() {
  const {
    data
  } = useCollection();

  return (
    <Container>
      <WrapperHeader>
        <Link to='/' className="link">
          <p>Anime Test Case</p>
        </Link>
        <WrapperIcon>
          <Link to='/collection/list' className="link">
            <CollectionIcon style={{ width: '27px', height: "27px" }} />
            {
              data?.itemsCollectionList?.length
              &&
              <CollectionAmount>{data.itemsCollectionList.length}</CollectionAmount>
            }
          </Link>
        </WrapperIcon>
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

const WrapperIcon = styled.div`
  position: relative;
`

const CollectionAmount = styled.div`
  position: absolute;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0;
  right: -10px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`

export default Header