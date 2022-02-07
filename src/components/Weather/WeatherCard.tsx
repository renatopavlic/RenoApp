import { CloudCircle } from "@mui/icons-material";
import { Card, Box, CardContent, Typography, Divider } from "@mui/material";
import React from "react";
import { WeatherCardProps } from "../../services/weather/types";
import { useWeatherCardStyle } from "./styled";

const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  const { name, date, temp, maxTemp, minTemp, description, wind, humidity } =
    props.weather;

  const classes = useWeatherCardStyle(props);

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
            <CloudCircle />
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};

export default WeatherCard;
