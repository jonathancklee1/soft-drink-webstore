import React from "react";
import PromotionCard from "./PromotionCard";
import styled from "styled-components";

function PromotionSection() {
  return (
    <PromotionSectionWrap>
      <PromotionCard />
      <PromotionCard />
    </PromotionSectionWrap>
  );
}

export default PromotionSection;

const PromotionSectionWrap = styled.div`
  width: 100%;
  margin: 5em auto;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  gap: 0.3em;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
