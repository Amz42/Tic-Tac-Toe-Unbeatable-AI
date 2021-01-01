import React, { Component } from "react";
import "./styles.css";

class Cell extends Component {
  render() {
    const { val, index } = this.props;
    return (
      <>
        <div
          className={"cell " + (val === "" ? "" : val === "X" ? "x" : "circle")}
          data-cell
          onClick={() => this.props.nextMove(index)}
        ></div>
      </>
    );
  }
}

export default Cell;
