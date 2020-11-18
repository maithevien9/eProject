import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import icNotify from '../../Images/Icons/notification.png';
import icNotify2 from '../../Images/Icons/notification2.png';
import icHome from '../../Images/Icons/home2.png';
import icHome2 from '../../Images/Icons/home.png';
import icNote from '../../Images/Icons/note.png';
import icNote2 from '../../Images/Icons/note2.png';
import QA from '../../Images/Icons/qa.png';
import QA2 from '../../Images/Icons/qa2.png';
import User from '../../Images/Icons/profile-user2.png';
import User2 from '../../Images/Icons/profile-user.png';
import Contact from './Contact/Contact';
import Home from './Home/HomeMain';
import Notify from './Notify/Notify';
import About from './About/about';
import ContactMain from './Contact/ContactMain';
const Main = () => {
  const [selectedTab, setSelectedTab] = React.useState('home');
  return (
    <TabNavigator tabBarStyle={{height: 53}}>
      <TabNavigator.Item
        selected={selectedTab === 'home'}
        title="Trang Chủ"
        renderIcon={() => <Image source={icHome} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icHome2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('home')}>
        <Home />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'notify'}
        title="Thông Báo"
        renderIcon={() => (
          <Image source={icNotify} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icNotify2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('notify')}>
        <Notify />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'About'}
        title="Giới Thiệu"
        renderIcon={() => (
          <Image source={icNote2} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icNote} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('About')}>
        <About />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Contact'}
        title="Thông Tin"
        renderIcon={() => <Image source={User2} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={User} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('Contact')}>
        <ContactMain />
      </TabNavigator.Item>
    </TabNavigator>
  );
};
const styles = StyleSheet.create({
  wrapperImage: {height: 23, width: 23},
});
export default Main;
