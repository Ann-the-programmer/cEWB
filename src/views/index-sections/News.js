import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// Add this CSS either in a separate CSS file or using a CSS-in-JS solution
const styles = `
  .card-signup {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-body p {
    margin-bottom: 0;
  }
`;

function News() {
  return (
    <>
      <style>{styles}</style>
      <div className="section section-signup" data-background-color="black" >
        <Container>
            <h1><b>News</b></h1>
        </Container>
        <Container>
          <Row className="row-eq-height">
            <Col md={3} className="mb-4">
              <Card className="card-signup" data-background-color="yellow">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    <i className="now-ui-icons business_bank"></i><br />
                    EXAMPLE
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p>This is where the info about the news would be</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="card-signup" data-background-color="yellow">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    <i className="now-ui-icons business_bank"></i><br />
                    EXAMPLE
                  </CardTitle>
                </CardHeader>
                <CardBody>
                    <p>This is where the info about the news would be</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="card-signup" data-background-color="yellow">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    <i className="now-ui-icons business_bank"></i><br />
                    EXAMPLE
                  </CardTitle>
                </CardHeader>
                <CardBody>
                    <p>This is where the info about the news would be</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="card-signup" data-background-color="yellow">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    <i className="now-ui-icons business_bank"></i><br />
                    EXAMPLE
                  </CardTitle>
                </CardHeader>
                <CardBody>
                    <p>This is where the info about the news would be</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default News;