import React from 'react';
import { useCollection } from '../../../contexts/CollectionContext';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import CollectionCard from "../../components/Card/CollectionCard";
import LoadingCard from "../../components/skeleton/LoadingCard";
import ExistCollectionCard from '../../components/Card/ExistCollectionCard';
import NewCollectionCard from '../../components/Card/NewCollectionCard';
import RemoveBtn from '../../components/Button/RemoveBtn';

function List() {
  const {
    data,
    dispatch
  } = useCollection();
  const [showPopUpForm, setShowPopUpForm] = React.useState(false)

  React.useEffect(() => {
    console.log(data)
  }, [])

  return (
    <Container>
      <WrapperCard>
        <NewCollectionCard onClick={() => setShowPopUpForm(true)} />
        {
          data?.itemsCollectionList
          &&
          data?.itemsCollectionList.map((item, index) => (
            <Link to={`/collection/detail/${item.id}`} key={item.id} className="link">
              <ExistCollectionCard
                coverImage={item?.animes[0]?.coverImage.medium}
                title={item.collectionName}
                amount={item.animes.length}
              />
              <RemoveBtn>Test</RemoveBtn>
            </Link>
          ))
        }
      </WrapperCard>

      {
        showPopUpForm
        &&
        <NewCollectionCard
          onCreate
          showPopUpForm={showPopUpForm}
          setShowPopUpForm={setShowPopUpForm}
        />
      }
    </Container>
  )
}

const Container = styled.div`
  margin: 100px 10px;
  
  h1 {
    margin: 30px 0;
  }
`


const WrapperCard = styled.div`
  display: grid;
  column-gap: 12px;
  row-gap: 30px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0 10px;
  
  & p {
    margin: 0 0 30px 0 ;
    font-size: 13.5px;
  }

  @media (max-width: 768px) {
    row-gap: 12px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export default List