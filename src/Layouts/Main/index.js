import React from "react";
// import theme from "../../Assets/theme/theme";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
// import { useMediaQuery } from "@material-ui/core";

/** Import Material UI Components */
import { Grid } from "@mui/material";

/** Custom Pages */
import AdviceCard from "../../Pages/AdviceCard";
import { borderRadius } from "@mui/system";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    paddingTop: "5em",
    paddingBottom: "30em",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item container className={classes.root} justifyContent="center" alignItems="center">
        <Grid item xs={4} style={{borderRadius: "5%"}}>
          <AdviceCard advice={props.advice} setAdvice={props.setAdvice}/>
        </Grid>
      </Grid>
    </Grid>
  );
}
