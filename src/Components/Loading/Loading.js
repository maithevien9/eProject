import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {useNavigation} from '@react-navigation/native';
import CheckToken from '../../RestAPI/User/check-token';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
const Loading = (props) => {
  const [selectedTab, setSelectedTab] = React.useState('Home');
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Authenication');
      async function getDataLogin() {
        var value = await AsyncStorage.getItem('@save');

        value = JSON.parse(value);
        if (value !== null) {
          // console.log(value.token);
          // console.log(value);
          props.dispatch({
            type: 'setDataLogin',
            data: value,
          });
          // console.log(props.dataLogin.token + '//////////////////');
          if (value.token !== '') {
            CheckToken(value.token)
              .then((json) => {
                var data = JSON.parse(JSON.stringify(json));
                //console.log(DataLoginUser);

                if (data.dataString === 'THANH_CONG') {
                  console.log('OK');
                  navigation.navigate('Main');
                } else {
                  navigation.navigate('Authenication');
                }
              })
              .catch((error) => {
                console.error(error + 'fail');
              });
          } else {
            navigation.navigate('Authenication');
          }
        } else {
          navigation.navigate('Authenication');
        }
      }
      getDataLogin();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.StyleText}>ETECH DREAME TEAM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'monospace',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps)(Loading);
