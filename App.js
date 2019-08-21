import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from './Weather';
import { API_KEY } from './api_key';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherName: null
  };

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
        position => {
          this._getWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
          this.setState({
            error: error
          });
        }
    )
  };

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            temperature: json.main.temp,
            weatherName: json.weather[0].main,
            isLoaded: true
          })
        });
  };

  render () {
    const { isLoaded, error, temperature, weatherName } = this.state;
    return (
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          {isLoaded ? <Weather
              temp={Math.floor(temperature - 273.15)}
              weatherName={weatherName}
          /> : (
              <View style={styles.loading}>
                <Text style={styles.loadingText}>Getting the weather</Text>
                { error ? <Text style={styles.errorText}>{error}</Text> : null }
              </View>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingRight: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  }
});
