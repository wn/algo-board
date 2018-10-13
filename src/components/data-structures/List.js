import React from 'react';
import SquareNode from './SquareNode';

export default class List extends React.Component {
  state = {
    startX: 20,
    startY: 20,
    size: 10
  };

  updateListEnd = e => {
    this.setState({
      startX: e.target.x(),
      startY: e.target.y()
    });
  };

  render() {
    return (
      <React.Fragment>
        {new Array(this.state.size).fill(null).map((val, index) => {
          return (
            <SquareNode
              displacement={index}
              x={this.state.startX}
              y={this.state.startY}
              dragHandle={this.updateListEnd}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
