import React from "react";
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  useMediaQuery,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import { RecipeProps } from "./types";
import { useRecipeStyle } from "./styled";
import { theme } from "../../style/theme";
import { Ingredient, Instruction } from "../../services/recipe";

const Recipe: React.FC<RecipeProps> = (props: any) => {
  const {
    title,
    image,
    readyInMinutes,
    analyzedInstructions,
    extendedIngredients,
  } = props.recipe;

  const classes = useRecipeStyle();

  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  // TODO useMemo ?
  const responsiveTitle = sm ? "h4" : "h3";

  // TODO add leader
  const defaultImage =
    "https://www.automobili.ba/wp-content/uploads/2020/10/reno.jpg";

  return (
    <Box style={{ marginTop: 50, paddingTop: 50 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={sm ? "h3" : "h2"} color="primary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <img
            src={image ? image : defaultImage}
            alt="recipt"
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <AccessTimeIcon fontSize="large" color="primary" />
          <Typography variant={responsiveTitle} color="primary">
            {readyInMinutes} min
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={responsiveTitle} color="primary">
            Ingredients
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            bgcolor="primary"
            alignItems="baseline"
          >
            <List className={classes.list}>
              {extendedIngredients.map((i: Ingredient, index: number) => (
                <ListItem key={index} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalDiningIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    classes={{ primary: classes.itemText }}
                    primary={i.name}
                    secondary={i.amount + i.measure}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={responsiveTitle}
            color="primary"
            style={{ paddingBottom: 20 }}
          >
            Step by step
          </Typography>
          <Box pl={2} py={3}>
            {analyzedInstructions.map((i: Instruction, index: number) => (
              <Box py={1} key={index}>
                <Chip label={`Step ${i.number}`} />
                <Typography my={1} variant="h4" fontWeight={400}>
                  {i.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recipe;
