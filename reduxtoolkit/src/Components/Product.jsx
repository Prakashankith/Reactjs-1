import React from "react";
import { useState, useEffect } from "react";

function Product() {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);
  return (
    <>
      <h1>Product dashboard</h1>;{JSON.stringify(products)}
    </>
  );
}

export default Product;
