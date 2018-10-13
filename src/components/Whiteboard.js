import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';

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
    text3y: 60,
    stageWidth: window.innerHeight
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

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
  }

  checkSize = () => {
    const width = this.container.offsetWidth;
    this.setState({
      stageWidth: width
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  render() {
    return (
      <div ref={node => {
        this.container = node;
      }}>
        <Stage width={this.state.stageWidth} height={window.innerHeight}>
          <Layer>
            <LLNode />
            <List num={5} />
            <Node />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Whiteboard;
