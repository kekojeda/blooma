import React, { useEffect, useState } from "react";
import { ProductList } from "./product/ProductList";
import products from "../../products.json"
import Accordion from "react-bootstrap/Accordion";

function ProductListContainer({ greeting }) {
  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);


  const asyncMock = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  useEffect(() => {
    asyncMock
      .then((products) => setList(products))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="d-flex align-items-center">
          <h2>
            <strong>Estamos cargando los servicios ....</strong>
          </h2>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <>
          <Accordion defaultActiveKey="0">
            <ProductList items={list} />
          </Accordion>
        </>
      )}
    </>
  );
}

export { ProductListContainer };
