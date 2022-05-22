import styled from '@emotion/styled'

function AnimeCard({ item: { title, coverImage, episodes } }) {
  return (
    <Container>
      <img src={coverImage?.extraLarge || '/assets/no_image_available.png'} alt='' />
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
    font-weight: bold;
  }

  @media (max-width: 768px) {
    & p {
      margin: 5px 0;
      font-size: 14px;
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
      height: 250px;
    }
  }
`

export default AnimeCard;