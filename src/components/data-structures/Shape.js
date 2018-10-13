import React from 'react';
import { Shape } from 'react-konva';

export default class Shapesss extends React.Component {
  state = {
    startX: 0,
    startY: 0
  };

  render() {
    return (
      <Shape
        x={50}
        y={50}
        text="Some tadfasdfdsfasdfext"
        fill="red"
        stroke="black"
        strokeWidth={4}
        draggable
        sceneFunc={function sceneFunc(context, shape) {
          context.setAttr('textBaseline', 'ideographic');
          context.fillText(this.getAttr('text'), 0, 0);
          context.beginPath();
          context.moveTo(10, 10);
          context.lineTo(60, 10);
          context.lineTo(60, 60);
          context.lineTo(10, 60);
          context.closePath();
          context.moveTo(60, 10);
          context.lineTo(110, 10);
          context.lineTo(110, 60);
          context.lineTo(60, 60);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
      />
    );
  }
}
