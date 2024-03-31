import Header from 'components/Header/Header';
import { Container } from './Loyaut.styled';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Loyaut() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
