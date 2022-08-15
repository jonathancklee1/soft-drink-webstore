import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Fade } from "react-reveal";
import { selectDrinks } from "../features/drinks/drinkSlice";
import { useSelector } from "react-redux";
function ProductRecSection(props) {
  const drinks = useSelector(selectDrinks);
  console.log(drinks);
  const featuredDrinks = drinks.filter((drink) => drink.featured);
  const bestSellerDrinks = drinks.filter((drink) => drink.bestSeller);
  return (
    <SectionWrap>
      <ProductRecText>
        <h1>{props.title}</h1>
        <ViewAllBtn>View All</ViewAllBtn>
      </ProductRecText>
      <Fade bottom>
        <ProductList>
          {drinks && props.title === "Popular This Week"
            ? featuredDrinks.map((drink, index) => (
                <ProductCard
                  key={index}
                  name={drink.name}
                  brand={drink.brand}
                  price={drink.price}
                  img={drink.img}
                  featured={drink.featured}
                />
              ))
            : bestSellerDrinks.map((drink, index) => (
                <ProductCard
                  key={index}
                  name={drink.name}
                  brand={drink.brand}
                  price={drink.price}
                  img={drink.img}
                  bestSeller={drink.bestSeller}
                />
              ))}
        </ProductList>
      </Fade>
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
    color: ${({ theme }) => theme.colors.secondaryColor};
    margin-bottom: 0.5em;
    font-size: 2.5rem;
  }
`;
const ProductList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  overflow: hidden;
  overflow-x: scroll;
  padding: 1em;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    overflow-x: hidden;
  }
`;
const ViewAllBtn = styled.div`
  text-align: center;
  padding: 0.8em 0.9em;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  opacity: 0.85;
  cursor: pointer;
  color: white;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.8rem;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
