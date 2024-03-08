import React from "react";
import { useParams, Link } from "react-router-dom";

// In Product Details page we want to know for which product this component is rendered
// So we an useParams hook provided by react-router-dom to access the id of the product from route.

const ProductDetail = () => {
  const params = useParams();

// when using relative paths for defining routes, then if we don't provide the property relative="path" to the 
// link tag, then it will go back to the home page instead of just going back to the products page.

  return (
    <>
      <h2>Product Detail</h2>
      <p>{params.productId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
};

export default ProductDetail;
