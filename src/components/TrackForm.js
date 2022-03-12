import React, { useContext } from "react";

import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import MyButton from "../components/CustomButtom";
import { SafeAreaView, View } from "react-native";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <SafeAreaView style={{ position: "absolute", bottom: 150, justifyContent : 'center', alignSelf : 'center' }}>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={changeName}
        placeholder="Title"
        leftIcon={{ type: "font-awesome", name: "user" }}
      />

      {recording ? (
        <MyButton title="Stop " tap={stopRecording} />
      ) : (
        <MyButton title="Start" tap={startRecording} />
      )}

      {!recording && locations.length ? (
        <MyButton title="Save " tap={saveTrack} />
      ) : null}
    </SafeAreaView>
  );
};

export default TrackForm;

// const styles = StyleSheet.create({});
