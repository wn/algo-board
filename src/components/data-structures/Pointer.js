import React from "react";
import { Arrow, Circle, Group } from "react-konva";
import { connect } from "react-redux";

class Pointer extends React.Component {
  updateLineStart = e => {
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      shapeSourceX: e.target.x(),
      shapeSourceY: e.target.y()
    });
  };

  updateLineEnd = e => {
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      lineEndX: e.target.x(),
      lineEndY: e.target.y()
    });
  };

  //Removes pointer object
  remove = () => {
    this.Pointer.removeChildren();
    this.props.updateState(this.props.shapeId, { message: "deleted" });
  };

  //Checks position of hashtable on whiteboard
  checkPosition = e => {
    //Position of dustbin
    let binPosX = this.props.delArea.x - 300;
    let binPosY = this.props.delArea.y - 80;

    //Removes pointer if dragged to dustbin position
    e.target.x() >= binPosX && e.target.y() >= binPosY
      ? this.remove()
      : this.props.updateState(this.props.shapeId, {
          ...this.props.shapeState,
          x: e.target.x(),
          y: e.target.y()
        });
  };

  render() {
    return (
      <Group
        ref={ref => (this.Pointer = ref)}
        onDragMove={e => {
          this.checkPosition(e);
        }}
        draggable
      >
        <Circle
          x={this.props.shapeState.shapeSourceX}
          y={this.props.shapeState.shapeSourceY}
          radius={8}
          fill
          draggable
          onDragMove={this.updateLineStart}
        />
        <Arrow
          points={[
            this.props.shapeState.shapeSourceX,
            this.props.shapeState.shapeSourceY,
            this.props.shapeState.lineEndX,
            this.props.shapeState.lineEndY
          ]}
          stroke
          strokeWidth={7}
          fill
        />
        <Circle
          x={this.props.shapeState.lineEndX}
          y={this.props.shapeState.lineEndY}
          radius={12}
          draggable
          onDragMove={this.updateLineEnd}
        />
      </Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shapeState: state.konva.dataStructures[ownProps.shapeId],
    allDataStructures: state.konva.dataStructures,
    pointingToThis: state.konva.associations.pointingTo[ownProps.shapeId]
  };
};

const mapDispatchToProps = dispatch => ({
  updateState: (id, shapeState) =>
    dispatch({
      type: "UPDATE_SHAPE_STATE",
      payload: { shapeState, id: id.toString() }
    }),
  connectNodes: (source, dest) =>
    dispatch({
      type: "CONNECT_NODES",
      payload: { source, dest }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pointer);
