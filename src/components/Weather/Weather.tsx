import { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { initialWeather } from "./consts";
import { getCurrentWeather } from "../../services/weather/api";
import { Weather as WeatherType } from "../../services/weather/types";
import WeatherCard from "./WeatherCard";
import { useWeatherStyle } from "./styled";
import { theme } from "../../style/theme";

const Weather = () => {
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useWeatherStyle(md);
  const [weather, setWeather] = useState<WeatherType>(initialWeather);
  const [city, setCity] = useState<string>("");

  const handleCityChange = (e: any) => {
    setCity(e.target.value);
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

  console.log("md:", md);

  return (
    <Box className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Weather
      </Typography>
      <Box className={classes.cardContainer}>
        <FormControl>
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
        </FormControl>
        <WeatherCard weather={weather} md={md} />
      </Box>
    </Box>
  );
};

export default Weather;
