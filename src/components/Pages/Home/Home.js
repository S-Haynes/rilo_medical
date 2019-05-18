import React, { Component, Fragment } from "react";
import { Container, Col, Row, CardImg, Button } from "reactstrap";

import VideoBg from "../../UI/Video/VideoBg/VideoBg";
import Arrow from "../../../assets/img/arrow.png";
import Joints from "../../../assets/img/joints.png";
import Customer from "../../../assets/img/customer.png";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <VideoBg>
          <Container>
            <Row>
              <Col xs="12">
                <h1 className="Header">Rilo Medical</h1>
              </Col>
              <Col xs="12">
                <h1 className="Subheader 1">We Care</h1>
              </Col>
              <Col xs="12">
                <h1 className="Subheader 1">About Your Health</h1>
              </Col>
            </Row>
            <Button
              className="purchase-btn"
              size="lg"
              style={{
                letterSpacing: "1px",
                background: "rgba(109,179,64, 0.7)",
                outline: "none",
                border: "none",
                position: "relative",
                top: "50px",
                fontWeight: "800",
                boxShadow: "-10px 5px 100px rgba(109,179,64, 0.7)"
              }}
              color="success"
            >
              Our Products
            </Button>
          </Container>
          <div className="Arrow_container">
            <img className="Arrow" src={Arrow} />
          </div>
        </VideoBg>
        <div style={{ position: "relative", top: "250px" }}>
          <Container>
            <Row>
              <Col xs="12">
                <h1
                  style={{
                    color: "#000",
                    fontSize: "100px",
                    fontWeight: "800"
                  }}
                  className="text-center section-title"
                >
                  Joint Pain?{" "}
                </h1>
              </Col>

              <Col sm="12" md="6">
                <CardImg width="50%" src={Joints} />
              </Col>
              <Col sm="12" md="6">
                <p style={{ fontSize: "24px", marginTop: "75px" }}>
                  Riphi Pain Lotion helps relieve the aches and pains in any
                  part of the body.
                  <br />
                  <br />
                  If you suffer from arthritis, inflammation of the joints, get
                  relief with Riphi Pain Lotion. This scentless lotion helps
                  soothe arthritic joints, whether it is in your knee, hip,
                  wrist, fingers or other joints of the body that are aching.
                  This lotion contains no fillers so you get all the plants'
                  goodness.
                </p>
              </Col>
            </Row>
          </Container>
          <section style={{ position: "relative", height: "90vh" }}>
            <div className="dont-delay-bg" />
            <Col style={{ marginTop: "100px" }} xs="12">
              <h1
                style={{
                  color: "#000",
                  fontSize: "100px",
                  fontWeight: "800"
                }}
                className="text-center section-title"
              >
                Don't delay.
                <br />
                Feel better today!
              </h1>
              <Container>
                <Row>
                  <Col xs="4">
                    <CardImg src={Customer} />
                  </Col>
                  <Col xs="6" sm="6">
                    <Row>
                      <Col cs="12">
                        <p
                          style={{ marginTop: "100px", fontSize: "24px" }}
                          className="text-right"
                        >
                          Our Riphi Pain Lotion is proven to cure your aches and
                          pains in no time. Go ahead and try it for yourself!
                        </p>
                      </Col>
                      <Col className="text-right justify-self-end" xs="12">
                        <Button
                          style={{
                            width: "200px",
                            height: "50px"
                          }}
                          color="success"
                        >
                          Purchase
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Home;
