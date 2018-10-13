import React from 'react';
import { Circle, Group, Shape, Text } from 'react-konva';
import Konva from 'konva';

import LLNode from './LLNode'

export default class Node extends React.Component {

  state = {
    color: 'black'
  };

  render(props) {
    /** Set default x and y as 0 */
    const {x, y} = {
      x: 40,
      y: 40,
      ...props,
    }

    return (
      <Group 
        x={x}
        y={y}
        draggable>
        <Text
          text={'asdf'}
          fill={this.state.color}
        />
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
