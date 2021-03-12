import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DrawPage from './src/components/DrawPage';
import Modal from './src/components/CreateRoom';

const Stack = createStackNavigator();

const App = (props) => {
  const {navigation} = props;
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#CCD1FF',
          },
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Random Draw" component={DrawPage} />
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#CCD1FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 500,
//     margin: 10,
//   },
//   text: {
//     color: '#fff',
//   },
// });

export default App;
