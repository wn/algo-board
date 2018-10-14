import React from 'react';
import GraphNode from './GraphNode';
import { connect } from 'react-redux';

class GraphList extends React.Component {
  render() {
    const shapeState = this.props.shapeState;

    return (
      <React.Fragment>
        {shapeState.graphValues
          .split(',')
          .map(x => x.trim())
          .forEach((val, index) => {
            this.props.addNode(40 + index * 60, 50, {text: val});
          })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shapeState: state.konva.dataStructures[ownProps.shapeId]
  };
};
const mapDispatchToProps = dispatch => ({
  addNode: (x, y, shapeProps) => dispatch({
    type: "ADD_STRUCTURE", payload: { 
      structureName: 'GraphNode', 
      id: 'LIST' + " " + Math.round(Math.random()*1000).toString(),
      shapeState: { shapeSourceX: x, shapeSourceY: y, ...shapeProps } }
  }),
  updateState: (id, shapeState) =>
    dispatch({
      type: 'UPDATE_SHAPE_STATE',
      payload: { shapeState, id: id.toString() }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphList);
