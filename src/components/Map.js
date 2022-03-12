import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state: {currentLocation, locations} } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta:0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta:0.01,
      }}
      style={{ height: 630 }}
    >
       <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} /> 
    </MapView>
  );
};

export default Map;
