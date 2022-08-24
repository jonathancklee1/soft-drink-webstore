import React, { useState, useEffect } from "react";
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
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  useEffect(() => {
    // Auto scroll through banners
    const slideInterval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent < banners.length - 1 ? prevCurrent + 1 : 0
      );
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [banners.length]);

  // Check if banners exist
  if (!banners || banners.length === 0) {
    return null;
  }

  return (
    <BannerContainer>
      <StyledAngleLeft onClick={prevSlide} />
      <StyledAngleRight onClick={nextSlide} />

      {banners.map((banner, index) => {
        return (
          <React.Fragment key={index}>
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
                </BannerTextWrap>{" "}
              </BannerWrap>
            )}
          </React.Fragment>
        );
      })}
    </BannerContainer>
  );
}
export default Banner;

const BannerContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: black;
  svg {
    position: absolute;
    font-size: 3rem;
    color: white;
    top: 50%;
    z-index: 95;
    cursor: pointer;
  }
`;
const StyledAngleLeft = styled(FaAngleLeft)`
  left: 0.3em;
  @media (min-width: 768px) {
    left: 1em;
  }
`;

const StyledAngleRight = styled(FaAngleRight)`
  right: 0.3em;
  @media (min-width: 768px) {
    right: 1em;
  }
`;
const BannerWrap = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: ${(props) =>
      `url(${require(`../assets/img/landscape/${props.img}`)})`},
    linear-gradient(0deg, rgba(1, 1, 1, 0.2), rgba(1, 1, 1, 0.2));
  background-blend-mode: overlay;
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
  width: 100%;
  max-width: 1440px;
  padding: 1em;
`;
const BannerTextContent = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
  @media (min-width: 768px) {
    flex-direction: row;
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
