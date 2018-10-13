import React from 'react';
import { Text } from 'react-konva';
import Konva from 'konva';

export default class EditableText extends React.Component {

  state = {
    x: 0,
    y: 0,
    text: 'null',
  };

  onTextClick (text) {
    return (e) => {
      const newText = prompt('Please enter some new text', text);
      this.setState({
        ...this.state,
        text: !newText ? "null" : newText.trim() ? newText.trim() : "null"
      });
    }
  }

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
        text={this.props.text || this.state.text}
        align="center"
        verticalAlign="middle"
        fill={'black'}
        onClick={this.onTextClick(this.state.text)}
      />
    );
  }
}
