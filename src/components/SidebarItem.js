import React from 'react';
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
      <div class="DS-list input-group mb-3">
        {this.props.propAttrs.map(attr => {
          return (
            <React.Fragment key={attr}>
            <input type="text" 
              label={this.state.value}
              class="form-control DS-input" 
              onChange={e => this.handleChange(e, attr)}
              placeholder={this.state.placeholder[attr]}
              aria-label={this.state.value} 
              aria-describedby="basic-addon2" />
            </React.Fragment>
          );
        })}
        <div class="input-group-append">
          <button 
            type="button" 
            class="btn btn-light DS-button"
            onClick={() => this.props.createDS(this.state)}>{this.props.dsName}</button>
        </div>
      </div>

        
    );
  }
}

export default SidebarItem;
