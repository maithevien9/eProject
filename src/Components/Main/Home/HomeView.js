import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './Header/Header';
class HomeView extends Component {
  openMenu() {
    const {open} = this.props;
    open();
  }
  render() {
    return (
      <View>
        <Header onOpen={this.openMenu.bind(this)} />
        <Text>vien</Text>
      </View>
    );
  }
}

export default HomeView;
