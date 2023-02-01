import React from "react";
import Accordion from "react-bootstrap/Accordion";

import Container from "react-bootstrap/Container";

import { ProductDetail } from "./ProductDetail";

function Product({ id, title, products }) {
  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <Container fluid>
            {products.map(({ description, id, image, message, title }) => (
              <ProductDetail
                description={description}
                id={id}
                image={image}
                message={message}
                title={title}
                key={id}
              />
            ))}
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}

export { Product };
