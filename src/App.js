import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import Sidebar from './components/Sidebar';
import Whiteboard from './components/Whiteboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.dss = [
      { name: "Array", image: "" },
      { name: "LLNode", image: "" },
      { name: "TreeNode", image: "" },
      { name: "GraphNode", image: "" }
    ];
  }
  
  createDS = (dsName) => {
    console.log(dsName);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={9}>
            <Whiteboard />
          </Col>
          <Col xs={3}>
            <Sidebar dss={this.dss} createDS={this.createDS}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
