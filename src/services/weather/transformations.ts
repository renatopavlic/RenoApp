import { Weather } from "./types";

export const transformToWeather = (res: any): Weather => {
  const [forcast] = res.weather;

  return {
    name: res.name,
    date: new Date().toDateString().substring(0, 10),
    temp: Math.round(res.main.temp * 10) / 10,
    maxTemp: res.main.temp_max,
    minTemp: res.main.temp_min,
    humidity: res.main.humidity,
    wind: res.wind.speed,
    animationType: forcast.main,
    description: forcast.description,
  };
};
