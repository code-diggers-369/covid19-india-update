import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import India from "./components/india/india";
import State from "./components/state/state";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid p-3 main">
        <Header />

        <center>
          <button
            className="btn btn-dark mt-2"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </center>

        <center>
          <div className="container main p-3 mt-3">
            <State />
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <India />
              </Col>

              <Col xs={12} sm={12} md={12} lg={12}>
                <Footer />
              </Col>
            </Row>
          </div>
        </center>
      </div>
    );
  }
}
