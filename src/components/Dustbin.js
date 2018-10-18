import React from "react";
import { Image } from "react-konva";

export default class Node extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = require("../dustbin.png");
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }

  render() {
    const { yPosition, xPosition } = this.props;
    return (
      <Image
        x={xPosition}
        y={yPosition}
        width={55}
        height={55}
        image={this.state.image}
      />
    );
  }
}
