import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "b923efb390fa73061fc992dc5846f182";
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main
    });

    console.log(data);
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can' t  determine location", "I'm sorry");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
