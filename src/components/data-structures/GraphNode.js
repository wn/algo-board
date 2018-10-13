import React from 'react';
import { Circle, Group } from 'react-konva';

import EditableText from './EditableText';

export default class GraphNode extends React.Component {
  state = {
    color: 'black',
    text: 'null',
    radius: 50,
    x: 50,
    y: 50
  };

  handleDragEnd() {
    return e => {
      this.setState({
        ...this.state,
        x: e.target.x(),
        y: e.target.y()
      });
    };
  }

  setText = () => {
    const newText = prompt('Please enter some new text', this.state.text);
    this.setState({
      text: newText
    });
  };

  spawnArrow = () => {
  }

  render(props) {
    /** Set default x and y as 0 */
    const { x, y } = {
      x: this.state.x,
      y: this.state.y,
      ...props
    };

    var diameter = 2 * this.state.radius;

    return (
      <Group
        x={
          x === 50 && this.props.displacement
            ? x + this.props.displacement * diameter
            : x
        }
        y={y}
        onDragEnd={this.handleDragEnd(this)}
        draggable
      >
        <Circle
          radius={this.state.radius}
          strokeWidth={4}
          stroke={this.state.color}
          onClick={this.spawnArrow}
        />
        <EditableText 
          text={this.props.text || this.state.text} 
          onClick={this.setText}
        />
      </Group>
    );
  }
}
