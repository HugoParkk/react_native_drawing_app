import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const DrawPage = () => {
  const randomStr = Math.random().toString(36).substr(2, 11);

  return (
    <>
      <Text>{randomStr}</Text>
    </>
  );
};

const styles = StyleSheet.create({

});

export default DrawPage;
