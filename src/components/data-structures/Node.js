import React from 'react';
import { Circle, Group, Shape, Text } from 'react-konva';
import Konva from 'konva';

import LLNode from './LLNode'

export default class Node extends React.Component {

  state = {
    color: 'black',
    text: 'node'
  };

  onTextClick (text) {
    return (e) => {
      const newText = prompt('Please enter some new text', text);
    }
  }

  render(props) {
    /** Set default x and y as 0 */
    const {x, y} = {
      x: 0,
      y: 0,
      ...props,
    }

    return (
      <Group x={x} y={y} onClick={this.onTextClick(this.state.text)} draggable>
        <Text
          x={x}
          y={y}
          text={this.state.text}
          fill={this.state.color}
        />
        <Circle
          x={x}
          y={y}
          radius={50}
          stroke={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
        />
      </Group>
    );
  }
}
