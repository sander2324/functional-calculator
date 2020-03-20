import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';

import { registerRootComponent } from 'expo';

import { initialState, InputContext, inputReducer } from './context';

import AnswerContainer from './components/AnswerContainer';
import ButtonGrid from './components/ButtonGrid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App() {
  const [input, dispatch] = useReducer(inputReducer, initialState);

  return (
    <View style={styles.container}>
      <InputContext.Provider value={{ input, dispatch }}>
        <AnswerContainer />
        <ButtonGrid />
      </InputContext.Provider>
    </View>
  );
}

registerRootComponent(App);
