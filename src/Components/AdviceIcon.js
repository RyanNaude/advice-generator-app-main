import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

/** Custom Components */
import submitIcon from "../Assets/images/icon-dice.svg";

/** Import MUI components */
import { Grid } from "@mui/material";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.8rem",
    backgroundColor: "#52ffa8",
    borderRadius: "50%",
  },
  main: {
    marginBottom: "-2.5rem",
  },
  icon: {
    marginBottom: "-.2rem",
  },
}));

export default function AdviceDevider(props) {
  const classes = useStyles();
  // const theme = useTheme();

  console.log("theme");

  return (
    <Grid container direction="row" className={classes.main}>
      <Grid item className={classes.root} sx={{ boxShadow: 3 }}>
        <img src={submitIcon} alt="" className={classes.icon} />
      </Grid>
    </Grid>
  );
}
