import Header from 'components/Header/Header';
import { ContainerLoyaut } from './Loyaut.styled';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Loyaut() {
  return (
    <ContainerLoyaut>
      <Header />
      <Outlet />
      <Footer />
    </ContainerLoyaut>
  );
}
