import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NewRecyclablesAPI from '../../../../../RestAPI/Recyclables/new-recyclables-api';
import CreateNotifyAPI from '../../../../../RestAPI/Notify/create-notify-api';
import {connect} from 'react-redux';
const handled = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();

  const Hanlelevel1 = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắn chắn với Mức 1 không ?',
      [
        {
          text: 'Hủy',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
        {
          text: 'Đồng ý',
          onPress: () => {
            NewRecyclablesAPI(props.dataLogin.token, '1')
              .then((json) => {
                var data = JSON.parse(JSON.stringify(json));
                console.log(data);

                if (data.dataString === 'THANH_CONG') {
                  CreateNotifyAPI(
                    'Đang chờ vận chuyển Gói Rác Tái Chế 1',
                    '',
                    props.dataLogin.token,
                  )
                    .then((json) => {
                      var data = JSON.parse(JSON.stringify(json));

                      if (data.dataString === 'THANH_CONG') {
                        navigation.goBack();
                      }
                    })
                    .catch((error) => {
                      console.error(error + 'fail');
                    });
                }
              })
              .catch((error) => {
                console.error(error + 'fail');
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
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
    marginTop: '15%',
  },
  TextBtn: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(handled);
