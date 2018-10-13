import React from 'react';
import Row from './Row';
import { Group } from 'react-konva';

export default class Hashtable extends React.Component {
  state = {
    startX: 20,
    startY: 20
  };

  render() {
    const keyValuePairs = this.props.keyValuePairs
      .split(", ")
      .map(x => x.trim())
      .map(x => x.split(" "))
    return (
      <Group draggable>
        {new Array(this.props.size).fill(null).map((val, index) => {
          return (
            <Row
              key={index}
              displacement={index}
              x={this.state.startX}
              y={this.state.startY}
            />
          );
        })}
      </Group>
    );
  }
}
