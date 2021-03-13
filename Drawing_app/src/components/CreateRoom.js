/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import io from 'socket.io-client';

const socket = io('http://localhost:3002/');

const CreateRoom = ({navigation}) => {
  const [roomName, setRoomName] = useState('testRoom');
  
  const [roomNameValid, setRoomNameValid] = useState(false);

  const roomNameHandler = (text) => {
    if (text.trim().length === 0) {
      setRoomNameValid(false);
    } else {
      setRoomNameValid(true);
    }
    setRoomName(text);
  };

  // useEffect(() => {
  //   socket.emit('roomjoin', roomName); // been이라는 방 만들기
  // });

  // const onClick = (e) => {
  //   socket.emit('roomJoin', roomName); //서버의 소켓 alert이벤트에 "hwi"를 보낸다
  // };

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
          <Text>Room Name {roomName}</Text>
        </View>
        <View style={{flex: 1}}>
          <Button title="Create Room" onPress={onClick} />
        </View>
      </View>
    </>
  );
};

export default CreateRoom;
