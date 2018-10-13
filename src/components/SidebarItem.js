import React from "react";
class SidebarItem extends React.Component {
  state = {};

  handleChange = (e, attr) => {
    this.setState({ [attr]: e.target.value });
  };

  render() {
    return (
      <li>
        <button
          onClick={() => this.props.createDS(this.props.dsName, this.state)}
        >
          {this.props.dsName}
        </button>
        {this.props.propAttrs.map(attr => {
          return (
            <React.Fragment key={attr}>
              <input
                value={this.state.value}
                onChange={e => this.handleChange(e, attr)}
                placeholder={attr}
              />
            </React.Fragment>
          );
        })}
      </li>
    );
  }
}

export default SidebarItem;
