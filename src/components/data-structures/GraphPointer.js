import React from 'react';
import { connect } from 'react-redux';
import { Arrow, Circle, Group } from 'react-konva';

class GraphPointer extends React.Component {
  state = {
    lineEndX: 0,
    lineEndY: 0
  };

  updateLineEnd = e => {
    this.props.updateState(
      this.props.shapeId,
      {
      ...this.props.shapeState,
      lineEndX: e.target.x(),
      lineEndY: e.target.y(),
    });
  }

  checkConnections = e => {
    const { lineEndX, lineEndY } = this.props.shapeState;
    const nodes = this.searchNearbyNodes(lineEndX, lineEndY);
    console.log(nodes);
    if (nodes.length) this.props.connectToNode(this.props.shapeId, nodes[0]);
  }

  searchNearbyNodes = (x, y) => {
    const res = Object.keys(this.props.allDataStructures);
    return res.filter(key => key !== this.props.shapeId)
      .filter(key => {
        const struct = this.props.allDataStructures[key];
        return struct.structureName === "GraphNode" 
          && Math.abs(struct.shapeSourceX - x) < 20
          && Math.abs(struct.shapeSourceY - y) < 20;
      });
  }
  
  render() {
    return (
      <Group>
        <Circle
          x={this.props.shapeSourceX}
          y={this.props.shapeSourceY + 20}
          radius={8}
          fill
        />
        <Arrow
          points={[
            this.props.shapeSourceX,
            this.props.shapeSourceY + 20,
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
          onDragEnd={this.checkConnections}
        />
      </Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const graphNodeSourceId = state.konva.dataStructures[ownProps.shapeId]
    .graphNodeSource;
  return {
    ...ownProps,
    shapeState: state.konva.dataStructures[ownProps.shapeId],
    allDataStructures: state.konva.dataStructures,
    shapeSourceX: state.konva.dataStructures[graphNodeSourceId].shapeSourceX,
    shapeSourceY: state.konva.dataStructures[graphNodeSourceId].shapeSourceY
  }
}

const mapDispatchToProps = dispatch => ({
  updateState: (id, shapeState) => dispatch({
    type: "UPDATE_SHAPE_STATE", payload: { shapeState, id: id.toString() }
  }),
  connectToNode: (source, dest) => dispatch({
    type: "CONNECT_NODES", payload: { source, dest }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphPointer);
