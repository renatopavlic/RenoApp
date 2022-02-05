import { transformToWeather } from "./transformations";

export const getCurrentWeather = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  const data = await res.json();
  return transformToWeather(data);
};
