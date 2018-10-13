import React from 'react';
import { Circle, Group } from 'react-konva';

import EditableText from './EditableText';

export default class GraphNode extends React.Component {
  state = {
    color: 'black',
    text: 'node',
    radius: 50,
    x: 50,
    y: 50
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
    const { x, y } = {
      x: this.state.x,
      y: this.state.y,
      ...props
    };

    var diameter = this.state.radius * 2;

    return (
      <Group x={x + this.props.displacement * diameter} y={y} onDragEnd={this.handleDragEnd(this)} onClick={this.setText} draggable>
        <Circle radius={this.state.radius} stroke={this.state.color} />
        <EditableText text={this.props.text} />
      </Group>
    );
  }
}
