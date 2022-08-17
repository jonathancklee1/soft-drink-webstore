import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import HeadShake from "react-reveal/HeadShake";

function PromotionCard(props) {
  console.log(props.img);
  return (
    <PromotionPoster img={props.img} width={props.width}>
      <PosterTextWrap>
        <Fade bottom>
          <PosterTextContent>
            <p>{props.title}</p>
            <h1>{props.subtitle}</h1>
          </PosterTextContent>
        </Fade>
        <HeadShake>
          <ShopButton>{props.brand ? "Shop Now" : "Explore More"}</ShopButton>
        </HeadShake>
      </PosterTextWrap>
    </PromotionPoster>
  );
}

export default PromotionCard;
const PosterTextWrap = styled.div`
  max-width: 1440px;
`;
const PosterTextContent = styled.div`
  margin: 0 auto;
  width: 100%;

  padding: 1em 0;
`;
const ShopButton = styled.div`
  display: inline-block;
  color: white;
  border: none;
  text-align: center;
  padding: 0.8em 0.9em;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  opacity: 0.85;
  font-weight: 700;
  letter-spacing: 0.3em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const PromotionPoster = styled.div`
  width: 100%;
  height: 19em;
  background-image: url(${(props) => props.img}),
    linear-gradient(0deg, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5));
  background-blend-mode: overlay;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5em;
  @media (min-width: 768px) {
    width: ${(props) => (props.width ? "100%" : "50%")};
    height: 30em;
  }
`;
