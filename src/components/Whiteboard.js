import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import LLNode from './data-structures/LLNode';

// Data structures
import LLNode from './data-structures/LLNode';
import List from './data-structures/List';
import Node from './data-structures/Node';

class Whiteboard extends Component {
  state = {
    text1: 'black',
    text2: 'black',
    text3: 'black',
    text3x: 10,
    text3y: 60
  };
  handleDragEnd = e => {
    const name = e.target.name();
    this.setState({
      [name]: Konva.Util.getRandomColor()
    });
  };

  handleThirdDragEnd = e => {
    // correctly save node position
    this.setState({
      text3: Konva.Util.getRandomColor(),
      text3x: e.target.x(),
      text3y: e.target.y()
    });
  };
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <LLNode />
          <List num={5} />
          <Node />
        </Layer>
      </Stage>
    );
  }
}

export default Whiteboard;
