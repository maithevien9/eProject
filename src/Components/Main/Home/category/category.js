import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const category = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  const Hanlelevel1 = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắn chắn với Mức 1 không ?',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Đồng ý', onPress: () => navigation.goBack()},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.wrapperTextHeader}>
        <Text style={styles.Textheader}>THU GOM RÁC TÁI CHẾ</Text>
      </Text>
      <View style={styles.wrapperMain}>
        <TouchableOpacity style={styles.wrapperBtn} onPress={Hanlelevel1}>
          <Text style={styles.TextBtn}>Mức 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtn}>
          <Text style={styles.TextBtn}>Mức 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtn}>
          <Text style={styles.TextBtn}>Mức 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtn}>
          <Text style={styles.TextBtn}>Mức 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  wrapperBtn: {
    height: 80,
    width: '90%',
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperTextHeader: {
    marginTop: '5%',
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  wrapperMain: {
    width: '100%',
    alignItems: 'center',
    marginTop: '25%',
  },
  TextBtn: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
});
export default category;
