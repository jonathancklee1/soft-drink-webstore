import React from "react";
import styled from "styled-components";
import productImg from "../assets/img/coke-zero.jpg";

function ProductCard() {
  return (
    <ProductCardWrap>
      <img src={productImg}></img>
      <ProductTag>Best Seller</ProductTag>
      <ProductCardTextWrap>
        <h2>Coke</h2>
        <h3>Coca-Cola</h3>
        <p>$1.99</p>
      </ProductCardTextWrap>
    </ProductCardWrap>
  );
}

export default ProductCard;
const ProductCardWrap = styled.div`
  position: relative;
  width: 18%;
  box-shadow: 0 0 59px #1819231a;
  padding: 1em;
  min-width: 15em;
  img {
    max-width: 100%;
  }
`;
const ProductCardTextWrap = styled.div`
  text-align: center;
  h2,
  h3,
  p {
    font-weight: 900;
  }
  h3 {
    font-style: italic;
    font-size: 0.8em;
  }
`;
const ProductTag = styled.div`
  font-weight: 900;
  top: 0.6em;
  right: 0;
  position: absolute;
  z-index: 12;
  background-color: purple;
  color: white;
  padding: 0.3em 0.8em;
  text-transform: uppercase;
  @media (min-width: 769px) {
    font-size: 0.85em;
    padding: 4px 10px 4px 12px;
  }
`;
