import React from "react";
import { Navbar, Nav, Container, Carousel, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <Container fluid className="my-4">
        <Carousel style={{ maxWidth: "1700px", margin: "0 auto" }}>
          <Carousel.Item>
            <img  className="d-block w-100"
              style={{ height: "450px", objectFit: "cover" }}
              src="/images/o3.jpg"  alt="Slide 1"  />
          </Carousel.Item>
          <Carousel.Item>
            <img  className="d-block w-100"
              style={{ height: "450px", objectFit: "cover" }}
              src="/images/o2.jpg"  alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img  className="d-block w-100"
              style={{ height: "450px", objectFit: "cover" }}
              src="/images/o1.jpg"  alt="Slide 3"  />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="text-center">
        <Row className="justify-content-center d-flex" style={{ gap: "100px" }} >
          {[
            { src: "/images/fries.jpg", alt: "Fries" },
            { src: "/images/pizza.jpg", alt: "Pizza" },
            { src: "/images/tea.jpg", alt: "Tea" },
            { src: "/images/ham.jpg", alt: "Ham" },
            { src: "/images/salad.jpg", alt: "Salad" },
          ].map((item, idx) => (
            <Col key={idx} xs="auto" className="p-0">
              <img  src={item.src}  alt={item.alt}  className="rounded-circle img-fluid"
                style={{ width: "100px", height: "100px", objectFit: "cover" }} />
            </Col>
          ))}
        </Row>
        <h2 className="mt-4">This is Home Page</h2>
      </Container>
    </div>
  );
}

export default Home;
