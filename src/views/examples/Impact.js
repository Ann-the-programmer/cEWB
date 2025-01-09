import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Impact() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Junior-Fellows-1.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <h3>
                    JUNIOR FELLOWSHIP PROGRAM
                  </h3>
                  <p>
                   EWB's in-country Fellowship program recruits outstanding 
                   leaders-typically post-graduate students and professionals-to
                   pair with innovating African ventures in a 12-month placement. 
                   Through providing expert support and collaboration, EWB Fellows 
                   equip ventures with the essential talent required to accelerate 
                   and sustain their growth while also growing their professional 
                   portfolio in a new location.
                  </p>
                  <div className="find-more-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="https://www.ewb.ca/en/what-we-do/investing-in-people/junior-fellowship/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find out more
                  </Button>
                </div>
                </Col>
                <Col xs={12}>
                  <hr className="horizontal-separator" />
                </Col>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/vtx-image.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <h3>
                    VIRTUAL TALENT XCHANGE (VTX)
                  </h3>
                  <p>
                  The Virtual Talent xChange provides an opportunity to hone volunteers’ 
                  professional and practical skills  in a completely remote setting. The 
                  platform works to  support  innovative seed-stage social ventures in 
                  sub-Saharan Africa succeed by meeting their diverse talent needs in the
                  areas of business modeling, marketing, UX/UI design, fundraising and more.
                  </p>
                  <div className="find-more-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="https://www.ewb.ca/en/what-we-do/investing-in-people/virtual-talent-xchange/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find out more
                  </Button>
                </div>
                </Col>
                <Col xs={12}>
                  <hr className="horizontal-separator" />
                </Col>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/canada-africa-innovation.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <h3>
                    CANADA-AFRICA INNOVATION FELLOWSHIP PROGRAM
                  </h3>
                  <p>
                  The Canada-Africa Innovation Fellowship partners young leaders from 
                  Canada and Africa to learn, create, and accelerate ideas as a way 
                  to build a sustainable and inclusive future. A unique chance for 
                  university students to grow their leadership, entrepreneurial and 
                  innovation capacity while engaging in cultural, academic and professional 
                  exchange.
                  </p>
                  <div className="find-more-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="https://www.ewb.ca/en/what-we-do/investing-in-people/canada-africa-innovation-fellowship/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find out more
                  </Button>
                </div>
                </Col>
                <Col xs={12}>
                  <hr className="horizontal-separator" />
                </Col>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/ewb-fellowship.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <h3>
                    EWB FELLOWSHIP
                  </h3>
                  <p>
                  The EWB Fellowship program recruits outstanding leaders - 
                  typically post-graduate students and professionals - to 
                  pair with innovative African ventures in a 12-month placement. 
                  Through providing expert support and collaboration, EWB Fellows 
                  equip ventures with the essential talent required to accelerate 
                  and sustain their growth.
                  </p>
                  <div className="find-more-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="https://www.ewb.ca/en/what-we-do/investing-in-people/the-ewb-fellowship/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find out more
                  </Button>
                </div>
                </Col>
                <Col xs={12}>
                  <hr className="horizontal-separator" />
                </Col>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/kumwana_fellowship.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <h3>
                    KUMVANA FELLOWSHIP
                  </h3>
                  <p>
                  The Kumvana Fellowship program provides African innovators 
                  with a platform to network, develop skills and collaborate 
                  with like-minded leaders: both from their local communities 
                  and from the wider global EWB ecosystem.
                  </p>
                  <div className="find-more-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="https://www.ewb.ca/en/what-we-do/investing-in-people/kumvana-fellowship/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find out more
                  </Button>
                </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to join our newsletter?</h2>
            <p className="description">Stay up to date on all things EWB!</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>

                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Impact;
