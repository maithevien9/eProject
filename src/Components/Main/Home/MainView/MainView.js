import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import icBin from '../../../../Images/Icons/delete.png';
import icSchedule from '../../../../Images/Icons/date.png';
import icGift from '../../../../Images/Icons/giftbox.png';
import icScore from '../../../../Images/Icons/scoreboard.png';
import {useNavigation} from '@react-navigation/native';
import GetScore from '../../../../RestAPI/Member/get-score-api';
import CheckRycuclables from '../../../../RestAPI/Member/get-score-api';
import {connect} from 'react-redux';
const MainView = (props) => {
  const navigation = useNavigation();
  const [scores, SetScores] = useState(0);
  useEffect(() => {
    async function CheckRecyle() {
      CheckRycuclables(props.dataLogin.token)
        .then((json) => {
          var data = JSON.parse(JSON.stringify(json));
          console.log(data.data[0].score);
          props.dispatch({
            type: 'setScore',
            data: data.data[0].score,
          });
        })
        .catch((error) => {
          console.error(error + 'fail');
        });
    }
    CheckRecyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCatergery = () => {
    navigation.navigate('Category');
  };
  const handleCollect = () => {
    navigation.navigate('Collect');
  };
  const handleGift = () => {
    navigation.navigate('Gift');
  };
  const handlePoints = () => {
    console.log(JSON.stringify(props.Scores));

    navigation.navigate('Points');
  };
  return (
    <View>
      <View style={styles.wrapperScore}>
        <Text style={styles.styleText}>Điểm tích lũy của bạn:</Text>
        <Text style={styles.styleText}>{props.Scores}.</Text>
      </View>

      <View style={styles.wrapperRowCater}>
        <TouchableOpacity
          style={styles.wrapperCategory}
          onPress={() => {
            handleCatergery();
          }}>
          <Image source={icBin} style={styles.wrapperImage} />
          <Text style={styles.styleTextInMain}>Hướng dẫn Phân loại</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapperCategory2}
          onPress={handleCollect}>
          <Image source={icSchedule} style={styles.wrapperImage} />
          <Text style={styles.styleTextInMain2}>Thông báo thu gom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.wrapperCategory3} onPress={handleGift}>
          <Image source={icGift} style={styles.wrapperImage} />
          <Text style={styles.styleTextInMain3}>Đổi Thưởng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapperCategory4}
          onPress={handlePoints}>
          <Image source={icScore} style={styles.wrapperImage} />
          <Text style={styles.styleTextInMain4}>Tích Điểm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperScore: {
    height: 60,
    width: '85%',
    backgroundColor: 'white',
    elevation: 15,
    marginBottom: '20%',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: '8%',
    marginTop: '8%',
    paddingLeft: '5%',
    justifyContent: 'center',
  },
  styleText: {
    fontSize: 15,
    fontFamily: 'monospace',
    // color: 'white',
  },
  wrapperCategory: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
  },
  wrapperCategory2: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1,

    borderColor: '#8A4B08',
  },
  wrapperCategory3: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1,

    borderColor: '#086A87',
  },
  wrapperCategory4: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#610B5E',
  },
  wrapperRowCater: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '5%',
    flexWrap: 'wrap',
  },
  styleTextInMain: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'monospace',
    marginTop: '10%',

    color: '#009966',
  },
  styleTextInMain2: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'monospace',
    marginTop: '10%',

    color: '#8A4B08',
  },
  styleTextInMain3: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'monospace',
    marginTop: '10%',

    color: '#086A87',
  },
  styleTextInMain4: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'monospace',
    marginTop: '10%',

    color: '#610B5E',
  },
  wrapperImage: {height: 50, width: 50},
  wrapperTest: {
    height: 60,
    width: '85%',
    backgroundColor: 'white',
    elevation: 20,
    marginBottom: '20%',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: '8%',
    marginTop: '8%',
    paddingLeft: '5%',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
  };
}
export default connect(mapStateToProps)(MainView);
