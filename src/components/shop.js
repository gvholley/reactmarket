import React from "react";
import "./shop.css";
class Shop extends React.Component {
  handleClick = () => {
    //Call the parent method selectShop
    this.props.selectShop(this.props.shop);
  }
  render() {

    const title = this.props.shop.name;

    const style = {
      backgroundImage: `url('${this.props.shop.imageUrl}')`
    };

    return (
      <div className="shop" onClick={this.handleClick}>
        <div className="shop-picture" style={style}></div>
        <div className="shop-title"></div>
          {title}
      </div>
    );
  }
}

export default Shop;
