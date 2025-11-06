import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
  Text,
  View
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/UpcomingWeather-background.jpg')}
      >

        {/* Header */}
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Upcoming Weather</Text>
        </View>

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#1A2980',
  },

  image: {
    flex: 1,
    paddingBottom: 20
  },

  headerWrapper: {
    padding: 20,
    alignItems: 'center',
  },

  headerText: {
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  }
})

export default UpcomingWeather
