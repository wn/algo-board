import React from 'react';
import { Rect } from 'react-konva';

export default class Node extends React.Component {
  render() {
    return (
      <Rect
        x={this.props.x + this.props.displacement * 50}
        y={this.props.y}
        width={50}
        height={50}
        stroke={'black'}
        strokeWidth={4}
      />
    );
  }
}
