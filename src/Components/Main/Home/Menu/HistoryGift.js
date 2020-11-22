import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import icGift from '.././../../../Images/Icons/gift-box.png';
import {connect} from 'react-redux';

const HistoryGift = (props) => {
  const convertDate = (date) => {
    var ts = new Date(date);
    return ts.toLocaleDateString();
  };
  const convertDate2 = (date) => {
    var ts = new Date(date);
    return ts.toLocaleTimeString();
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>Lịch sử đổi quà</Text>
      </View>
      <ScrollView style={styles.wrapperMain}>
        {props.historyGift.map((e) => (
          <View style={styles.wrapperForm}>
            <Image source={icGift} style={styles.wrapperImage} />
            <View>
              <View style={styles.wrapperRowFull}>
                <View style={styles.wrapperRowGift}>
                  <Text style={styles.StyleText}>Tên quà: </Text>
                  <View>
                    <Text style={styles.StyleText}>{e.NameGift}</Text>
                  </View>
                </View>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>Điểm Đổi: </Text>
                  <Text style={styles.StyleText}>{e.Score}</Text>
                </View>
              </View>
              <View style={styles.wrapperRow}>
                <Text style={styles.StyleText}>Ngày đổi: </Text>
                <Text style={styles.StyleText}>
                  {convertDate(e.DateTime)} {convertDate2(e.DateTime)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
  wrapperMain: {
    marginLeft: '3%',
    marginTop: '3%',
  },
  wrapperForm: {
    width: '95%',
    height: 80,
    borderWidth: 1,
    flexDirection: 'row',
    paddingLeft: '3%',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapperImage: {
    height: 40,
    width: 40,
    marginRight: '3%',
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  wrapperRowFull: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  wrapperRowGift: {
    flexDirection: 'row',
    width: '60%',
  },
  wrapperRowScore: {
    flexDirection: 'row',
    width: '35%',
  },
  StyleText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: 'black',
  },
});

function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
    historyGift: state.historyGift,
  };
}
export default connect(mapStateToProps)(HistoryGift);
