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
  return (
    <>
      <Text style={styles.drawPage}>drawPage</Text>
    </>
  );
};

const styles = StyleSheet.create({
  drawPage: {color: 'yellow'},
});

export default DrawPage;
