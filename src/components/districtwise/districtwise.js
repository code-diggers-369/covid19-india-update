import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import axios from "axios";

export default class districtwise extends Component {
  state = {
    districtData: [],
  };

  componentDidMount = async () => {
    await this.getDistrictData();
  };

  getDistrictData = async () => {
    var ref = await axios(
      "https://api.covid19india.org/v2/state_district_wise.json"
    );

    ref.data.forEach((l) => {
      if (l.state === this.props.stateName) {
        this.setState({ districtData: l.districtData });
      }
    });
  };

  componentDidUpdate = async () => {
    await this.getDistrictData();
  };

  render() {
    return (
      <div>
        {this.state.districtData.length !== 0 ? (
          <div>
            <br></br>
            <h3 className="text-dark">Confirmed Cases In District</h3>
            <Row>
              {this.state.districtData.map((list) => (
                <Col lg={4} xs={6} sm={4} key={list.district}>
                  <div
                    className="bg-light text-dark  m-1 p-2 shadow"
                    style={{ borderRadius: "20px" }}
                  >
                    <h4 style={{ fontWeight: "600", fontSize: "medium" }}>
                      {list.district}
                    </h4>
                    {list.confirmed > 20 ? (
                      <h5 style={{ color: "red" }}>{list.confirmed}</h5>
                    ) : list.confirmed > 10 ? (
                      <h5 style={{ color: "blue" }}>{list.confirmed}</h5>
                    ) : (
                      <h5>{list.confirmed}</h5>
                    )}

                    <h6>( Today New Cases {list.delta.confirmed} )</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ) : null}
      </div>
    );
  }
}
