import React from 'react';
import { Circle, Group, Shape, Text } from 'react-konva';
import Konva from 'konva';

import LLNode from './LLNode'

export default class GraphNode extends React.Component {

  state = {
    color: 'black',
    text: 'node',
    x: 0,
    y: 0
  };

  onTextClick (text) {
    return (e) => {
      const newText = prompt('Please enter some new text', text);
      this.setState({
        ...this.state,
        text: newText
      });
    }
  }

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
        onClick={this.onTextClick(this.state.text)} 
        onDragEnd={this.handleDragEnd(this)}
        draggable>
        <Text
          text={this.state.text}
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
