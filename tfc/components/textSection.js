import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { windowHeight, windowWidth } from '../utils/dimensions';

const TextSection = ({ sectionTitle, sectionData, sectionRant, ...rest }) => {
  const [showEye, setShowEye] = useState(true);

  changeEye = () => {
    if(showEye) {
      setShowEye(false);
    } else {
      setShowEye(true);
    }
  }

  return (
    <View>
      <View style={styles.container} {...rest}>
        <Text style={styles.buttonText}>{sectionTitle}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => changeEye()}>
          {
            showEye ? <Image style={{ width: 20, height: 20 }} source={require('../assets/eye.png')} /> : <Image style={{ width: 20, height: 20 }} source={require('../assets/eye_closed.png')} />
          }
        </TouchableOpacity>
      </View>
      <View style={{width: '75%'}}>
        {
          showEye ? <Text style={styles.dataText}>{sectionRant}</Text> : <Text style={styles.dataText}>{sectionData}</Text>
        }
      </View>
    </View>
  );
};

export default TextSection;

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
