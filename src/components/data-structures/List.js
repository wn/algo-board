import React from 'react';
import SquareNode from './SquareNode';
import { Group } from 'react-konva';

export default class List extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  render() {
    return (
      <Group draggable>
        {new Array(this.props.num).fill(null).map((val, index) => {
          return (
            <SquareNode
              key={index}
              displacement={index}
              x={this.state.x}
              y={this.state.y}
            />
          );
        })}
      </Group>
    );
  }
}
