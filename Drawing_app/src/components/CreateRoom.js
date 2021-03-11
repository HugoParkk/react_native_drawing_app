/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';


const CreateRoom = ({navigation}) => {
  const [roomName, setRoomName] = useState('');
  const [roomNameValid, setRoomNameValid] = useState(false);
  const roomNameHandler = (text) => {
    if (text.trim().length === 0) {
      setRoomNameValid(false);
    } else {
      setRoomNameValid(true);
    }
    setRoomName(text);
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'violet'}}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 2}}>
          <TextInput
            placeholder="Room Name"
            value={roomName}
            onChangeText={(text) => roomNameHandler(text)}
          />
          {!roomNameValid && <Text>Please Enter Room Name...</Text>}
          <Text>Room Name{roomName}</Text>
        </View>
      </View>
    </>
  );
};

export default CreateRoom;
