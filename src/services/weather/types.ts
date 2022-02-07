export interface WeatherCardProps {
  weather: Weather;
  md: boolean;
}

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
