// Goods.styles.js

import styled from 'styled-components';



export const Container = styled.div`
  width: 100%; /* Adjusted to make it responsive */
  display: flex;
  flex-wrap: wrap; /* Added to allow products to wrap */
  justify-content: space-around; /* Adjusted for better spacing */
`;

export const ProductContainer = styled.div`
  width: 19%; /* Adjusted to match SimilarProductsItem width */
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 20px;
  padding: auto 0; /* Adjusted padding */
`;

export const ProductImage = styled.img`
/* Picture */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;



width:100%;
height: 212px;

border: 0.957578px solid #000000;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;

`;

export const ItemName = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`;

export const ItemSubName = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

export const ItemCost = styled.div`
  font-size: 16px;
  margin-top: 10px;
  text-decoration: line-through

`;

export const ItemPromPirce = styled.div`
  font-size: 16px;
  margin-top: 10px;
  color: #eb0c0c;

`;

export const BuyButton = styled.button`
  font-size: 18px;
  background-color: #228B22;
  color: #ffffff;
  border-radius: 4px;
  padding: 10px 30px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FooterText = styled.div`
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
`;


export const ProductsItemButtonBlock = styled.div`
display: flex;`
export const ProductsItemIconWrapper = styled.button`
display: flex;
justify-content: center;
margin: auto auto 0 0 ;
background-color: #bbeac0;
padding: 8px;
border-radius: 50%;
margin-left: auto;
`;

