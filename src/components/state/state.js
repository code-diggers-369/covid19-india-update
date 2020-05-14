import React, { Component } from "react";
import axios from "axios";
// import "../assets/bootstrap/css/bootstrap.min.css";
import "./state.css";
import Statedata from "../statedata/statedata";
// import { GoSearch } from "react-icons/go";

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

    var order = await this.sortingData(ref);

    await this.setState({ stateList: order });
  };

  sortingData = async (ref) => {
    var data = await ref.data.sort((a, b) => {
      var state1 = a.state.toUpperCase();
      var state2 = b.state.toUpperCase();

      if (state1 < state2) {
        return -1;
      }
      if (state1 > state2) {
        return 1;
      }

      return 0;
    });

    return data;
  };

  getData = async () => {
    if (this.state.stateNm) {
      var refData = await axios("https://api.covid19india.org/data.json");

      var district = this.state.stateNm;

      await refData.data.statewise.forEach((l) => {
        if (l.state === district) {
          this.setState({ stateData: l });
        }
      });
    } else {
      await this.setState({ stateData: [] });
    }
  };

  setStateName = async (e) => {
    await this.setState({ stateNm: e.target.value });

    if (this.state.stateNm === "Select State") {
      await this.setState({ stateData: [] });
    }

    this.getData();
  };

  render() {
    return (
      <div>
        <div className="search_bar_div container">
          <h3>Select State From List</h3>
          <select className="box mb-3" onChange={(e) => this.setStateName(e)}>
            <option>Select State</option>
            {this.state.stateList.map((list) => (
              <option key={list.state} value={list.state}>
                {list.state}
              </option>
            ))}
          </select>
        </div>

        <Statedata stateData={this.state.stateData} />
      </div>
    );
  }
}
