import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ProductRecSection from "../components/ProductRecSection";
import PromotionSection from "../components/PromotionSection";
import PromotionCard from "../components/PromotionCard";
import Footer from "../components/Footer";
function Home() {
  return (
    <Container>
      <Banner key={"d"} />
      <ProductRecSection title="Best Sellers" />
      <PromotionCard
        width="100%"
        key={"New Imports From Mexico"}
        title="New Imports From Mexico"
        subtitle="Explore Foreign Drinks"
        img={"jarritos-strawberry-cover.jpg"}
      />
      <PromotionSection title="Brand Deals" />
      <ProductRecSection title="Popular This Week" />
      <PromotionSection title="Non-Brand Deals" />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
