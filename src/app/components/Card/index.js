import styled from '@emotion/styled'

function Card({ item: { title, bannerImage, episodes } }) {
  return (
    <Container>
      <img src={bannerImage || '/assets/no_image_available.png'} alt='' />
      <AnimeTitle>
        <p>{`${title.english || 'Error: Tittle not found...'} - Episodes ${episodes}`}</p>
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
    margin: 5px 0;
    color: white;
    font-size: 11px;
    font-weight: bold;
  }
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    img {
      height: 100px;
    }
  }
`

export default Card;