import "../../_mockLocation";
import { View, Text } from "react-native";
import React, { useContext, useCallback } from "react";
import Map from "../../components/Map";

import { Context as LocationContext } from "../../context/LocationContext";
import useLocation from "../../hooks/useLocation";
import TrackForm from "../../components/TrackForm";
import { useIsFocused } from "@react-navigation/native";

export default function TrackCreate() {
  const {
    state: { recording },
    addRecording,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addRecording(location, recording);
    },
    [recording]
  );

  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused || recording, callback);
  return (
    <View>
      <Map />
      {err ? <Text> Please enable location services</Text> : null}
      <TrackForm />
    </View>
  );
}
