import React from 'react';
import Row from './Row';
import { connect } from 'react-redux';
import { Group } from 'react-konva';

class Hashtable extends React.Component {
  dragTable = e =>
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      shapeSourceX: e.target.x(),
      shapeSourceY: e.target.y()
    });

  render() {
    const shapeState = this.props.shapeState;
    return (
      <Group draggable onDragMove={this.dragTable}>
        {shapeState.keyValuePairs
          .split(',')
          .map(x => x.trim())
          .map(x => x.split(' ', 2))
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
      type: 'UPDATE_SHAPE_STATE',
      payload: { shapeState, id: id.toString() }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hashtable);
