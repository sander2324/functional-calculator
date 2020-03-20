import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { InputContext } from '../../context';

import styles from './styles';


function AnswerContainer() {
  const { input } = useContext(InputContext);

  // Default to display value to '0' if input.display is empty
  const displayValue = input.display ? input.display : '0';

  return (
    <View style={styles.answerContainer}>
      <Text style={styles.inputText}>{displayValue}</Text>
      <Text style={styles.answerText}>{input.answer}</Text>
    </View>
  );
}

export default AnswerContainer;
