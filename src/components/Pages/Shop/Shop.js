import React, { Component, Fragment } from "react";

import { Col, Row, CardImg, Container, Button } from "reactstrap";
import SectionTitle from "../../UI/Text/SectionTitle/SectionTitle";
import CardText from "../../UI/Text/CardText/CardText";
import HerbImg from "../../../assets/img/herbs.png";

class Shop extends Component {
  render() {
    return (
      <Fragment>
        <SectionTitle text="Shop" />
        <Container>
          <Row>
            <Col md="6" sm="12">
              <CardImg src={HerbImg} />
            </Col>
            <Col md="6" sm="12">
              <CardText>
                <b>Product</b> : Riphi Pain Lotion
                <br />
                <b className="mt-4">Description</b> : Riphi Pain Lotion
                alleviates fever and improves a variety of skin conditions.1 oz.
                jar.
                <br />
                <b className="mt-4">Details</b> : Cures and provides ailment
                towards simple backache, knee pain, neck pain, hand pain,
                headache, foot pain and stiffness.
                <br />
                <b className="mt-4">Price</b> : $15.00
                <br />
                <b className="mt-4">Shipping</b> : $5.00
                <br />
                <a
                  href="https://www.paypal.com/webapps/shoppingcart?mfid=1558503213839_49ac3e813d73b&flowlogging_id=49ac3e813d73b#/checkout/shoppingCart"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button className="mt-4" color="success" block={true}>
                    ADD TO CART
                  </Button>
                </a>
              </CardText>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Shop;
