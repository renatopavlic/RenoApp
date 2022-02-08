import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { Card, Box, CardContent, Typography, Divider } from "@mui/material";

import { useWeatherCardStyle } from "./styled";
import { weatherOptions } from "./consts";
import { WeatherCardProps } from "./types";
import { AnimationType, WeatherType } from "../../services/weather/types";

const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  const { name, date, temp, maxTemp, minTemp, description, wind, humidity } =
    props.weather;

  const classes = useWeatherCardStyle(props);

  const resovedIcon = (description: string): string => {
    switch (description) {
      case WeatherType.ClearSky:
        return AnimationType.ClearDay;
      case WeatherType.Rain:
      case WeatherType.Thunderstorm:
        return AnimationType.Rain;
      case WeatherType.ShowerRain:
      case WeatherType.Snow:
        return AnimationType.Snow;
      case WeatherType.FewClouds:
      case WeatherType.BrokenClouds:
      case WeatherType.ScatteredClouds:
        return AnimationType.Cloudy;
      case WeatherType.Mist:
        return AnimationType.Fog;
      default:
        return AnimationType.PartlyCloudyDay;
    }
  };

  return (
    <Card className={classes.container}>
      <Box className={classes.content}>
        <Box className={classes.contentLeft}>
          <CardContent>
            <Typography className={classes.bigTitle}>{name}</Typography>
            <Typography variant="h4">{date}</Typography>
          </CardContent>
          <Divider className={classes.divider} />
          <CardContent>
            <Typography className={classes.bigTitle}>{temp} ° C</Typography>
            <Typography variant="h4">
              {maxTemp}/{minTemp}°C
            </Typography>
            <Typography variant="h4" textTransform="uppercase">
              {description}
            </Typography>
          </CardContent>
          <Divider className={classes.divider} />
          <CardContent>
            <Typography variant="h4">Wind: {wind} km/h</Typography>
            <Typography variant="h4">Humidity: {humidity} %</Typography>
          </CardContent>
        </Box>
        <Box className={classes.contentRight}>
          <CardContent>
            <ReactAnimatedWeather
              icon={resovedIcon(description)}
              color={weatherOptions.color}
              size={weatherOptions.size}
              animate={weatherOptions.animate}
            />
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};

export default WeatherCard;
