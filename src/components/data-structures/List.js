import React from 'react';
import SquareNode from './SquareNode';
import { Group } from 'react-konva';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const values = [];
    this.props.shapeState.values
      .split(',')
      .map(x => x.trim())
      .map((val, index) => {
        values.push(val);
      });

    return (
      <Group
        draggable
        onDragMove={e =>
          this.props.updateState(this.props.shapeId, {
            ...this.props.shapeState,
            x: e.target.x(),
            y: e.target.y()
          })
        }
      >
        {values.map((val, index) => {
          return (
            <SquareNode
              key={index}
              displacement={index}
              x={this.props.shapeState.x}
              y={this.props.shapeState.y}
              text={val}
            />
          );
        })}
      </Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  shapeState: state.konva.dataStructures[ownProps.shapeId]
});

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
)(List);
