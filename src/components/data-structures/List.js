import React from 'react';
import SquareNode from './SquareNode';
import { Group } from 'react-konva';

export default class List extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  render() {
    const values = new Array(this.props.size).fill(null);
    this.props.values
      .split(',')
      .map(x => x.trim())
      .map((val, index) => {
        values[index] = val;
      });

    return (
      <Group draggable>
        {values.map((val, index) => {
          return (
            <SquareNode
              key={index}
              displacement={index}
              x={this.state.x}
              y={this.state.y}
              text={val}
            />
          );
        })}
      </Group>
    );
  }
}
