import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaSearch,
  FaShoppingBag,
  FaStream,
  FaUser,
  FaTimes,
} from "react-icons/fa";

function Header(theme) {
  const [isMobile, setIsMobile] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  // Check if viewport is in mobile width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderWrap>
      <HeaderContent>
        <h1>E-Drinks</h1>
        {!isMobile && (
          <Nav>
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Shop Now</p>
              </li>
              <li>
                <p>Sales</p>
              </li>
              <li>
                <p>Contact Us </p>
              </li>
            </ul>
          </Nav>
        )}

        {isMobile ? (
          <Menu>
            <ul>
              <li>
                <a href="#">
                  <FaSearch />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaStream onClick={() => setBurgerOpen(true)} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaShoppingBag />
                </a>
              </li>
            </ul>
          </Menu>
        ) : (
          <Menu>
            <ul>
              <li>
                <a href="#">
                  <FaUser />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSearch />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaShoppingBag />
                </a>
              </li>
            </ul>
          </Menu>
        )}
      </HeaderContent>
      <BurgerNav show={burgerOpen}>
        <CustomClose onClick={() => setBurgerOpen(false)} />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop Now</a>
          </li>
          <li>
            <a href="#">Sales</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </BurgerNav>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  min-height: 3.75em;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.headerText};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    min-height: 6em;
  } ;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1.25em;
  max-width: 1440px;
  h1 {
    font-size: 1.4rem;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 30%;
      font-size: 1.7rem;
    }
  }
`;
const Menu = styled.nav`
  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 9em;
    margin-left: auto;
    li {
      list-style: none;
      padding: 0.6em;
      svg {
        color: ${({ theme }) => theme.colors.headerText};
        width: 1.9em;
        height: 1.9em;
        margin-left: 1em;
        font-size: 0.9rem;
      }
    }
  }
`;
const Nav = styled(Menu)`
  width: 100%;
  flex: 1 1 auto;
  li {
    padding-bottom: 0.5em;
    & :hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.headerText};
    }
  }
  p {
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.mobileNav};
  width: 15em;
  z-index: 100;
  padding: 1em;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in;
  ul {
    margin-top: 3em;
    list-style: none;
    li {
      padding: 0.9em;
      border-bottom: 2px solid white;
      a {
        color: ${({ theme }) => theme.colors.headerText};
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
`;
const CustomClose = styled(FaTimes)`
  float: right;
  font-size: 1.5rem;
`;
