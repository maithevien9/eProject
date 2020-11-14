import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import icBack from '../../../Images/Icons/back.png';
import {useNavigation} from '@react-navigation/native';
const ContactUpdate = () => {
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birthday, setBirthday] = useState('');
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>CẬP NHẬP THÔNG TIN</Text>
      </View>
      <View style={styles.wrapperLine} />
      <TouchableOpacity
        style={{paddingLeft: 20, marginVertical: 10}}
        onPress={handleBack}>
        <Image source={icBack} style={styles.wrapperImage} />
      </TouchableOpacity>
      <View style={styles.wrapperMapFull}>
        <View style={styles.wrapperMap} />
      </View>
      <View style={styles.wrapperInput}>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={Name}
          style={styles.textInput}
          placeholder="Tên người dùng"
        />
        <TextInput
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          style={styles.textInput}
          placeholder="Số điện thoại"
        />
        <TextInput
          onChangeText={(text) => setBirthday(text)}
          value={Birthday}
          style={styles.textInput}
          placeholder="Ngày tháng năm sinh"
        />

        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity style={styles.wapperBtnUpdate}>
            <Text>Cập nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#F6F6F6'},
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
    fontFamily: 'monospace',
    color: 'white',
  },
  wrapperLine: {
    height: 10,
    backgroundColor: '#ffffff',
  },
  textInput: {
    height: 50,
    width: 406,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.2,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 13,
    borderRadius: 15,
  },
  wrapperInput: {
    height: 300,
    alignItems: 'center',
    paddingTop: 20,
  },
  wrapperMap: {
    height: 300,
    backgroundColor: '#C0C0C0',
    width: '95%',
  },
  wrapperMapFull: {
    alignItems: 'center',
  },
  wapperBtnUpdate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 15,
    height: 50,
    width: 406,
    borderWidth: 1.2,
  },
});
export default ContactUpdate;
