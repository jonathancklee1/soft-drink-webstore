import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { selectBanners } from "../features/banners/bannerSlice";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
function Banner() {
  const banners = useSelector(selectBanners);
  const [current, setCurrent] = useState(0);
  const length = banners.length;
  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === length - 1 ? 0 : current - 1);
  }
  if (!banners || banners.length === 0) {
    return null;
  }
  console.log(current);
  return (
    <BannerContainer>
      <StyledAngleLeft onClick={prevSlide} />
      <StyledAngleRight onClick={nextSlide} />

      {banners.map((banner, index) => {
        return (

          <>
            {index === current && (
              <BannerWrap
                key={banner.title}
                img={banner.img}
                className="current"
              >
                <BannerTextWrap>
                  <Fade left>
                    <BannerTextContent>
                      <h1>{banner.title}</h1>
                      <p>{banner.subtitle}</p>
                    </BannerTextContent>
                  </Fade>
                  <Fade bottom>
                    <ButtonGroup>
                      <LeftButton>{banner.leftButton}</LeftButton>
                      <RightButton>{banner.rightButton}</RightButton>
                    </ButtonGroup>
                  </Fade>
                </BannerTextWrap>
              </BannerWrap>
            )}
          </>
        );
      })}
    </BannerContainer>
  );
}
export default Banner;
const StyledAngleLeft = styled(FaAngleLeft)`
  left: 1em;
`;
const StyledAngleRight = styled(FaAngleRight)`
  right: 1em;
`;
const BannerContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    position: absolute;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.headerText};
    top: 50%;
    z-index: 99;
    cursor: pointer;
  }
`;
const BannerWrap = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  opacity: {
    ${(props) => (props.className === "current" ? "1" : "0")}
  }
  padding: 40px 40px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.4s ease-in;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-weight: 700;
  }
`;

const BannerTextWrap = styled.div`
  margin: 0 auto;
  width: 100vw;
  max-width: 1440px;
  padding: 1em;
`;
const BannerTextContent = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.button`
  color: white;
  border: none;
  text-align: center;
  padding: 0.8em 0.9em;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  opacity: 0.85;
  font-weight: 700;
  letter-spacing: 0.3em;
  max-width: 20em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const RightButton = styled(LeftButton)``;
