import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 41.48625,
      lng: 2.32462,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="container" style={{padding: "0"}} >
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default Maps;
