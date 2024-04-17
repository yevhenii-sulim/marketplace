import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './App.styled';
import Loyaut from 'components/Loyaut/Loyaut';
import ProductPage from 'pages/ProductPage';
import PhonesList from 'pages/PhonesList';
import LaptopList from 'pages/LaptopList';
import HeadphoneList from 'pages/HeadphoneList';
import Goods from 'components/Goods/Goods';
import SimilarProducts from 'components/ProductPage/ProductPageTabs/SimilarProducts/SimilarProducts'


export default function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route path="phone" element={<PhonesList />} />
          <Route path="laptop" element={<LaptopList />} />
          <Route path="headphone" element={<HeadphoneList />} />
          <Route path="product_page" element={<ProductPage />} />
          <Route path="product" element={<Goods />}/>
        </Route>
      </Routes>
    </Wrapper>
  );
}
