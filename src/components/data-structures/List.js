import React from 'react';
import { Shape } from 'react-konva';

export default class List extends React.Component {
  state = {
    startX: 0,
    startY: 0
  };

  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          console.log(this.props.num);
          context.beginPath();
          for (var i = 0; i < this.props.num; i++) {
            context.moveTo(10 + 50 * i, 10);
            context.lineTo(60 + 50 * i, 10);
            context.lineTo(60 + 50 * i, 60);
            context.lineTo(10 + 50 * i, 60);
            context.closePath();
          }
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
