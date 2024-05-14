import { Outlet } from 'react-router-dom';
import { Container, ContainerLayout } from './Layout.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function Layout() {
  return (
    <ContainerLayout>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </ContainerLayout>
  );
}
