import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './Header/Header';
import icBin from '../../../Images/Icons/delete.png';
import icSchedule from '../../../Images/Icons/date.png';
import icGift from '../../../Images/Icons/giftbox.png';
import icScore from '../../../Images/Icons/scoreboard.png';
class HomeView extends Component {
  openMenu() {
    const {open} = this.props;
    open();
  }
  render() {
    return (
      <View>
        <Header onOpen={this.openMenu.bind(this)} />
        <View>
          <View style={styles.wrapperScore}>
            <Text style={styles.styleText}>Điểm tích lũy của bạn:</Text>
            <Text style={styles.styleText}>0.</Text>
          </View>

          <View style={styles.wrapperRowCater}>
            <View style={styles.wrapperCategory}>
              <Image source={icBin} style={styles.wrapperImage} />
              <Text style={styles.styleTextInMain}>Hướng dẫn Phân loại</Text>
            </View>
            <View style={styles.wrapperCategory2}>
              <Image source={icSchedule} style={styles.wrapperImage} />
              <Text style={styles.styleTextInMain2}>Đặt lịch thu gom</Text>
            </View>

            <View style={styles.wrapperCategory3}>
              <Image source={icGift} style={styles.wrapperImage} />
              <Text style={styles.styleTextInMain3}>Đổi Thưởng</Text>
            </View>
            <View style={styles.wrapperCategory4}>
              <Image source={icScore} style={styles.wrapperImage} />
              <Text style={styles.styleTextInMain4}>Tích Điểm</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapperScore: {
    height: 60,
    width: '85%',
    backgroundColor: 'white',
    elevation: 15,
    marginBottom: '20%',
    borderWidth: 1,
    borderRadius: 5,
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
    width: 180,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#009966',
  },
  wrapperCategory2: {
    height: 150,
    width: 180,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1.5,

    borderColor: '#8A4B08',
  },
  wrapperCategory3: {
    height: 150,
    width: 180,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1.5,

    borderColor: '#086A87',
  },
  wrapperCategory4: {
    height: 150,
    width: 180,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#610B5E',
  },
  wrapperRowCater: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '1%',
    flexWrap: 'wrap',
  },
  styleTextInMain: {
    fontWeight: 'bold',
    fontSize: 14.5,
    fontFamily: 'monospace',
    marginTop: '10%',

    color: '#009966',
  },
  styleTextInMain2: {
    fontWeight: 'bold',
    fontSize: 14.5,
    fontFamily: 'monospace',
    marginTop: '10%',

    color: '#8A4B08',
  },
  styleTextInMain3: {
    fontWeight: 'bold',
    fontSize: 14.5,
    fontFamily: 'monospace',
    marginTop: '10%',

    color: '#086A87',
  },
  styleTextInMain4: {
    fontWeight: 'bold',
    fontSize: 14.5,
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
export default HomeView;
