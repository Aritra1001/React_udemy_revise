import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {

  // We get this product list from the backend, but here we are creating a dummy product list to create
  // dynamic links for different products.
  const DUMMY_PRODUCTS = [
    {id: 'p1', title: 'Product-1'},
    {id: 'p2', title: 'Product-2'},
    {id: 'p3', title: 'Product-3'},
  ]

  return (
    <>
      <h1>The Products Page</h1>
      <ul style={{listStyleType: 'none'}}>
        {DUMMY_PRODUCTS.map(prod => {
          return (
            <li key={prod.id}>
              <Link to={prod.id}>{prod.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default ProductPage;
