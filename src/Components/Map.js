import ReactDOM from "react-dom";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <div>
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 18.566516, lng: -68.435996 }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: props.cord.lat, lng: props.cord.lat }}
          onClick={props.onMarkerClick}
        />
      )}
    </GoogleMap>
  </div>
));

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: this.props.prop.lat, lan: this.props.prop.lng };
  }

  doAnAction = () => {
    console.log("Im doing something");
    console.log(this.props);
    this.setState((state) => ({
      title: "Changed!"
    }));
  };

  render() {
    return (
      <div>
        <MyMapComponent
          isMarkerShown={true}
          onMarkerClick={this.handleMarkerClick}
          cord={this.state}
        />
      </div>
    );
  }
}
export default Map;
