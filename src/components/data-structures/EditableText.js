import React from 'react';
import { Text } from 'react-konva';
import Konva from 'konva';

export default class EditableText extends React.Component {

  state = {
    x: 0,
    y: 0,
  };

  render() {
    const {x, y} = {
      x: this.state.x,
      y: this.state.y,
      ...this.props,
    }

    return (
      <Text
        x={x}
        y={y}
        text={this.props.text}
        align="center"
        verticalAlign="middle"
        fill={'black'}
      />
    );
  }
}
