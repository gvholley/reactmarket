import React from "react";
class Hello extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

export default Hello;
