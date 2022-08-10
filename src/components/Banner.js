import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/img/diet-coke.jpg";
import { Fade } from "react-reveal";

function Banner() {
  return (
    <BannerWrap>
      <BannerTextWrap>
        <Fade left>
          <BannerTextContent>
            <h1>Diet Coke</h1>
            <p>New way to diet</p>
          </BannerTextContent>
        </Fade>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>Buy Now</LeftButton>
            <RightButton>Explore More</RightButton>
          </ButtonGroup>
        </Fade>
      </BannerTextWrap>
    </BannerWrap>
  );
}

export default Banner;

const BannerWrap = styled.div`
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
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 1em;
`;
const BannerTextContent = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.button`
  color: white;
  border: none;
  text-align: center;
  padding: 0.8em 0.9em;
  background-color: purple;
  opacity: 0.85;
  font-weight: 700;
  letter-spacing: 0.3em;
  max-width: 20em;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)``;
