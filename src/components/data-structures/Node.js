import React from 'react';
import { Shape, Group, Circle, Text } from 'react-konva';
import Konva from 'konva';

export default class Node extends React.Component {
  state = {
    color: 'black'
  };

  render() {
    return (
      <Group draggable>
        <Circle
          radius={50}
          stroke={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
        />
      </Group>
    );
  }
}
