import { transformToWeather } from "./transformations";

export const getCurrentWeather = async (city: string) => {
  if (city === "") city = "Karlovac";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  const data = await res.json();
  return transformToWeather(data);
};
