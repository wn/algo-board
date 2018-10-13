import React from 'react';
import { Circle, Group, Shape, Text } from 'react-konva';
import Konva from 'konva';

import LLNode from './LLNode'
import EditableText from './EditableText'

export default class GraphNode extends React.Component {

  state = {
    color: 'black',
    x: 0,
    y: 0,
    text: ""
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

  setText = () => {
    const newText = prompt('Please enter some new text', this.state.text);
    this.setState({
      text: newText
    });
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
        draggable
        onClick={this.setText} >
        <Circle
          radius={50}
          stroke={this.state.color}
          shadowBlur={5}
        />
        <EditableText text={this.state.text} />
      </Group>
    );
  }
}
