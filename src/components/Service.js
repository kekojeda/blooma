import React from "react";
import Accordion from "react-bootstrap/Accordion";

import Container from "react-bootstrap/Container";

import { ServiceDetail } from "./ServiceDetail";

import { Link } from "react-router-dom";

function Service({ id, title, services }) {
  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <Container fluid>
            {services.map(({ description, id, image, message, title }) => (
              <ServiceDetail
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

export { Service };
