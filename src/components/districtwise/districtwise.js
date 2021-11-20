import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import axios from "axios";

export default class districtwise extends Component {
  render() {
    return (
      <div>
        {this.props.stateData.length !== 0 ? (
          <div>
            <br></br>
            {/* <h3 className="text-dark">Confirmed Cases In District</h3> */}
            {/* <Row> */}
            <div className="row row-cols-1 row-cols-md-3 g-4 text-dark">
              {this.props.stateData.map((list, i) => {
                return (
                  <div className="col mt-3 " key={i}>
                    <div
                      className="card h-100 shadow"
                      style={{ borderRadius: "20px" }}
                    >
                      <div
                        className="card-header "
                        style={{ borderRadius: "20px" }}
                      >
                        <h4>{list.name}</h4>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title ">
                          Confirmed{" "}
                          <span className="text-primary ml-2">
                            {list.data.confirmed}
                          </span>
                        </h5>
                        <h5 className="card-title ">
                          Deaths{" "}
                          <span className="text-danger ml-2">
                            {list.data.deaths}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>

                  // <Col lg={4} xs={6} sm={4} key={list.district} key={i}>
                  //   <div
                  //     className="bg-light text-dark  m-1 p-2 shadow"
                  //     style={{ borderRadius: "20px" }}
                  //   >
                  //     <h4 style={{ fontWeight: "600", fontSize: "medium" }}>
                  //       {list.name}
                  //     </h4>
                  //     Confirmed
                  //     <span style={{ color: "red", marginLeft: "7px" }}>
                  //       {list.data.confirmed}
                  //     </span>
                  //     <br />
                  //     Deaths
                  //     <span style={{ color: "red", marginLeft: "7px" }}>
                  //       {list.data.deaths}
                  //     </span>
                  //     <br />
                  //     {/* <h6>( Today New Cases {list.delta.confirmed} )</h6> */}
                  //   </div>
                  // </Col>
                );
              })}
              {/* </Row> */}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
