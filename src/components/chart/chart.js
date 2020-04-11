import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

import "./chart.css";

export default class chart extends Component {
  state = {
    stateList: [],
    colorsArray: [],
    confirmData: [],
  };

  getStatesData = async () => {
    await this.getStateData();

    await this.addColorsInArray();
  };

  getStateData = async () => {
    var data = await axios("https://api.covid19india.org/data.json");

    var stateList = [];

    var confirmData = [];

    var statename = await data.data.statewise.map((list) => {
      if (list.state != "Total") {
        stateList.push(list.state);
        confirmData.push(list.confirmed);
      }
    });

    await this.setState({ confirmData: confirmData, stateList: stateList });
  };

  componentDidMount = async () => {
    await this.getStatesData();
  };

  getRandomColor = async () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    var color =
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")";

    return color;
  };

  addColorsInArray = async () => {
    var colorList = [];
    for (var i = 0; i < this.state.stateList.length; i++) {
      var color = await this.getRandomColor();
      colorList.push(color);
    }

    await this.setState({ colorsArray: colorList });
  };

  render() {
    return (
      <div className="container main-div mt-4">
        <div>
          <h3>Chart Of State Wise Confirm Cases</h3>
        </div>
        {this.state.stateList.length !== 0 &&
        this.state.colorsArray.length !== 0 ? (
          <Pie
            options={{ maintainAspectRatio: false }}
            height={500}
            width={500}
            data={{
              labels: this.state.stateList,
              datasets: [
                {
                  label: "hp",
                  backgroundColor: this.state.colorsArray,
                  data: this.state.confirmData,
                },
              ],
            }}
          />
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    );
  }
}
