import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-konva';

/**
 * Required props:
 *
 * @prop x - x coord
 * @prop y - y coord
 * @prop text - text to display
 * @prop parentId - id of root shape to modify
 */
class EditableText extends React.Component {

  onTextClick = (parentId, text) => {
    return e => {
      const newText = prompt('Please enter some new text', text);
      this.props.updateText(
        parentId,
        !newText ? 'null' : newText.trim() ? newText.trim() : 'null'
      );
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
        ownClick={this.onTextClick(parentId, text)}
      />
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  updateText: (parentId, text) =>
    dispatch({
      type: 'UPDATE_SHAPE_STATE',
      payload: { shapeState: {text}, id: parentId.toString() }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableText);
