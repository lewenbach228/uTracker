import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetail = ({ route }) => {
  const { state } = useContext(TrackContext);
  const { _id } = route.params;

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
      <Text style={{ fontSize: 24, textAlign : 'center' }}>{track.name}</Text>
    </View>
  );
};

export default TrackDetail;

const styles = StyleSheet.create({
  map: {
    height: 580,
    // flex : 1
  },
});
