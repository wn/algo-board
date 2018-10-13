import React from 'react';
import { Rect } from 'react-konva';

export default class Data extends React.Component {
  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={200}
        height={50}
        stroke={'black'}
        strokeWidth={4}
      />
    );
  }
}
