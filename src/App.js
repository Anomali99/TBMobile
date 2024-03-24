import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Router} from './router';
import {NavigationContainer} from '@react-navigation/native';
import {createTable} from './database';

const App = () => {
  useEffect(() => {
    createTable();
  }, []);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
