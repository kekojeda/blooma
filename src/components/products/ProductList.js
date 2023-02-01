import React from "react";
import { Product } from "./Product";

function ProductList({ items }) {
  return (
    <>
      {items.map(({ id, title, image, services }) => (
        <Service
          id={id}
          title={title}
          image={image}
          key={id}
          products={products}
        />
      ))}
    </>
  );
}

export { ProductList };
