import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

/** Custom Components */
import submitIcon from "../Assets/images/icon-dice.svg";

/** Import MUI components */
import { Grid } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.8rem",
    backgroundColor: "#52ffa8",
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "0px 0px 40px #52ffa8",
    },
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

  return (
    <Grid container direction="row" className={classes.main}>
      <Grid item className={classes.root}>
        <img src={submitIcon} alt="" className={classes.icon} />
      </Grid>
    </Grid>
  );
}
