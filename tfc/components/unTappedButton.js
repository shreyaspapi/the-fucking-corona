import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/dimensions';

const UnTappedButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default UnTappedButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: windowHeight * 0.040,
    width: windowWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
  },
});
