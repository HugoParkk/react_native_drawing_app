import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import DrawPage from './components/drawPage/DrawPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.red}>red</Text>
        <Text style={styles.blue}>blue</Text>
        <DrawPage></DrawPage>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  red: {color: 'red'},
  blue: {color: 'blue'},
});

export default App;
