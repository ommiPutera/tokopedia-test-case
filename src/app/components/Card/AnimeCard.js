import styled from '@emotion/styled'
import RemoveCollectionBtn from '../Button/RemoveCollectionBtn';

function AnimeCard({ item: { title, coverImage }, withRemoveBtn, onRemove }) {
  return (
    <Container>
      <img src={coverImage?.large || '/assets/no_image_available.png'} alt='' />
      {
        withRemoveBtn
        &&
        <RemoveCollectionBtn widthFull onClick={onRemove} />
      }
      <AnimeTitle>
        <p>{`${title.english || 'Title not found...'}`}</p>
      </AnimeTitle>
    </Container>
  )
}

const AnimeTitle = styled.div`
  bottom: 4px;
  min-width: 100%;
  width: auto;
  & p {
    text-align: center;
    margin: 3px 0;
    color: white;
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    & p {
      margin: 5px 0;
      line-height: 1.15em;
      font-size: 12px;
    }
  }
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 140px;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    img {
      height: 160px;
    }
  }
`

export default AnimeCard;