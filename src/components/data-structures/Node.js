import React from 'react';
import { Shape, Circle, Text } from 'react-konva';
import Konva from 'konva';

export default class Node extends React.Component {
  state = {
    color: 'black'
  };

  render() {
    return (
      <Circle
        radius={50}
        stroke={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
        draggable
      />
    );
  }
}
