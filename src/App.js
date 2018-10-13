import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Whiteboard from './components/Whiteboard.js';
import './App.css';

import Sidebar from './components/Sidebar';
import Whiteboard from './components/Whiteboard';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6}>
            <Whiteboard />
          </Col>
          <Col xs={6}>
            <Sidebar/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
