import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { InputContext } from '../../context';
import * as actions from '../../context/types';

import styles from './styles';

function InputButton(props) {
  const { dispatch } = useContext(InputContext);
  return (
    <TouchableOpacity
      style={styles.inputButton}
      onPress={() => dispatch({ type: props.action, payload: props.value })}
    >
      <Text style={styles.inputButtonText}>{props.value}</Text>
    </TouchableOpacity>
  );
}

InputButton.propTypes = {
  value: PropTypes.string.isRequired,
  action: PropTypes.string,
};

InputButton.defaultProps = {
  action: actions.APPEND,
};

export default InputButton;
