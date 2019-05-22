import React, { Component, Fragment } from "react";
import { Col, Row, Container, CardImg } from "reactstrap";

import SectionTitle from "../../UI/Text/SectionTitle/SectionTitle";
import CardText from "../../UI/Text/CardText/CardText";
import CardTitle from "../../UI/Text/CardTitle/CardTitle";
import HerbImg from "../../../assets/img/herbs.png";
import Ingredients from "../../../assets/img/ingredients.png";
import Logo from "../../../assets/img/logo.png";

import "./About.css";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xs="12">
            <SectionTitle text="About Us" />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col style={{ marginTop: "100px" }} md="6" sm="12">
              <CardText>
                If you suffer from arthritis, inflammation of the joints, get
                relief with Riphi Pain Lotion. This scentless lotion helps
                soothe arthritic joints, whether it is in your knee, hip, wrist,
                fingers or other joints of the body that are aching. This lotion
                contains no fillers so you get all the plants' goodness.
              </CardText>
            </Col>
            <Col
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
              md="6"
              sm="12"
            >
              <CardImg className="Img" src={HerbImg} />
            </Col>
          </Row>
          <Row style={{ marginTop: "100px" }}>
            <Col md="6" sm="12">
              <Row>
                <Col xs="12">
                  <CardTitle text="Product Ingredients" />
                </Col>
                <Col xs="12">
                  <CardText>
                    Herbal extract, Rosemary Essential oil, Peppermint Essential
                    oil, E-wax and Shea Butter.
                  </CardText>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
              md="6"
              xs="12"
            >
              <CardImg className="Img" src={Ingredients} />
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: "100px" }}>
          <Row>
            <Col sm="12" md="6">
              <Row>
                <Col xs="12">
                  <CardTitle text="Disclaimer" />
                </Col>
                <Col xs="12">
                  <CardText>
                    Riphi Pain Lotion is not intended to diagnose, treat, cure
                    or prevent any disease. This formula has not been evaluated
                    by the Food and Drug Administration. For severe undiagnosed
                    pain, please consult your physician immediately.
                  </CardText>
                </Col>
              </Row>
            </Col>
            <Col sm="12" md="6">
              <Row>
                <Col xs="12">
                  <CardTitle text="Warnings" />
                </Col>
                <Col xs="12">
                  <CardText>
                    For external use only. When using this product, do not apply
                    to wounds or damaged skin. Do not use near the eyes, if
                    product gets to the eyes, rinse thoroughly with water. Do
                    not mix with other products
                    <br />
                    <br />
                    Stop use and ask a doctor if: A rash or irritation develops.
                    If pregnant or breastfeeding ask a health professional
                    before use.
                  </CardText>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
              xs="12"
            >
              <CardImg className="Logo-About" src={Logo} />
            </Col>
            <Col style={{ marginTop: "75px" }} md="12">
              <Row>
                <Col xs="12">
                  <CardTitle text="Shipping Info" />
                </Col>
                <Col xs="12">
                  <CardText>
                    Standard shipping costs only $5 per order, regardless of the
                    size of the order. Orders usually arrive in 5-7 business day
                    depending on which part of the country you live. Currently,
                    we do not ship outside the USA.
                  </CardText>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default About;
