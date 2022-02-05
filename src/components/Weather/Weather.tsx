import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../../services/weather/api";

const Weather = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCurrentWeather("London");
        setWeather(res);
      } catch (error) {
        console.log("weather error");
      }
    })();
  }, []);

  console.log("weather: ", weather);

  const data = {
    forecast: [
      {
        date: "Fri 27 November",
        description: "Clear",
        icon: "SVG PATH",
        temperature: { min: "-0", max: "6" },
        wind: "2",
        humidity: 60,
      },
      {
        date: "Sat 28 November",
        description: "Clouds",
        icon: "SVG PATH",
        temperature: { min: "-1", max: "6" },
        wind: "3",
        humidity: 67,
      },
      {
        date: "Sat 28 November",
        description: "Clouds",
        icon: "SVG PATH",
        temperature: { min: "-1", max: "6" },
        wind: "3",
        humidity: 67,
      },
    ],
    current: {
      date: "Fri 27 November",
      description: "Clear",
      icon: "SVG PATH",
      temperature: { current: "-2", min: -3, max: 1 },
      wind: "2",
      humidity: 90,
    },
  };

  console.log("data", data);

  return (
    <Box>
      <Typography variant="h3" color="primary">
        Weather
      </Typography>
    </Box>
  );
};

export default Weather;
