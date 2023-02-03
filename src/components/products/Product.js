import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./product.sass"
import Container from "react-bootstrap/Container";

import { ProductDetail } from "./ProductDetail";

function Product({ id, title, products }) {
  return (
    <>
      <Accordion.Item eventKey={id} className="mb-2">
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
          <img src="blooma/assets/images/products/RUTINAS WEB.jpg" class="img-fluid" alt="" />
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}

export { Product };
