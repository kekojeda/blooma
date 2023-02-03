import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductDetailChild({ description, id, image, message, title }) {
  const loadImage = `blooma/assets/images/products/${image}`;
  const linkWhats = `https://api.whatsapp.com/send?phone=541123886544&text=${message}${title}`;

  return (
    <>
      {
        <Card>
          <Row>
            <Col sm={4}>
            
              <Card.Img variant="top" width={20 + "%"} src={loadImage} />
             
            </Col>
            <Col sm={8}>
              <Card.Body>
                <Card.Title className="text-uppercase">{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <a href={linkWhats} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Whatsapp</Button>
                </a>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      }
    </>
  );
}

export { ProductDetailChild };
