/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:3002/');

const CreateRoom = ({navigation}) => {
  const [roomName, setRoomName] = useState('');

  const roomNameHandler = () => {
    socket.emit('roomJoin', roomName);
    console.log(roomName, 'test');
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'violet'}}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 2, alignItems: 'center'}}>
          <TextInput
            placeholder="Room Name"
            value={roomName}
            onChangeText={(text) => setRoomName(text)}
          />
          <Text>Room Name {roomName}</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => {
              roomNameHandler();
            }}>
            {/* <Text style={styles.text}></Text> */}
            <AntIcons name="pluscircle" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* <View style={{flex: 1}}>
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#CCD1FF',
    // alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    margin: 10,
  },
  text: {
    color: '#fff',
  },
});

export default CreateRoom;
