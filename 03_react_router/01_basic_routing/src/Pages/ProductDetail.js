import React from "react";
import { useParams } from "react-router-dom";

// In Product Details page we want to know for which product this component is rendered
// So we an useParams hook provided by react-router-dom to access the id of the product from route.

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h2>Product Detail</h2>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetail;
