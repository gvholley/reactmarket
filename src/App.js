import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './App.css';
import Shop from './components/shop';
import Marker from './components/marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      allShops: [],
      selectedShop: null,
      search: ""
    };
  }

  componentWillMount() {
    const url = "https://raw.githubusercontent.com/gvholley/burgerjson/main/burgerslist.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          allShops: data,
          shops: data,
          selectedShop: data[0]
        })
      })
  }

  selectShop = (shop) => {
    this.setState({
      selectedShop: shop
    });
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      shops: this.state.allShops.filter((shop) => new RegExp(event.target.value, "i").exec(shop.name))
    })
  }

  render() {
    const shop = {
    "id": 111,
    "name": "J.S. Burgers Cafe",
    "imageUrl": "https://i.imgur.com/n7Rt4Dm.png",
    "rating": 4.8,
    "review": "Great variety!",
    "lat": 35.69054778985861,
    "lng": 139.70057130000004
    };

    const shops = [shop, shop, shop]
    let center = {
    lat: 35.69054778985861,
    lng: 139.70057130000004
    }

    if (this.state.selectedShop) {
      center = {
        lat: this.state.selectedShop.lat,
        lng: this.state.selectedShop.lng
      }
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch} />
          </div>
          <div className="shops">
            {this.state.shops.map((shop) => {
              return <Shop
              key={shop.name}
              shop={shop}
              selectShop={this.selectShop} />
            })}
          </div>
      </div>
        <div className="map">
        <GoogleMapReact
          center={center}
          zoom={14}
        >
          {this.state.shops.map((shop) => {
            return <Marker
            {...shop}
            selected={shop === this.state.selectedShop} />
            })}
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
