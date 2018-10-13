import React from 'react';
import { Text } from 'react-konva';
import Konva from 'konva';

export default class EditableText extends React.Component {

  state = {
    x: 0,
    y: 0,
    text: 'node',
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

  render(props) {
    /** Set default x and y as 0 */
    const {x, y} = {
      x: this.state.x,
      y: this.state.y,
      ...props,
    }

    return (
      <Text
        text={this.state.text}
        fill={'black'}
        onClick={this.onTextClick(this.state.text)}
      />
    );
  }
}
