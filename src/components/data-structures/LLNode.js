import React from 'react';
import { Shape } from 'react-konva';

export default class LLNode extends React.Component {
  state = {
    startX : 0,
    startY : 0,
  };

  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(10,10);
          context.lineTo(60, 10);
          context.lineTo(60, 60);
          context.lineTo(10, 60);
          context.closePath();
          context.moveTo(60, 10);
          context.lineTo(110, 10);
          context.lineTo(110, 60);
          context.lineTo(60, 60);
          context.closePath();
          // (!) Konva specific method, it is very important
          context.fillStrokeShape(shape);
        }}
        stroke="black"
        strokeWidth={4}
        draggable
      />
    );
  }
}
