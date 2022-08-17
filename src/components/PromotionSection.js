import React from "react";
import PromotionCard from "./PromotionCard";
import styled from "styled-components";
import { selectPromotions } from "../features/promotions/promotionSlice";
import { useSelector } from "react-redux";
function PromotionSection(props) {
  const promotions = useSelector(selectPromotions);
  const brandDeals = promotions.filter((promotions) => promotions.brandDeals);
  const nonBrandDeals = promotions.filter(
    (promotions) => promotions.brandDeals === false
  );
  return (
    <PromotionSectionWrap>
      {props.title === "Brand Deals"
        ? brandDeals.map((brandPromo, index) => (
            <PromotionCard
              key={index}
              title={brandPromo.title}
              subtitle={brandPromo.subtitle}
              brand={brandPromo.brandDeals}
              img={brandPromo.img}
            />
          ))
        : nonBrandDeals.map((brandPromo, index) => (
            <PromotionCard
              key={index}
              title={brandPromo.title}
              subtitle={brandPromo.subtitle}
              brand={brandPromo.brandDeals}
              img={brandPromo.img}
            />
          ))}
    </PromotionSectionWrap>
  );
}

export default PromotionSection;

const PromotionSectionWrap = styled.div`
  width: 100%;
  margin: 0.3em auto 5em auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 0.3em;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
