import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

function ProductRecSection() {
  return (
    <SectionWrap>
      <ProductRecText>
        <h1>Best Sellers</h1>
        <ViewAllBtn>View All</ViewAllBtn>
      </ProductRecText>
      <ProductList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductList>
    </SectionWrap>
  );
}

export default ProductRecSection;

const SectionWrap = styled.div`
  width: 100vw;
  margin: 5em auto;
  max-width: 1440px;
  padding: 1em;
`;
const ProductRecText = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 3em;
  h1 {
    color: purple;
    margin-bottom: 0.5em;
    font-size: 2.5rem;
  }
`;
const ProductList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  overflow: hidden;
  overflow-x: scroll;
`;
const ViewAllBtn = styled.div`
  text-align: center;
  padding: 0.8em 0.9em;
  background-color: purple;
  opacity: 0.85;
  cursor: pointer;
  color: white;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.8rem;
  display: inline-block;
`;
