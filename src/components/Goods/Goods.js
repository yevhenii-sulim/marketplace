import Heart from 'SvgComponents/HeartSVG/Heart';
import { Container,ProductsItemButtonBlock, ItemPromPirce ,ProductContainer,ProductsItemIconWrapper , ProductImage, ItemName, ItemSubName, ItemCost, BuyButton, FooterText,Text} from './Goods.styled.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import ButtonAddSimilarProducts from '../ProductPage/ProductPageTabs/SimilarProducts/ButtonAddSimilarProducts/ButtonAddSimilarProducts.js';


  export default function Goods() {

    const arrayProducts = [
        {  img: 'SvgComponents/CfatalogSVG/Catalog.js',
        title: 'Goods',
        subTitle: 'text',
        price: '212',
        PromPrice: '532' },
  {  img: 'SvgComponents/CfatalogSVG/Catalog.js',
  title: 'Goods',
  subTitle: 'text',
  price: '212',
  PromPrice: '532' },
  {  img: 'SvgComponents/CfatalogSVG/Catalog.js',
  title: 'Goods',
  subTitle: 'text',
  price: '212',
  PromPrice: '532' },
  {  img: 'SvgComponents/CfatalogSVG/Catalog.js',
  title: 'Goods',
  subTitle: 'text',
  price: '212',
  PromPrice: '532' },
  {  img: 'SvgComponents/CfatalogSVG/Catalog.js',
  title: 'Goods',
  subTitle: 'text',
  price: '212',
  PromPrice: '532' },
];

      return (
        <>
            <Container>
            {arrayProducts.map((el, index)=>(
                <ProductContainer key={index}>
              <ProductImage src={el.img} alt="Product Image" />
              <ItemName>{el.title}</ItemName>
              <ItemSubName>{el.subTitle}</ItemSubName>
              <ItemCost>{el.price}</ItemCost>
              <ItemPromPirce>{el.PromPrice}</ItemPromPirce>
              <ProductsItemButtonBlock>
              <BuyButton>
                Купити
              </BuyButton>
              <ProductsItemIconWrapper>
                <FavoriteBorderIcon />
              </ProductsItemIconWrapper>
            </ProductsItemButtonBlock>
            </ProductContainer>
            ))}
            </Container>
          <ButtonAddSimilarProducts />
        </>
        
      );
}


