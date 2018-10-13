import React from 'react';
import GraphNode from './GraphNode';
import { Group } from 'react-konva';

export default class GraphList extends React.Component {
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
            <GraphNode
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
