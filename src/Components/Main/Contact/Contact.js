import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import phoneIcon from '../../../Images/Icons/phone.png';
import mailIcon from '../../../Images/Icons/mail.png';
import messageIcon from '../../../Images/Icons/message.png';
import locationIcon from '../../../Images/Icons/location.png';

// import MapView, {Polyline} from 'react-native-maps';
import MapView, {Marker} from 'react-native-maps';

import {useNavigation} from '@react-navigation/native';
// import Geolocation from '@react-native-community/geolocation';
// import {Platform, PermissionsAndroid} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {YellowBox} from 'react-native';
// import LocationView from 'react-native-location-view';
const {width} = Dimensions.get('window');

// YellowBox.ignoreWarnings([
//   'VirtualizedLists should never be nested', // TODO: Remove when fixed
// ]);

const Contact = () => {
  const navigation = useNavigation();
  const {
    mapContainer,
    wrapper,
    infoContainer,
    rowInfoContainer,
    imageStyle,
    infoText,
    wrapperBtnlc,
    infoText2,
  } = styles;
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    error: null,
  });
  const [local, setlocal] = useState({});
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  useEffect(() => {
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     //const location = JSON.stringify(position);
    //     // setlocal(JSON.parse(location));
    //     console.log(position);
    //     // setRegion({
    //     //   latitude: JSON.parse(location).coords.latitude,
    //     //   longitude: JSON.parse(location).coords.longitude,
    //     //   error: null,
    //     // });
    //     setlatitude(position.coords.latitude);
    //     setlongitude(position.coords.longitude);
    //   },
    //   (e) => {
    //     console.log(e);
    //   },
    //   {timeout: 20000},
    // );
  }, []);
  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.setAddressText('Some Text');
  // }, []);
  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };
  const handleUpdateUser = () => {
    console.log('Vien');
    navigation.navigate('ContactUpdate');
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>THÔNG TIN NGƯỜI DÙNG</Text>
      </View>
      <View style={mapContainer}>
        {/* <GooglePlacesAutocomplete
          placeholder="Enter Location"
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              backgroundColor: 'grey',
              marginTop: 6,
              height: 40,
              width: '100%',
            },
            textInput: {
              borderRadius: 0,
              height: 38,
              color: 'black',
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyDY_HsllA7mpJ7XLBqTJFy7gv3ja07xNuY',
            language: 'en',
          }}
          predefinedPlaces={[homePlace, workPlace]}
        /> */}

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={'Vien'}
            description={'64 Nhon Hoa 5 - Cam Le - Da Nang'}
          />
        </MapView>
      </View>
      <View style={infoContainer}>
        <View style={rowInfoContainer}>
          <Image source={locationIcon} style={imageStyle} />
          <Text style={infoText}>64 Nhon Hoa 5 - Cam Le - Da Nang</Text>
        </View>
        <View style={rowInfoContainer}>
          <Image source={phoneIcon} style={imageStyle} />
          <Text style={infoText}>(+84) 0869040015</Text>
        </View>
        <View style={rowInfoContainer}>
          <Image source={mailIcon} style={imageStyle} />
          <Text style={infoText}>maithevien9@gmail.com</Text>
        </View>
        <View style={[rowInfoContainer, {borderBottomWidth: 0}]}>
          <Image source={messageIcon} style={imageStyle} />
          <Text style={infoText}>Mai The Vien</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={styles.wapperBtnUpdate}
          onPress={() => {
            handleUpdateUser();
          }}>
          <Text>Cập nhập</Text>
        </TouchableOpacity>
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
  wrapperBtnlc: {
    height: 28,
    width: '70%',
    backgroundColor: '#009966',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {width: width - 25, height: 485},
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 290,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  infoContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    margin: 10,
    marginTop: 0,
    borderRadius: 20,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderColor: '#F6F6F6',
    width: '95%',
  },
  imageStyle: {
    width: 15,
    height: 15,
  },
  infoText: {
    fontFamily: 'monospace',
    color: '#AE005E',
    fontWeight: '500',
    fontSize: 13,
  },
  infoText2: {
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'monospace',
    color: 'white',
  },
  wapperBtnUpdate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 10,
    height: 50,
    width: '92%',
  },
});

export default Contact;
