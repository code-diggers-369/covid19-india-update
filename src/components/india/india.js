import React, { Component } from "react";

import axios from "axios";

export default class india extends Component {
  state = {
    loading: true,
    india: [],
  };

  componentDidMount = async () => {
    this.getCountryData();
  };

  getCountryData = async () => {
    var ref = await axios("https://corona.lmao.ninja/countries/India");

    this.setState({ india: ref.data, loading: false });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="justify-content-center align-items-center">
            <h3>Loading...</h3>
          </div>
        ) : (
          <div className="container">
            <div className="d-sm-flex col-md-6 col-xl-6 mb-4 justify-content-center align-items-center mb-4">
              <h3 className="text-dark mb-0">India Status</h3>
            </div>

            <div className="col-md-12 col-xs-12 col-sm-12 col-xl-12 mb-4">
              <div className="card shadow border-left-warning">
                <div className="card-body bg-info">
                  <div className="row align-items-center no-gutters">
                    <div className="col mr-2">
                      <div className="text-light font-weight-bold text-xs mb-3">
                        <span>Active Case</span>
                      </div>
                      <div className="text-light font-weight-bold h5 mb-0">
                        <span>{this.state.india.active}</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <br/> */}
            <div className="col-md-12 col-sm-12 col-xs-12 col-xl-12 mb-4">
              <div className="card shadow border-left-danger">
                <div className="card-body bg-danger">
                  <div className="row align-items-center no-gutters">
                    <div className="col mr-2">
                      <div className="text-light font-weight-bold text-xs mb-3">
                        <span>Total Deaths</span>
                      </div>
                      <div className="text-light font-weight-bold h5 mb-0">
                        <span>{this.state.india.deaths}</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <br/> */}
            <div className="col-md-12 col-sm-12 col-xs-12 col-xl-12 mb-4">
              <div className="card shadow border-left-success">
                <div className="card-body bg-success">
                  <div className="row align-items-center no-gutters">
                    <div className="col mr-2">
                      <div className="text-light font-weight-bold text-xs mb-3">
                        <span>Recovered</span>
                      </div>
                      <div className="text-light font-weight-bold h5 mb-0">
                        <span>{this.state.india.recovered}</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
