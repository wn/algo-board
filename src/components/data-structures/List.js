import React from 'react';
import SquareNode from './SquareNode';
import { Group } from 'react-konva';

export default class List extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  render() {
    const values = [];
    this.props.values
      .split(", ").map(x => x.trim())
      .forEach((val) => {
        console.log(val);
        values.push(val);
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
