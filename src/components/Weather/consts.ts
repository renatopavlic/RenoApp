import { Weather } from "../../services/weather";

export const initialWeather: Weather = {
  name: "Karlovac",
  date: "2022-02-22",
  temp: 0,
  maxTemp: 0,
  minTemp: 0,
  humidity: 0,
  wind: 0,
  animationType: "Clouds",
  description: "Clouds",
};

export const weatherOptions = {
  icon: "CLEAR_DAY",
  color: "white",
  size: 150,
  animate: true,
};
