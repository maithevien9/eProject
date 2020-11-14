import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import icEmail from '../../../Images/Icons/email.png';
const About = () => {
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>GIỚI THIỆU</Text>
      </View>
      {/* <View style={styles.wrapperMain2}> */}
      {/* <View style={{height: 4, backgroundColor: '#FFFFFF'}}></View> */}
      <View style={styles.wrapperMain}></View>
      {/* </View> */}
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  wrapperMain: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  wrapperMain2: {
    height: '100%',
    width: '100%',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
  },
  wrapperHeader: {
    height: 80,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyleHeader: {
    fontSize: 28,
    fontFamily: ' onospace',
    color: 'white',
  },
  wrapperNotify: {
    height: 80,
    width: '97%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 12,
  },
  wrapperImage: {
    height: 30,
    width: 30,
  },
  wrapperInNotyfi: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperTextInNotify: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: 'black',
  },
  wrapperImageInNotify: {
    marginLeft: 20,
  },
  StyleTextTime: {
    fontSize: 11,
    fontFamily: 'monospace',
    color: 'black',
  },
});
