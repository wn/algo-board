import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';

class Whiteboard extends Component {
  state = {
    stageWidth: window.innerHeight
  };

  componentDidMount() {
    this.checkSize();
    window.addEventListener('resize', this.checkSize);
  }

  checkSize = () => {
    const width = this.container.offsetWidth;
    this.setState({
      stageWidth: width
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkSize);
  }

  render() {
    return (
      <div
        ref={node => {
          this.container = node;
        }}
      >
        <Stage width={this.state.stageWidth} height={window.innerHeight}>
          <Layer>{this.props.dataStructures}</Layer>
        </Stage>
      </div>
    );
  }
}

export default Whiteboard;
