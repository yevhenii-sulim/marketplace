import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './App.styled';
import Loyaut from 'components/Loyaut/Loyaut';
import Clothes from 'pages/Clothes';

export default function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route path="clothes" element={<Clothes />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}
