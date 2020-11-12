import React from "react";
import "./flat.css";
class Flat extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {

    const title = this.props.flat.price
    + this.props.flat.priceCurrency +
    "-" + this.props.flat.name;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title"></div>
          {title}
      </div>
    );
  }
}

export default Flat;
