import React from 'react';
import { connect } from 'react-redux';
import { Circle, Group } from 'react-konva';

import EditableText from './EditableText';

class GraphNode extends React.Component {
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
          onClick={this.props.addPointer}
        />
        <EditableText 
          text={this.props.text || this.state.text} 
          onClick={this.setText}
        />
      </Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shapeState: state.konva.dataStructures[ownProps.shapeId]
  }
};

const mapDispatchToProps = dispatch => ({
  addPointer: () => dispatch({
    type: "ADD_STRUCTURE", payload: { structureName: 'Pointer', id: Math.round(Math.random()*1000).toString(), x: 0, y: 0 }
  }),
  updateState: (id, shapeState) => dispatch({
    type: "UPDATE_SHAPE_STATE", payload: { shapeState, id: id.toString() }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphNode);
