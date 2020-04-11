import React, { Component } from "react";
import axios from "axios";
import "../assets/bootstrap/css/bootstrap.min.css";
import "./state.css";
import Statedata from "../statedata/statedata";
import { GoSearch } from "react-icons/go";

export default class state extends Component {
  state = {
    stateList: [],
    stateNm: "",
    stateData: [],
  };

  componentDidMount = async () => {
    await this.getStateList();
  };

  getStateList = async () => {
    var ref = await axios(
      "https://api.covid19india.org/v2/state_district_wise.json"
    );

    await this.setState({ stateList: ref.data });
  };

  getData = async () => {
    if (this.state.stateNm) {
      var refData = await axios("https://api.covid19india.org/data.json");

      var district = this.state.stateNm;

      refData.data.statewise.forEach((l) => {
        if (l.state === district) {
          this.setState({ stateData: l });
        }
      });
    } else {
      this.setState({ stateData: [] });
    }
  };

  setStateName = async (e) => {
    await this.setState({ stateNm: e.target.value });

    if (this.state.stateNm.length === 0) {
      await this.setState({ stateData: [] });
    }
  };

  render() {
    return (
      <>
        <div className="search_bar_div container">
          <div className="input-group">
            <input
              type="text"
              className="form-control txb_brder input-lg"
              placeholder="Enter India States Name"
              id="inpt"
              list="cars"
              name="cars"
              value={this.state.stateNm}
              onChange={(e) => this.setStateName(e)}
              onKeyUp={(e) => (e.keyCode === 13 ? this.getData() : null)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => this.getData()}
              >
                {/* Search */}
                <GoSearch />
              </button>
            </div>
          </div>
          <datalist id="cars">
            {this.state.stateList.map((list) => (
              <option key={list.state} value={list.state}>
                {list.state}
              </option>
            ))}
          </datalist>
        </div>
        <Statedata stateData={this.state.stateData} />
      </>
    );
  }
}
