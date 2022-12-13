import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const GoogleMapsComponent = ({
  containerStyle,
  local,
  zoom,
  onLoad,
  onUnmount,
  marker,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={local}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {marker ? <Marker position={local} /> : <></>}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapsComponent;
