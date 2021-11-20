import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import "./state.css";

import District from "../districtwise/districtwise";

export default class state extends Component {
  state = {
    stateData: [],
    indiaData: {},
  };

  componentDidMount = async () => {
    await this.getData();
  };

  getData = async () => {
    var { data } = await axios(
      "https://covid-api.mmediagroup.fr/v1/cases?country=India"
    );

    const finalList = [];

    for (const StateNameKey in data) {
      if (StateNameKey !== "All") {
        finalList.push({
          name: StateNameKey,
          data: data[StateNameKey],
        });
      }
    }

    this.setState({
      stateData: finalList,
      indiaData: data["All"],
    });
  };

  render() {
    return (
      <div>
        {this.state.stateData.length !== 0 ? (
          <div className="container-fluid mt-3 text-light ">
            <div className="back p-3 ">
              <div>
                <center>
                  <div>
                    <h2 className="text-dark">
                      {this.state.indiaData.country}
                    </h2>
                  </div>
                  <div className="">
                    <Row className="p-3  ">
                      <Col className="text-light p-3 col m-1 items shadow active-cases">
                        <div className="heading">Population</div>
                        <div className="value">
                          {this.state.indiaData.population}
                        </div>
                      </Col>
                      <Col className="text-light p-3 col m-1 items shadow confirm">
                        <div className="heading">Confirm </div>
                        <div className="value">
                          {this.state.indiaData.confirmed}
                        </div>
                      </Col>
                      <Col className="text-light p-3 col m-1 items shadow total-death">
                        <div className="heading">Deaths</div>
                        <div className="value">
                          {this.state.indiaData.deaths}
                        </div>
                      </Col>
                      <Col className="text-light p-3 col m-1 items shadow recovered">
                        <div className="heading">Recovered</div>
                        <div className="value">
                          {this.state.indiaData.recovered}
                        </div>
                      </Col>
                      <Col className="text-light p-3 col m-1 items shadow update">
                        <div className="heading">Last Update</div>
                        <div className="value">
                          {this.state.stateData[0].data.updated}
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <District stateData={this.state.stateData} />
                  </div>
                </center>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
