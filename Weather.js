import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: "md-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Clear!",
    subtitle: "Nice weather",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm ..",
    subtitle: "Awkkkkk",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Ohhh yeah",
    icon: "ios-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#8986E5"],
    title: "Snowyyy",
    subtitle: "Do you wanna build a snowman",
    icon: "ios-snow"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzzle",
    subtitle: "ha",
    icon: "cloud-water"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Hazeee",
    subtitle: "haha",
    icon: "ios-cloud"
  }
};

function Weather({ temp, weatherName }) {
  return (
      <LinearGradient
          colors={weatherCases[weatherName].colors}
          style={styles.container}
      >
        <View style={styles.upper}>
          <Text>
            <Ionicons name={weatherCases[weatherName].icon} size={100} color="white"/>
          </Text>
          <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
        </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  temp: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 5,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 80
  }
});