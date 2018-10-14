import React from 'react';
import { connect } from 'react-redux';
import { Circle, Group } from 'react-konva';

import EditableText from './EditableText';

class GraphNode extends React.Component {
  state = {
    color: 'black',
    text: 'null',
    radius: 20,
  };

  updateLineStart = e => {
    this.props.updateState(
      this.props.shapeId,
      {
        ...this.props.shapeState,
        shapeSourceX: e.target.x(),
        shapeSourceY: e.target.y(),
      }
    );
    Object.keys(this.props.pointingToThis).forEach(shapeId => {
      if (!this.props.pointingToThis[shapeId]
        || !this.props.pointingFrom[shapeId][this.props.shapeId]) return;
      this.props.updateState(
        shapeId,
        {
          ...this.props.allDataStructures[shapeId],
          lineEndX: e.target.x(),
          lineEndY: e.target.y(),
        }
      );
    });
  }

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
    const { shapeSourceX, shapeSourceY, text } = this.props.shapeState;

    var diameter = 2 * this.state.radius;

    return (
      <Group
        x={shapeSourceX}
        y={shapeSourceY}
        onDragMove={this.updateLineStart}
        draggable
      >
        <Circle
          radius={this.state.radius}
          strokeWidth={4}
          stroke={this.state.color}
          onClick={() => 
            this.props.addPointer(this.props.shapeId,
              {
                lineEndX: shapeSourceX,
                lineEndY: shapeSourceY + 90,
              })
          }
        />
        <EditableText 
          x={-20}
          y={-40}
          textSize={20}
          text={text || this.state.text} 
          onClick={this.setText}
        />
      </Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    shapeState: state.konva.dataStructures[ownProps.shapeId],
    allDataStructures: state.konva.dataStructures,
    pointingToThis: state.konva.associations.pointingTo[ownProps.shapeId],
    pointingFrom: state.konva.associations.pointingFrom,
  }
};

const mapDispatchToProps = dispatch => ({
  addPointer: (graphNodeSourceId, shapeProps) => dispatch({
    type: "ADD_STRUCTURE", payload: { 
      structureName: 'GraphPointer', 
      id: graphNodeSourceId + " " + Math.round(Math.random()*1000).toString(),
      shapeState: { graphNodeSource: graphNodeSourceId, ...shapeProps } }
  }),
  updateState: (id, shapeState) => dispatch({
    type: "UPDATE_SHAPE_STATE", payload: { shapeState, id: id.toString() }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphNode);
