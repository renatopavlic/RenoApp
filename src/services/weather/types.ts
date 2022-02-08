export interface Weather {
  name: string;
  animationType: string; //Todo enum
  description: string;
  date: string;
  humidity: number;
  maxTemp: number;
  minTemp: number;
  temp: number;
  wind: number;
}

export enum AnimationType {
  ClearDay = "CLEAR_DAY",
  ClearNight = "CLEAR_NIGHT",
  PartlyCloudyDay = "PARTLY_CLOUDY_DAY",
  PartlyCloudyNight = "PARTLY_CLOUDY_NIGHT",
  Cloudy = "CLOUDY",
  Rain = "RAIN",
  Sleet = "SLEET",
  Snow = "SNOW",
  Wind = "WIND",
  Fog = "FOG",
}

export enum WeatherType {
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  ScatteredClouds = "scattered clouds",
  BrokenClouds = "broken clouds",
  ShowerRain = "shower rain",
  Rain = "rain",
  Thunderstorm = "thunderstorm",
  Snow = "snow",
  Mist = "mist",
}
