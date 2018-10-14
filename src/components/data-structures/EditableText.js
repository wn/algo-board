import React from 'react';
import { Text } from 'react-konva';

/**
 * Required props:
 *
 * @prop x - x coord
 * @prop y - y coord
 * @prop text - text to display
 * @prop parentId - id of root shape to modify
 */
export default class EditableText extends React.Component {

  onTextClick(text) {
    return e => {
      const newText = prompt('Please enter some new text', text);
      this.updateState({
        text: !newText ? 'null' : newText.trim() ? newText.trim() : 'null'
      });
    };
  }

  render() {
    const { x, y, text, parentId } = {
      ...this.props
    };

    return (
      <Text
        x={x}
        y={y}
        text={text}
        align="center"
        verticalAlign="middle"
        fill={'black'}
      />
    );
  }
}
