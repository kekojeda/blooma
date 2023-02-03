import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from 'react-icons/fa';



function ProductDetailChild({ description, id, image, message, title }) {
  const loadImage = `blooma/assets/images/products/${image}`;
  const linkWhats = `https://api.whatsapp.com/send?phone=541123886544&text=${message}${title}`;

  return (
    <>
      {
        
        <Card>
          <Row>
            <Col sm={4}>
              <Card.Img className="img-thumbnail" variant="top" width={20 + "%"} src={loadImage} />
            </Col>
            <Col sm={8}>
              <Card.Body>
                <Card.Title className="text-uppercase">{title}</Card.Title>
                <Card.Text>{description}</Card.Text>

                <a
                  href={linkWhats}
                  className="btn btn-outline-dark btn-lg float-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size='1.3em' /> Consultar por producto
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
