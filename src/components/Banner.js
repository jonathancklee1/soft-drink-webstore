import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/img/diet-coke.jpg";

function Banner() {
  return (
    <BannerWrap>
      <BannerTextWrap>
        <BannerTextContent>
          <h1>Diet Coke</h1>
          <p>New way to diet</p>
        </BannerTextContent>
        <ButtonGroup>
          <LeftButton>Buy Now</LeftButton>
          <RightButton>Explore More</RightButton>
        </ButtonGroup>
      </BannerTextWrap>
    </BannerWrap>
  );
}

export default Banner;

const BannerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${bannerImg});
  padding: 40px 40px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    font-size: 2.5rem;
  }
  p {
    font-weight: 700;
  }
`;

const BannerTextWrap = styled.div`
  max-width: 1440px;
  padding: 1em;
`;
const BannerTextContent = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  font-weight: 500;
  letter-spacing: 0.2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  text-align: center;
  padding: 0.8em 0.9em;
  background-color: purple;
  opacity: 0.85;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
`;
