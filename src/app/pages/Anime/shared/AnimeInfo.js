import styled from "@emotion/styled"

export default function AnimeInfo({ detail }) {
  return (
    <WrapperInfo>
      <h2>{detail?.title?.english}</h2>
      <p>{detail?.seasonYear} | {`${detail?.episodes} Episodes`} | {`${detail?.genres.join(" ")}`}</p>
    </WrapperInfo>
  )
}

const WrapperInfo = styled.div`
  & p {
    margin: 0 20px;
    font-size: 13px;
    letter-spacing: normal;
    color: #91999f;
  }
`