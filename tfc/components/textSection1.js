import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { windowHeight, windowWidth } from '../utils/dimensions';

const TextSection1 = ({ sectionTitle, sectionData, sectionRant, ...rest }) => {
  const [showEye1, setShowEye1] = useState(true);

  changeEye1 = () => {
    if(showEye1) {
      setShowEye1(false);
    } else {
      setShowEye1(true);
    }
  }

  return (
    <View>
      <View style={styles.container} {...rest}>
        <Text style={styles.buttonText}>{sectionTitle}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => changeEye1()}>
          {
            showEye1 ? <Image style={{ width: 20, height: 20 }} source={require('../assets/eye.png')} /> : <Image style={{ width: 20, height: 20 }} source={require('../assets/eye_closed.png')} />
          }
        </TouchableOpacity>
      </View>
      <View style={{width: '75%'}}>
        {
          showEye1 ? <Text style={styles.dataText}>{sectionRant}</Text> : <Text style={styles.dataText}>{sectionData}</Text>
        }
      </View>
    </View>
  );
};

export default TextSection1;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%',
    height: 35,
    width: 35,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  dataText: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  }
});
