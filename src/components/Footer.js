import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
function Footer() {
  return (
    <FooterWrap>
      <FooterContent>
        <AboutSection>
          <h4>About</h4>
          <ul>
            <li>
              <a>Our Story</a>
            </li>
            <li>
              <a>Latest News</a>
            </li>
            <li>
              <a>Giveaways</a>
            </li>
          </ul>
        </AboutSection>
        <SupportSection>
          <h4>Support</h4>
          <ul>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Shipping & Returns</a>
            </li>
            <li>
              <a>Accessibility</a>
            </li>
          </ul>
        </SupportSection>
        <LegalSection>
          <h4>Legal</h4>
          <ul>
            <li>
              <a>Terms & Conditions</a>
            </li>
            <li>
              <a>Privacy Policies</a>
            </li>
            <li>
              <a>Rewards T&C's</a>
            </li>
          </ul>
        </LegalSection>
        <Newsletter>
          <h4>E-Drinks Newsletter</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Enter your email "></input> <FaEnvelope />
          </form>
          <SocialsWrap>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </SocialsWrap>
        </Newsletter>
        <CopyRight>
          <span>Made by Jonathan Lee</span>
        </CopyRight>
      </FooterContent>
    </FooterWrap>
  );
}
export default Footer;
const FooterWrap = styled.footer`
  width: 100%;
  padding: 2em;
  background-color: black;
  color: ${({ theme }) => theme.colors.headerText};
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  h4 {
    font-size: 1.3rem;
    margin-bottom: 1em;
    text-transform: uppercase;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1440px;
  } ;
`;
const AboutSection = styled.div`
  padding: 1em;
  margin-bottom: 1.2em;
  border-bottom: 0.2px solid white;
  ul {
    list-style: none;
    li {
      color: white;
      margin-bottom: 0.7em;
      &:hover {
        color: ${({ theme }) => theme.colors.headerText};
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 24%;
    margin: 0 0.5em;
    margin-bottom: 2em;
  } ;
`;
const SupportSection = styled(AboutSection)``;
const LegalSection = styled(AboutSection)``;
const Newsletter = styled.div`
  padding: 1em;

  form {
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.4em;
    }
    input {
      padding: 0.5em 1em;
      background-color: black;
      border: none;
      border-bottom: 2px solid white;
      color: white;
      font-size: 1.1rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    input {
      min-width: 20em;
    }
  } ;
`;
const SocialsWrap = styled.div`
  margin: 0 auto;
  max-width: 10em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  svg {
    font-size: 1.4em;
    cursor: pointer;
  }
`;
const CopyRight = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  } ;
`;
