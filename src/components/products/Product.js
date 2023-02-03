import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./product.sass"
import Container from "react-bootstrap/Container";

import { ProductDetail } from "./ProductDetail";

function Product({ id, title, products }) {
  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <Container fluid>
            {products.map(({ description, id, title, products }) => (
              <ProductDetail
                description={description}
                id={id}
                title={title}
                key={id}
                products={products} 
              />
            ))}
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}

export { Product };
