import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';

const DrawPage = ({navigation}) => {
  const randomStr = Math.random().toString(36).substr(2, 11);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => {
            navigation.navigate('Modal');
          }}>
          {/* <Text style={styles.text}></Text> */}
          <AntIcons name="pluscircle" size={20} color="#fff" />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <>
      <Text>{randomStr}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#CCD1FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    margin: 10,
  },
  text: {
    color: '#fff',
  },
});

export default DrawPage;
