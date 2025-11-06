import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment-timezone'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

const ListItem = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.cardContainer}>
      {/* ICON */}
      <Feather
        name={weatherType[condition]?.icon}
        size={40}
        color={'white'}
        style={styles.icon}
      />

      {/* DATE + TIME */}
      <View style={styles.textWrapper}>
        <Text style={styles.dayText}>
          {moment(dt_txt).format('dddd')}
        </Text>

        <Text style={styles.timeText}>
          {moment(dt_txt).format('h:mm a')}
        </Text>
      </View>

      {/* TEMP */}
      <Text style={styles.tempText}>
        {`${Math.round(min)}° / ${Math.round(max)}°`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)', // works on web, safely ignored on RN
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  textWrapper: {
    flex: 1,
    marginLeft: 12,
  },

  dayText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },

  timeText: {
    fontSize: 14,
    color: '#eaeaea',
    marginTop: 2,
  },

  tempText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },

  icon: {
    marginRight: 10,
  }
})

export default ListItem
