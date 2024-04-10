import { Outlet } from 'react-router-dom';
import { Container, ContainerLoyaut } from './Loyaut.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function Loyaut() {
  return (
    <ContainerLoyaut>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </ContainerLoyaut>
  );
}
