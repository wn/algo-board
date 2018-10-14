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
          .map((val, index) => {
            return (
              <GraphNode
                key={index}
                displacement={index}
                x={shapeState.shapeSourceX}
                y={shapeState.shapeSourceY}
                text={val}
              />
            );
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
