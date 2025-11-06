import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      {/* MAIN WEATHER INFO */}
      <View style={styles.centerContainer}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={120}
          color="white"
          style={styles.mainIcon}
        />

        <Text style={styles.temperature}>{Math.round(temp)}°</Text>
        <Text style={styles.feels}>Feels like {Math.round(feels_like)}°</Text>

        <RowText
          messageOne={`High: ${Math.round(temp_max)}°`}
          messageTwo={`Low: ${Math.round(temp_min)}°`}
          containerStyles={styles.hiLowWrapper}
          messageOneStyles={styles.hiLowText}
          messageTwoStyles={styles.hiLowText}
        />
      </View>

      {/* DESCRIPTION + MESSAGE */}
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={styles.bottomContainer}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  mainIcon: {
    marginBottom: 10,
  },

  temperature: {
    color: 'white',
    fontSize: 70,
    fontWeight: '300',
  },

  feels: {
    fontSize: 22,
    color: '#f2f2f2',
    marginTop: 5,
  },

  hiLowWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },

  hiLowText: {
    color: '#f2f2f2',
    fontSize: 18,
    marginHorizontal: 5,
  },

  bottomContainer: {
    paddingLeft: 25,
    marginBottom: 45,
  },

  description: {
    fontSize: 38,
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: '600',
  },

  message: {
    fontSize: 20,
    marginTop: 6,
    color: '#efefef',
    opacity: 0.8,
  }
})

export default CurrentWeather
