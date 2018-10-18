import React from "react";
import Row from "./Row";
import { connect } from "react-redux";
import { Group } from "react-konva";

class Hashtable extends React.Component {
  //Removes hashtable object
  remove = () => {
    this.Hashtable.removeChildren();
    this.props.updateState(this.props.shapeId, { message: "deleted" });
  };

  //Checks position of hashtable on whiteboard
  checkPosition = e => {
    //Position of dustbin
    let binPosX = this.props.delArea.x - 200;
    let binPosY = this.props.delArea.y - 10;

    //Removes hashtable if dragged to dustbin position
    e.target.x() >= binPosX && e.target.y() >= binPosY
      ? this.remove()
      : this.props.updateState(this.props.shapeId, {
          ...this.props.shapeState,
          x: e.target.x(),
          y: e.target.y()
        });
  };

  render() {
    const shapeState = this.props.shapeState;
    return (
      <Group
        ref={ref => (this.Hashtable = ref)}
        draggable
        onDragMove={e => {
          this.checkPosition(e);
        }}
      >
        {shapeState.keyValuePairs
          .split(",")
          .map(x => x.trim())
          .map(x => x.split(" ", 2))
          .map((pair, index) => (
            <Row
              key={index}
              displacement={index}
              x={shapeState.shapeSourceX}
              y={shapeState.shapeSourceY}
              pair={pair}
            />
          ))}
      </Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shapeState: state.konva.dataStructures[ownProps.shapeId]
  };
};
const mapDispatchToProps = dispatch => ({
  updateState: (id, shapeState) =>
    dispatch({
      type: "UPDATE_SHAPE_STATE",
      payload: { shapeState, id: id.toString() }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hashtable);
