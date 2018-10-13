import React from "react";
import { Group, Rect } from "react-konva";

import EditableText from "./EditableText";

export default class Node extends React.Component {
  render() {
    return (
      <Group>
        <Rect
          x={this.props.x + this.props.displacement * 50}
          y={this.props.y}
          width={50}
          height={50}
          stroke={"black"}
          strokeWidth={4}
        />
        <EditableText
          x={this.props.x + this.props.displacement * 50 + 10}
          y={this.props.y + 20}
          text={this.props.text}
        />
      </Group>
    );
  }
}
