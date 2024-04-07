import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './App.styled';
import Loyaut from 'components/Loyaut/Loyaut';
import Clothes from 'pages/Clothes';
import AutoMoto from 'pages/AutoMoto';
import Electronics from 'pages/Electronics';
import ProductPage from 'components/ProductPage/ProductPage';

export default function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route path="clothes" element={<Clothes />} />
          <Route path="auto-moto" element={<AutoMoto />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="product_page" element={<ProductPage />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}
