import React from 'react';
import { Group, Rect } from 'react-konva';

import EditableText from './EditableText';

export default class Node extends React.Component {
  render() {
    return (
      <Group onClick={this.props.onClick}>
        <Rect
          x={this.props.displacement * 50}
          y={0}
          width={50}
          height={50}
          stroke={'black'}
          strokeWidth={4}
        />
        <EditableText
          x={this.props.displacement * 50 + 10}
          y={20}
          text={this.props.text}
        />
      </Group>
    );
  }
}
