import Logo from 'SvgComponents/LogoSVG/Logo';
import { team } from 'data/team';
import {
  About,
  AboutContent,
  ContactList,
  Contacts,
  Container,
  FooterContainer,
} from './Footer.styled';
import ContactComponent from 'components/ContactComponent/ContactComponent';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <About>
          <Logo fill="#000000" />
          <AboutContent>
            <h3>Про нас</h3>
            <p>
              Це командний Pet-проєкт, що ставить за ціль продемонструвати
              технічні навички, командність та софт скіли розподіленої команди
              молодих спеціалістів сфери розробки ІТ продуктів.
            </p>
          </AboutContent>
        </About>
        <Contacts>
          <h3>Наші контакти</h3>
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
        </Contacts>
      </Container>
    </FooterContainer>
  );
}
