import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ProductRecSection from "../components/ProductRecSection";
import PromotionSection from "../components/PromotionSection";
function Home() {
  return (
    <Container>
      <Banner />
      <ProductRecSection title="Best Sellers" />
      <PromotionSection title="Brand Deals" />
      <ProductRecSection title="Popular This Week" />
      <PromotionSection title="Non-Brand Deals" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
