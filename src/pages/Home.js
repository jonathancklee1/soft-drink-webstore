import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ProductRecSection from "../components/ProductRecSection";

function Home() {
  return (
    <Container>
      <Banner />
      <ProductRecSection />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
