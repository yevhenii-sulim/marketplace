import styled from 'styled-components';
export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.bgFooter};
`;
export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 58px;
    padding-right: 58px;
    width: 1440px;
  }
`;
export const ContainerFooter = styled.div`
  border-bottom: 1px ${({ theme }) => theme.color.colorMainText} solid;
  padding-top: 48px;
  padding-bottom: 68px;
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    gap: 182px;
  }
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Sign = styled.div`
  text-align: center;
  padding: 15px 0;
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
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const Confederacy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
