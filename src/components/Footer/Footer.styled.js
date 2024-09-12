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
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 768px;
    margin: auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    padding-left: 58px;
    padding-right: 58px;
    width: 1200px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 1440px;
  }
`;

export const ContainerFooter = styled.div`
  border-bottom: 1px ${({ theme }) => theme.color.colorMainText} solid;
  padding-top: 48px;
  padding-bottom: 68px;
  font-size: 16px;
  line-height: 1.5; /* 150% */

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mx}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.44; /* 144.444% */
    align-items: flex-end;
    grid-template-columns: 1fr 2fr;
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
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5; /* 150% */
`;
export const LogoContainer = styled.div`
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mx}) {
    text-align: left;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.5; /* 150% */
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mx}) {
    font-size: 18px;
    line-height: 1.45;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    margin-bottom: 0;
  }
`;
export const Confederacy = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  a {
    display: block;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    margin-bottom: 0px;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;
