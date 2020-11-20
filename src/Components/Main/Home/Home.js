import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Drawer from 'react-native-drawer';

import {useNavigation} from '@react-navigation/native';

import {connect} from 'react-redux';
import HomeView from './HomeView';
import SaveDataLogin from '../../../AsyncStorage/SaveDataLogin';

const Home = (props) => {
  const [value, setvalue] = React.useState();
  const navigation = useNavigation();
  const {dataCheckLoginSuccess} = props;

  const closeControlPanel = () => {
    value.close();
  };
  const openControlPanel = () => {
    value.open();
  };
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    dataTemp();
  });
  const dataTemp = () => {
    if (props.dataLogin.accessToken) {
      props.dispatch({
        type: 'setLoginSuccess',
      });
    } else {
      props.dispatch({
        type: 'setLogout',
      });
    }
  };
  const HandlerLogOut = () => {
    var data = {
      dataString: 'KHONG_THANH_CONG',
      data: [],
      token: '',
    };
    props.dispatch({
      type: 'setDataLogin',
      data: data,
    });
    SaveDataLogin(data);
    navigation.replace('Authenication');
  };
  // const main = dataCheckLoginSuccess ? <Login /> : <Logout />;

  return (
    <View style={{flex: 1}}>
      <Drawer
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => setvalue(ref)}
        content={
          <View style={styles.wrapper}>
            <View>
              {/* <Image source={profileImage} style={styles.ImageStyle}></Image> */}
            </View>
            {/* <Text style={styles.textUSer}>Hello</Text> */}
            <View style={{height: 50}}></View>

            <TouchableOpacity style={styles.WrapperBtnLogOut}>
              <Text style={styles.StyleTextBtn}>Đổi Quà</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.WrapperBtnLogOut}>
              <Text style={styles.StyleTextBtn}>Lịch Sử Đổi Quà</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.WrapperBtnLogOut}>
              <Text style={styles.StyleTextBtn}>Lịch Sử Tích Điểm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.WrapperBtnLogOut}>
              <Text style={styles.StyleTextBtn}>Lịch Sử Rác Tái Chế</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.WrapperBtnLogOut2}
              onPress={HandlerLogOut}>
              <Text style={styles.StyleTextBtn}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
        }>
        <HomeView open={openControlPanel.bind(this)}></HomeView>
      </Drawer>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#009966',
    borderRightWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  Button: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  Text: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: '#088A68',
  },
  textUSer: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'monospace',
    color: 'black',
    paddingTop: 15,
    paddingBottom: 100,
  },
  WrapperBtnLogOut: {
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
  },
  WrapperBtnLogOut2: {
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '50%',
  },
  StyleTextBtn: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
  },
});
