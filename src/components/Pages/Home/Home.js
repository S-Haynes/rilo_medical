import React, { Component, Fragment } from "react";
import { Container, Col, Row, CardImg, Button } from "reactstrap";

import VideoBg from "../../UI/Video/VideoBg/VideoBg";
import Arrow from "../../../assets/img/arrow.png";
import Joints from "../../../assets/img/joints.png";
import Customer from "../../../assets/img/customer.png";
import SectionTitle from "../../UI/Text/SectionTitle/SectionTitle";
import CardText from "../../UI/Text/CardText/CardText";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <VideoBg>
          <Container>
            <Row>
              <Col xs="12">
                <h1 className="Header">Rilo Natural</h1>
              </Col>
              <Col xs="12">
                <h1 className="Subheader">We Care</h1>
              </Col>
              <Col xs="12">
                <h1 className="Subheader">About Your Health</h1>
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
        <div className="joint-pain-section">
          <Container>
            <Row>
              <Col xs="12">
                <SectionTitle text="Joint Pain?" />
              </Col>

              <Col sm="12" md="6">
                <CardImg width="50%" src={Joints} />
              </Col>
              <Col sm="12" md="6">
                <CardText
                  text="Riphi Pain Lotion helps relieve the aches and pains in any
                  part of the body."
                  text2=" If you suffer from arthritis, inflammation of the joints, get
                  relief with Riphi Pain Lotion. This scentless lotion helps
                  soothe arthritic joints, whether it is in your knee, hip,
                  wrist, fingers or other joints of the body that are aching.
                  This lotion contains no fillers so you get all the plants'
                  goodness."
                />
              </Col>
            </Row>
          </Container>
          <section style={{ position: "relative" }}>
            <div className="dont-delay-bg" />
            <Col style={{ marginTop: "100px" }} xs="12">
              <SectionTitle text="Dont Delay." text2="Feel Better Today!" />
              <Container>
                <Row>
                  <Col xs="12" sm="6">
                    <Row>
                      <Col xs="12">
                        <CardText
                          text=" Our Riphi Pain Lotion is proven to cure your aches and
                          pains in no time. Go ahead and try it for yourself!"
                        />
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
                  <Col xs="12" sm="6">
                    <CardImg
                      className="Customer"
                      style={{ maxWidth: "330px" }}
                      src={Customer}
                    />
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
