import styled from "@emotion/styled"

export default function AnimeInfo({ detail }) {
  return (
    <WrapperInfo>
      <Title>{detail?.title?.english}</Title>
      <Brief>{detail?.seasonYear} | {`${detail?.episodes} Episodes`} | {`Anime ${detail?.genres[0]}`}</Brief>

      <Desc>
        <h2>Synopsis</h2>
        <div dangerouslySetInnerHTML={{ __html: detail?.description }}></div>
      </Desc>

      <Information>
        <p>Duration: <span>{detail?.duration} min. per episode</span></p>
        <p>Genre: <span>{detail?.genres.join(", ")}</span></p>
        <p>Studios: <span>{detail?.studios?.nodes.map((studio, idx) => idx < 3 && `${studio.name}, `)}</span></p>
      </Information>
    </WrapperInfo>
  )
}

const WrapperInfo = styled.div`
  margin: 10px 0;
`

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1em;
`

const Brief = styled.p`
  margin-bottom: 30px;
  font-size: 13px;
  letter-spacing: normal;
  color: #91999f;
`

const Desc = styled.div`
  font-size: 14px;
  letter-spacing: normal;
  margin-bottom: 30px;
  color: #fff;

  & h2 {
    font-size: 21px;
    margin-bottom: 10px;
  }
`

const Information = styled.p`
  font-size: 14px;
  letter-spacing: normal;
  color: #91999f;
  
  & p {
    margin-bottom: 5px;
  }

  & span {
    color: #fff;
  }
`