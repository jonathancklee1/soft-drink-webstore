import React from "react";
import styled from "styled-components";
// import { dietCoke } from "../assets/img";

function ProductCard(props) {
  console.log(props.img);
  return (
    <ProductCardWrap>
      <img
        src={require(`../assets/img/${props.img}`)}
        alt={props.name}
      ></img>
      <ProductTag>{props.bestSeller ? "Best Seller" : "Featured"}</ProductTag>
      <ProductCardTextWrap>
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <p>${props.price}</p>
        <span>{props.type}</span>
      </ProductCardTextWrap>
    </ProductCardWrap>
  );
}

export default ProductCard;
const ProductCardWrap = styled.div`
  position: relative;
  width: 20%;
  min-height: 22.6em;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 9px 20px 0px;
  padding: 1em;
  min-width: 20em;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 14.3em;
  }
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    min-width: initial;
  }
`;
const ProductCardTextWrap = styled.div`
  text-align: center;
  h2,
  h3,
  p {
    font-weight: 900;
  }
  h2 {
    font-size: 1.1rem;
  }
  h3 {
    font-style: italic;
    font-size: 0.9em;
    margin-bottom: 0.7em;
  }
  p {
    color: ${({ theme }) => theme.colors.secondaryColor};
    margin-bottom: 0.3em;
  }
  span {
    font-style: italic;
    font-size: 0.8rem;
  }
`;
const ProductTag = styled.div`
  font-weight: 900;
  top: 0.6em;
  right: 0;
  position: absolute;
  z-index: 12;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: white;
  padding: 0.3em 0.8em;
  text-transform: uppercase;
  @media (min-width: 769px) {
    font-size: 0.9em;
    padding: 4px 10px 4px 12px;
  }
`;
