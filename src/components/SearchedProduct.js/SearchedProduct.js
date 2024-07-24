// import React from "react";
// import { Product, ProductList, ProductsPage, TitleSort } from "./SearchedProduct.styled";
// import Sort from "components/ProductListPage/Sort";
// import SimilarProduct from "components/Product/SimilarProduct";

export default function SearchedProduct({ handleSort, valueSort }) {
  //   return (
  // <ProductsPage>
  //   <div>
  //     <TitleSort>Підбір за параметрами</TitleSort>
  //   </div>
  //   <ProductList>
  //     <Sort handleSort={handleSort} valueSort={valueSort} />
  //     <Product>
  //       {sortedProduct.map(
  //         ({
  //           title,
  //           _id,
  //           img,
  //           price,
  //           discountPrice,
  //           createDate,
  //           discount,
  //           parameters,
  //           category,
  //           subCategory,
  //         }) => (
  //           <SimilarProduct
  //             key={_id}
  //             id={_id}
  //             title={title}
  //             price={price}
  //             img={img}
  //             discountPrice={discountPrice}
  //             discount={discount}
  //             createDate={createDate}
  //             eco={parameters.eco}
  //             isUkraine={parameters.isUkraine}
  //             category={category}
  //             subCategory={subCategory}
  //           />
  //         )
  //       )}
  //     </Product>
  //   </ProductList>
  // </ProductsPage>
  //   );
}

//   <ProductListPage
//     page={page}
//     category={category}
//     valueSort={valueSort}
//     sortedProduct={products}
//     totalItemsCount={totalItemsCount}
//     handleSort={handleSort}
//     handlePageClick={handlePageClick}
//   />;
