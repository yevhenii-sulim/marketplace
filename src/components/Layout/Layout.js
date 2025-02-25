import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, ContainerLayout } from './Layout.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function AdmitadRedirect() {
  useEffect(() => {
    window.location.href = "https://rzekl.com/g/1e8d114494a44cfda69c16525dc3e8/";
  }, []);

  return <p>Redirecting...</p>;
}

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
      <AdmitadRedirect />
    </ContainerLayout>
  );
}
