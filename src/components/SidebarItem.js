import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';
import { Input } from 'mdbreact';
import './Sidebar.css';

class SidebarItem extends React.Component {
  state = {
    placeholder: {
      values: "Array input. E.g. '1, 2, 3, 4, 5'",
      keyValuePairs: "Key-Value Pairs. E.g. '1 2, 3 4, 5 6, 7 8'",
      graphValues: "Graph node input. E.g. '1, 2, 3, 4, 5'"
    }
  };

  handleChange = (e, attr) => {
    this.setState({ [attr]: e.target.value });
  };

  render() {
    return (
      <div className={'DS-list'}>
        {this.props.propAttrs.map(attr => {
          return (
            <React.Fragment key={attr}>
              <Input
                className={'DS-input'}
                label={this.state.value}
                onChange={e => this.handleChange(e, attr)}
                hint={this.state.placeholder[attr]}
              />
            </React.Fragment>
          );
        })}
        <Button
          className={'DS-button'}
          onClick={() => this.props.createDS(this.state)}
        >
          {this.props.dsName}
        </Button>
      </div>
    );
  }
}

export default SidebarItem;
