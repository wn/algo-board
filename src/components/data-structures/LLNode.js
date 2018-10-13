import React from 'react';
import { connect } from 'react-redux';
import { Arrow, Circle, Group, Shape } from 'react-konva';

import EditableText from './EditableText'

class LLNode extends React.Component {

  updateLineStart = e =>
    this.props.updateState({
      ...this.props.shapeState,
      shapeSourceX: e.target.x(),
      shapeSourceY: e.target.y(),
    })

  updateLineEnd = e =>
    this.props.updateState({
      ...this.props.shapeState,
      lineEndX: e.target.x(),
      lineEndY: e.target.y(),
    })

  render() {
    const {shapeState} = this.props;
    return (
      <React.Fragment>
        <Group
          draggable
          onDragMove={this.updateLineStart}
        >
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
          <EditableText x={20} y={30}/>
        </Group>
        <Arrow
          points={[shapeState.shapeSourceX + 85, shapeState.shapeSourceY + 35,
            shapeState.lineEndX, shapeState.lineEndY]}
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
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  shapeState: state.konva.dataStructures[ownProps.id]
});

const mapDispatchToProps = dispatch => ({
  updateState: (id, shapeState) => dispatch({
    type: "UPDATE_SHAPE_STATE", payload: { shapeState, id: id.toString() }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(LLNode);
