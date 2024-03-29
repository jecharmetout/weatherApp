import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: 'На улице дождь',
    subtitle: 'А значит скоро будет радуга!'
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков'
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: 'Сиди дома',
    subtitle: 'Ты видишь что на улице?'
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: 'Возьми зонтик',
    subtitle: 'Возможно скоро дождь усилится '
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь потеплее, лепите снеговиков'
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: 'Пыльно',
    subtitle: 'Лучше закройте окна'
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: 'На улице смог :(',
        subtitle: 'Не советую выходить без необходимости'
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: 'Ни черта не видно в тумане',
    subtitle: 'Зато как в Сайлент-Хилле :)'
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: 'Ни черта не видно в тумане',
    subtitle: 'Зато как в Сайлент-Хилле :)'
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: 'Погода супер :)',
        subtitle: 'Иди гулять, хватит сидеть дома!'
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: 'Облака',
        subtitle: 'Белогривые лошадки'
  }
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Haze",
    "Dust",
    "Fog",
    "Smoke",
    "Mist",
    "Clear",
    "Clouds"
  ])
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  title: {
    fontSize: 44,
    color: "white",
    fontWeight: 300,
    marginBottom:10,
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    fontWeight: 600
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  },
});
