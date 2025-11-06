import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native';
import moment from 'moment-timezone';
import IconText from '../components/Icontext';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  const {
    container,
    cityName,
    countryName,
    cityText,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../assets/city-background.jpg')}
        style={imageLayout}
        resizeMode="cover"
      >
        {/* CITY NAME */}
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        {/* POPULATION */}
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'#ff4444'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>

        {/* SUNRISE / SUNSET */}
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'#FFDD55'}
            bodyText={moment.unix(sunrise).tz("Asia/Kolkata").format("h:mm a")}
            bodyTextStyles={riseSetText}
          />

          <IconText
            iconName={'sunset'}
            iconColor={'#FFAA33'}
            bodyText={moment.unix(sunset).tz("Asia/Kolkata").format("h:mm a")}
            bodyTextStyles={riseSetText}
          />
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  imageLayout: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    paddingHorizontal: 20
  },

  cityName: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: '900',
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5
  },

  countryName: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    color: '#eaeaea',
    marginBottom: 10
  },

  cityText: {
    alignSelf: 'center'
  },

  populationWrapper: {
    marginTop: 20,
    justifyContent: 'center'
  },

  populationText: {
    color: '#ff4444',
    fontSize: 22,
    marginLeft: 10,
    fontWeight: '600'
  },

  riseSetWrapper: {
    marginTop: 40,
    justifyContent: 'space-between',
    width: "100%"
  },

  riseSetText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
    marginLeft: 8
  },

  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default City;
