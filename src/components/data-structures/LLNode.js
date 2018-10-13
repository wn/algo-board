import React from 'react';
import { connect } from 'react-redux';
import { Arrow, Circle, Group, Shape } from 'react-konva';

import EditableText from './EditableText'

class LLNode extends React.Component {

  updateLineStart = e => {
    this.setState({
      shapeSourceX: e.target.x(),
      shapeSourceY: e.target.y(),
    })
  }

  updateLineEnd = e => {
    this.setState({
      lineEndX: e.target.x(),
      lineEndY: e.target.y(),
    })
  }

  render() {
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
          points={[this.state.shapeSourceX + 85, this.state.shapeSourceY + 35,
            this.state.lineEndX, this.state.lineEndY]}
          stroke
          strokeWidth={4}
          fill
        />
        <Circle
          x={this.state.lineEndX}
          y={this.state.lineEndY}
          radius={10}
          draggable
          onDragMove={this.updateLineEnd}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dataStructures: state.konva.dataStructures
});

const mapDispatchToProps = dispatch => ({
  updateState: (id, shapeState) => dispatch({
    type: "UPDATE_SHAPE_STATE", payload: { shapeState, id: id.toString() }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(LLNode);
