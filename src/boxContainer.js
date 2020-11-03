import React, { Component } from "react"
import Box from "./box"
import "./BoxContainer.css"

class BoxContainer extends Component {
  static defaultProps = {
    numboxes: 18,
    allColors: ["purple", "magenta", "violet", "pink"],
  }
  render() {
    const boxes = Array.from({ length: this.props.numboxes }).map(() => (
      <Box colors={this.props.allColors} />
    ))
    return <div className="BoxConainer">{boxes}</div>
  }
}

export default BoxContainer
