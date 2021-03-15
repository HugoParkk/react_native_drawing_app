/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:3002/');

const CreateRoom = ({navigation}) => {
  const [roomName, setRoomName] = useState('');

  const roomNameHandler = (text) => {
    console.log(roomName, 'test');
    socket.emit('roomJoin', text);
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'violet'}}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 2}}>
          <TextInput
            placeholder="Room Name"
            value={roomName}
            // onChangeText={(text) => setRoomName(text)}
          />
          <Text>Room Name {roomName}</Text>
        </View>
        <View style={{flex: 1}}>
          <Button title="Create Room" onPress={alert(roomName)} />
        </View>
      </View>
    </>
  );
};

export default CreateRoom;
