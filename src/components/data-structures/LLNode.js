import React from 'react';
import { connect } from 'react-redux';
import { Arrow, Circle, Group, Shape } from 'react-konva';

import EditableText from './EditableText';

class LLNode extends React.Component {
  updateLineStart = e => {
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      shapeSourceX: e.target.x(),
      shapeSourceY: e.target.y()
    });
    Object.keys(this.props.pointingToThis).forEach(shapeId => {
      if (!this.props.pointingToThis[shapeId]
        || !this.props.pointingFrom[shapeId][this.props.shapeId]) return;
      this.props.updateState(
        shapeId,
        {
          ...this.props.allDataStructures[shapeId],
          lineEndX: e.target.x(),
          lineEndY: e.target.y() + 30,
        }
      );
    });
  };

  updateLineEnd = e => {
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      lineEndX: e.target.x(),
      lineEndY: e.target.y()
    });
  };

  checkConnections = e => {
    const { lineEndX, lineEndY } = this.props.shapeState;
    const nodes = this.searchNearbyNodes(lineEndX, lineEndY);
    if (nodes.length) this.props.connectNodes(this.props.shapeId, nodes[0]);
  };

  searchNearbyNodes = (x, y) => {
    const res = Object.keys(this.props.allDataStructures);
    return res.filter(key => key !== this.props.shapeId).filter(key => {
      const struct = this.props.allDataStructures[key];
      return (
        struct.structureName === 'LLNode' &&
        Math.abs(struct.shapeSourceX - x) < 20 &&
        Math.abs(struct.shapeSourceY - y) < 20
      );
    });
  };

  setText = () => {
    const newText = prompt('Please enter some new text', this.props.shapeState.text);
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      text: newText
    })
  }

  render() {
    const shapeState = this.props.shapeState;
    return (
      <React.Fragment>
        <Group draggable onDragMove={this.updateLineStart} onClick={this.setText}>
          <Shape
            sceneFunc={(context, shape) => {
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
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            stroke="black"
            strokeWidth={4}
          />
          <EditableText x={20} y={30} text={this.props.shapeState.text} />
        </Group>
        <Arrow
          points={[
            shapeState.shapeSourceX + 85,
            shapeState.shapeSourceY + 35,
            shapeState.lineEndX,
            shapeState.lineEndY
          ]}
          stroke
          strokeWidth={4}
          fill
        />
        <Circle
          x={shapeState.lineEndX}
          y={shapeState.lineEndY}
          radius={10}
          draggable
          onDragMove={this.updateLineEnd}
          onDragEnd={this.checkConnections}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shapeState: state.konva.dataStructures[ownProps.shapeId],
    allDataStructures: state.konva.dataStructures,
    pointingToThis: state.konva.associations.pointingTo[ownProps.shapeId],
    pointingFrom: state.konva.associations.pointingFrom,
  }
};

const mapDispatchToProps = dispatch => ({
  updateState: (id, shapeState) =>
    dispatch({
      type: 'UPDATE_SHAPE_STATE',
      payload: { shapeState, id: id.toString() }
    }),
  connectNodes: (source, dest) =>
    dispatch({
      type: 'CONNECT_NODES',
      payload: { source, dest }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LLNode);
