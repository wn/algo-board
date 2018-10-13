import React from 'react';
import { Arrow, Circle, Shape, Group } from 'react-konva';

export default class LLNode extends React.Component {
  state = {
    shapeSourceX: 0,
    shapeSourceY: 100,
    lineEndX: 0,
    lineEndY: 0
  };

  updateLineStart = e => {
    this.setState({
      shapeSourceX: e.target.x(),
      shapeSourceY: e.target.y()
    });
  };

  updateLineEnd = e => {
    this.setState({
      lineEndX: e.target.x(),
      lineEndY: e.target.y()
    });
  };

  render() {
    return (
      <Group draggable>
        <Circle
          x={this.state.shapeSourceX}
          y={this.state.shapeSourceY}
          radius={8}
          fill
          draggable
          onDragMove={this.updateLineStart}
        />
        <Arrow
          points={[
            this.state.shapeSourceX,
            this.state.shapeSourceY,
            this.state.lineEndX,
            this.state.lineEndY
          ]}
          stroke
          strokeWidth={7}
          fill
        />
        <Circle
          x={this.state.lineEndX}
          y={this.state.lineEndY}
          radius={12}
          draggable
          onDragMove={this.updateLineEnd}
        />
      </Group>
    );
  }
}
