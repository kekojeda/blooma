import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ProductDetailChild } from "./ProductDetailChild";

function ProductDetail({ description, id, title, products }) {
  

  return (
    <>
      {
        <Card>
          <Row>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Row>
          {products.map(({ description, id, title }) => (
              <ProductDetailChild
                description={description}
                id={id}
                title={title}
                key={id}
              />
            ))}

        </Card>
      }
    </>
  );
}

export { ProductDetail };
