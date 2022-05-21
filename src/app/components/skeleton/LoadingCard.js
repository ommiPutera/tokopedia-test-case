import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const LoadingCard = ({ count }) => {
  const loop = Array.from(Array(count).keys())

  return (
    <>
      {
        loop.map((val, index) => (
          <Card key={val}>
            <div />
            <p></p>
          </Card>
        ))
      }
    </>
  );
};

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

const Card = styled.div`
  position: relative;
  overflow: hidden;
  & div, p {
    background: #111;
    background: linear-gradient(110deg, #212121 10%, #252525 18%, #212121 33%);
    background-size: 200% 100%;
    animation: 1.2s ${shine} linear infinite;
  }

  & div {
    height: 130px;
    width: 100%;
  }

  & p {
    margin-top: 10px;
    height: 20px;
    width: 100%;
  }

  @media (max-width: 768px) {
    & div {
      height: 240px;
      width: 100%;
    }

    & p {
      margin-top: 12px;
      height: 20px;
      width: 100%;
    }
  }
`

export default LoadingCard;