import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { initialWeather } from "./consts";
import { getCurrentWeather } from "../../services/weather/api";

import WeatherCard from "./WeatherCard";
import { useWeatherStyle } from "./styled";
import { theme } from "../../style/theme";
import { Weather as WeatherType } from "../../services/weather";

const Weather = () => {
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const responsiveTitle = sm ? "h4" : "h3";
  const classes = useWeatherStyle(md);

  const [weather, setWeather] = useState<WeatherType>(initialWeather);
  const [city, setCity] = useState<string>("Karlovac");

  const handleCityChange = useCallback((e: any) => {
    setCity(e.target.value);
  }, []);

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    try {
      const res = await getCurrentWeather(city);
      setWeather(res);
    } catch (error) {
      console.log("form submit error");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await getCurrentWeather(city);
        setWeather(res);
      } catch (error) {
        console.log("weather error");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={classes.container}>
      <Container>
        <Typography variant={responsiveTitle} className={classes.title}>
          Weather
        </Typography>
        <Box className={classes.cardContainer}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="City"
              helperText="Select a city"
              value={city}
              onChange={handleCityChange}
              fullWidth
              inputProps={{
                style: { fontSize: 35, color: "white" },
              }}
              InputLabelProps={{ style: { fontSize: 20, color: "white" } }}
              FormHelperTextProps={{
                style: {
                  fontSize: 20,
                  color: "white",
                },
              }}
            />
            <Box my={3}>
              <Button type="submit" variant="outlined">
                Search
              </Button>
            </Box>
          </form>
          <WeatherCard weather={weather} md={md} />
        </Box>
      </Container>
    </Box>
  );
};

export default Weather;
