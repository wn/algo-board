import React from 'react';
import Row from './Row';
import { Group } from 'react-konva';

export default class Hashtable extends React.Component {
  state = {
    startX: 20,
    startY: 20
  };

  render() {
    const keyValuePairs = new Array(this.props.size).fill(null);
    this.props.keyValuePairs
      .split(", ")
      .map(x => x.trim())
      .map(x => x.split(" ", 2))
      .map((p, index) => { keyValuePairs[index] = p; });
    return (
      <Group draggable>
        {keyValuePairs.map((pair, index) => {
          return (
            <Row
              key={index}
              displacement={index}
              x={this.state.startX}
              y={this.state.startY}
              pair={pair}
            />
          );
        })}
      </Group>
    );
  }
}
