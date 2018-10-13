import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Whiteboard from "./components/Whiteboard";
import List from "./components/data-structures/List";
import LLNode from "./components/data-structures/LLNode";
import GraphNode from "./components/data-structures/GraphNode";
import Hashtable from "./components/data-structures/Hashtable";

class App extends Component {
  constructor(props) {
    super(props);
    this.dss = {
      List: {
        propAttrs: ["size", "values"],
        component: props => <List {...props} />
      },
      LLNode: { propAttrs: [], component: props => <LLNode {...props} /> },
      GraphNode: {
        propAttrs: [],
        component: props => <GraphNode {...props} />
      },
      Hashtable: {
        propAttrs: ["size", "keyValuePairs"],
        component: props => <Hashtable {...props} />
      }
    };
  }

  state = {
    dataStructures: []
  };

  createDS = (dsName, props) => {
    var inputDS = ["List", "Hashtable"];
    var input = props.size;
    if (
      inputDS.includes(dsName) &&
      (isNaN(input) || input <= 0 || input >= 25)
    ) {
      console.log("Input is not a value from 0 to 25");
    } else {
      props.size = parseInt(props.size);
      this.setState({
        dataStructures: [
          ...this.state.dataStructures,
          this.dss[dsName].component(props)
        ]
      });
    }
  };

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={9}>
            <Whiteboard dataStructures={this.state.dataStructures} />
          </Col>
          <Col xs={3}>
            <Sidebar dss={this.dss} createDS={this.createDS} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
