import React, { Component, Fragment } from "react";
import SectionTitle from "../../UI/Text/SectionTitle/SectionTitle";
import { Col, Row, Container } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ marginBottom: "100px" }}>
          <SectionTitle text="Contact Us" />
        </div>

        <Col style={{ height: "50vh" }} sm="12" md="6">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Fort%20Lauderdale%20FL%+(Rilo%20Natural)&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          />
        </Col>
      </Fragment>
    );
  }
}

export default Contact;
