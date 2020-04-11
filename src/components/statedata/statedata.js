import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "../assets/bootstrap/css/bootstrap.min.css";
import District from "../districtwise/districtwise";

import "./statedata.css";

export default class statedata extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.stateData.length !== 0 ? (
            <div className="container mt-3 text-light ">
              <div className="back p-2 ">
                <div>
                  <center>
                    <div>
                      <h2 className="text-dark">
                        {this.props.stateData.state}
                      </h2>
                    </div>
                    <div className="">
                      <Row className="p-3">
                        <Col className="text-light col m-1 items shadow active-cases">
                          <div className="heading">Activated Cases</div>
                          <div className="value">
                            {this.props.stateData.active}
                          </div>
                        </Col>
                        <Col className="text-light col m-1 items shadow confirm">
                          <div className="heading">Confirm Cases</div>
                          <div className="value">
                            {this.props.stateData.confirmed}
                          </div>
                        </Col>
                        <Col className="text-light col m-1 items shadow total-death">
                          <div className="heading">Total Num Deaths</div>
                          <div className="value">
                            {this.props.stateData.deaths}
                          </div>
                        </Col>
                        <Col className="text-light col m-1 items shadow recovered">
                          <div className="heading">Total Recovered</div>
                          <div className="value">
                            {this.props.stateData.recovered}
                          </div>
                        </Col>
                        <Col className="text-text col m-1 items shadow today-death">
                          <div className="heading">Today New Cases</div>
                          <div className="value">
                            {this.props.stateData.deltaconfirmed}
                          </div>
                        </Col>
                        <Col className="text-light col m-1 items shadow update">
                          <div className="heading">Last Update Time</div>
                          <div className="value">
                            {this.props.stateData.lastupdatedtime}
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <District stateName={this.props.stateData.state} />
                    </div>
                  </center>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
