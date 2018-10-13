import React from 'react';
import { Circle } from 'react-konva';

export default class Node extends React.Component {
  state = {
    color: 'red'
  };

  render() {
    return (
      <Circle
        radius={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
        draggable
        Text="LOL"
      />
    );
  }
}
