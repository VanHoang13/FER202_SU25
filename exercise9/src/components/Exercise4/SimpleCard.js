import { Card, Row, Col } from 'react-bootstrap';

function SimpleCard({ item }) {
  return (
    <div className="d-flex justify-content-center my-4">
      <Card className="shadow-sm p-4" style={{ maxWidth: '800px', width: '100%' }}>
        <Card.Body>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={item.imageUrl}
                alt="FPT Logo"
                style={{
                  width: '100%',
                  maxWidth: '150px',
                  height: 'auto',
                }}
              />
            </Col>
            <Col md={6} className="text-end">
              <h5 className="fw-bold mb-1">{item.title}</h5>
              <p className="text-muted mb-0">Mobile: {item.description}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SimpleCard;
