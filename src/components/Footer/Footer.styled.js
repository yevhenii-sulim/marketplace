import styled from 'styled-components';
export const FooterContainer = styled.footer`
  padding-top: 68px;
  padding-bottom: 68px;
  background-color: ${({ theme }) => theme.color.bgFooter};
`;
export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 428px auto;
    gap: 109px;
    width: 1440px;
    padding-left: 58px;
    padding-right: 58px;
  }
`;
export const TitleAbout = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;
  font-family: 'Jost';
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleContacts = styled.h3`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 28px;
`;
export const LogoContainer = styled.div`
  text-align: center;
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;
  p {
    font-size: 22px;
    line-height: 1.45;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const ContactList = styled.ul`
  display: grid;
  row-gap: 24px;
  justify-content: space-between;
  grid-template: repeat(4, auto) / repeat(2, 1fr);
  justify-content: center;
  @media screen and (min-width: 768px) {
    grid-template: repeat(2, auto) / repeat(4, 1fr);
  }
`;
