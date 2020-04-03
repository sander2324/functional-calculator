import React from 'react';
import { View } from 'react-native';

import InputButton from '../InputButton';
import * as actions from '../../context/types';

import styles from './styles';

function ButtonGrid() {
  return (
    <View style={styles.buttonGrid}>
      <View style={styles.buttonRow}>
        <InputButton value="MC" action={actions.CLEAR_MEMORY} />
        <InputButton value="M-" action={actions.SUBTRACT_MEMORY} />
        <InputButton value="M+" action={actions.ADD_MEMORY} />
        <InputButton value="MR" action={actions.DISPATCH_MEMORY} />
      </View>
      <View style={styles.buttonRow}>
        <InputButton value="C" action={actions.CLEAR} />
        <InputButton value="" />
        <InputButton value="" />
        <InputButton value="/" />
      </View>
      <View style={styles.buttonRow}>
        <InputButton value="7" />
        <InputButton value="8" />
        <InputButton value="9" />
        <InputButton value="*" />
      </View>
      <View style={styles.buttonRow}>
        <InputButton value="4" />
        <InputButton value="5" />
        <InputButton value="6" />
        <InputButton value="-" />
      </View>
      <View style={styles.buttonRow}>
        <InputButton value="1" />
        <InputButton value="2" />
        <InputButton value="3" />
        <InputButton value="+" />
      </View>
      <View style={styles.buttonRow}>
        <InputButton value="<" action={actions.REMOVE_CHAR} />
        <InputButton value="0" />
        <InputButton value="." />
        <InputButton value="=" action={actions.EVAL} />
      </View>
    </View>
  );
}

export default ButtonGrid;
