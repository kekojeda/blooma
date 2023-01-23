import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ServiceDetail({ description, id, image, message, title }) {
  return (
    <>
      {
        <Card>
          <Row>
            <Col sm={4}>
              <Card.Img variant="top" width={100 + "%"} src={image} />
            </Col>
            <Col sm={8}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Whatsapp</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      }
    </>
  );
}

export { ServiceDetail };
