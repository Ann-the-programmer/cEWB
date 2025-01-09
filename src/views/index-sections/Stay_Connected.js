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

function Stay_connected() {
  return (
    <>
      <style>{styles}</style>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
          <Row className="row-eq-height">
            <Col md={4} className="mb-4">
              <Card className="card-signup" data-background-color="blue">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    <i className="now-ui-icons business_bank"></i><br />
                    MEET THE TEAM
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p>Our chapter is powered by forward-thinking, problem solving, and hardworking change-makers. Get to know some of the people involved in our community.</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-signup" data-background-color="orange">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                  <i className="now-ui-icons location_map-big"></i><br />
                    BE A PART OF US
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p>If you're ready to play a key role in sparking profound and strategic social change, we'd love to collaborate. Join us today and contribute to a better tomorrow.</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Join Us
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-signup" data-background-color="green">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                  <i className="now-ui-icons gestures_tap-01"></i><br />
                    JOIN THE CONVO
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p>Keep up with our latest chapter developments: wherever you are and whenever you need to. Sign up for email updates, join our Discord, or follow us on our socials to stay up-to-date on events and news!</p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Connect
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

export default Stay_connected;