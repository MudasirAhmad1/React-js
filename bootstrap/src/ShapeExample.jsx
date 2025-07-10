import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.w3schools.com/tags/img_girl.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.w3schools.com/tags/img_girl.jpg " rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.w3schools.com/tags/img_girl.jpg" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;