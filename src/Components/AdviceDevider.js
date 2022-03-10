import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

/** Custom Components */
import deskDevider from "../Assets/images/pattern-divider-desktop.svg";
import mobDevider from "../Assets/images/pattern-divider-mobile.svg";

/** Import MUI components */
import { Grid } from "@mui/material";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
}));

export default function AdviceDevider(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={12}>
        <img src={deskDevider} alt="" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
}
