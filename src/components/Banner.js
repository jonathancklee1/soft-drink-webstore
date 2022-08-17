import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Banner() {
  return (
    <BannerWrap>
      <BannerTextWrap>
        <Fade left>
          <BannerTextContent>
            <h1>New Tastes in Store</h1>
            <p>View Our Wide Selections Now</p>
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
  background-image: url("../assets/img/landscape/vending-machine-banner.jpg");
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
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  opacity: 0.85;
  font-weight: 700;
  letter-spacing: 0.3em;
  max-width: 20em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const RightButton = styled(LeftButton)``;
