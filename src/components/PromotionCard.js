import React from "react";
import styled from "styled-components";
import promotionImg from "../assets/img/dr-pepper-cover.jpg";

function PromotionCard() {
  return (
    <PromotionPoster>
      <PosterTextWrap>
        <PosterTextContent>
          <p>Sparkling Drinks</p>
          <h1>New Taste in the house</h1>
        </PosterTextContent>
        <ShopButton>Shop Brands</ShopButton>
      </PosterTextWrap>
    </PromotionPoster>
  );
}

export default PromotionCard;
const PosterTextWrap = styled.div``;
const PosterTextContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 1em 0;
`;
const ShopButton = styled.div`
  display: inline-block;
  color: white;
  border: none;
  text-align: center;
  padding: 0.8em 0.9em;
  background-color: purple;
  opacity: 0.85;
  font-weight: 700;
  letter-spacing: 0.3em;
  cursor: pointer;
`;
const PromotionPoster = styled.div`
  width: 100%;
  height: 19em;
  /* background: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.3),
      rgba(255, 0, 150, 0.3)
    ),
    url(${promotionImg}); */
  background-image: url(${promotionImg}),
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
    width: 49%;
  }
`;
