import React from 'react';
import { Circle, Group, Shape, Text } from 'react-konva';
import Konva from 'konva';

import LLNode from './LLNode'
import EditableText from './EditableText'

export default class GraphNode extends React.Component {

  state = {
    color: 'black',
    text: 'node',
    x: 0,
    y: 0
  };

  handleDragEnd() {
    return (e) => {
      this.setState({
        ...this.state,
        x: e.target.x(),
        y: e.target.y()
      })
    }
  }

  render(props) {
    /** Set default x and y as 0 */
    const {x, y} = {
      x: this.state.x,
      y: this.state.y,
      ...props,
    }

    return (
      <Group 
        x={x}
        y={y}
        onDragEnd={this.handleDragEnd(this)}
        draggable>
        <Circle
          radius={50}
          stroke={this.state.color}
          shadowBlur={5}
        />
        <EditableText />
      </Group>
    );
  }
}
