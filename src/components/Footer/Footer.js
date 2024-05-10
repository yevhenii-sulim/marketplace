import Logo from 'SvgComponents/LogoSVG/Logo';
import { team } from 'data/team';
import {
  About,
  AboutContent,
  ContactList,
  Container,
  FooterContainer,
  TytleAbout,
  TitleContacts,
  LogoContainer,
} from './Footer.styled';
import ContactComponent from 'components/ContactComponent/ContactComponent';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <About>
          <LogoContainer>
            <Logo fill="#000000" />
          </LogoContainer>
          <AboutContent>
            <TytleAbout>Про нас</TytleAbout>
            <p>
              Це командний Pet-проєкт, що ставить за ціль продемонструвати
              технічні навички, командність та софт скіли розподіленої команди
              молодих спеціалістів сфери розробки ІТ продуктів.
            </p>
          </AboutContent>
        </About>
        <div>
          <TitleContacts>Наші контакти</TitleContacts>
          <ContactList>
            {team.map(({ id, name, spec, link }) => {
              return (
                <ContactComponent
                  key={id}
                  nameDev={name}
                  spec={spec}
                  link={link}
                />
              );
            })}
          </ContactList>
        </div>
      </Container>
    </FooterContainer>
  );
}
