import React from "react";
import { Product } from "./Product";

function ProductList({ items }) {
  return (
    <>
      {items.map(({ id, title, products }) => (
        <Product
          id={id}
          title={title}
          key={id}
          products={products}
        />
      ))}
    </>
  );
}

export { ProductList };
