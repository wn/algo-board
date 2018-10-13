import React from 'react';
import { Rect } from 'react-konva';

export default class Node extends React.Component {
  state = {
    color: 'black'
  };

  render() {
    return (
      <Rect
        x={this.props.x + this.props.displacement * 50}
        y={this.props.y}
        width={50}
        height={50}
        stroke={this.state.color}
        strokeWidth={4}
        onDragMove={this.props.dragHandle}
        draggable
      />
    );
  }
}
