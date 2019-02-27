import React from "react";

class StyledBtn extends React.Component {
  render() {
    return (
      <div>
        <button style={this.props.style}>{this.props.children}</button>
      </div>
    );
  }
}

export default StyledBtn;
