import React from "react";
// import theme from "../../Assets/theme/theme";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
// import { useMediaQuery } from "@material-ui/core";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";

/** Import Custom Components */
import AdviceTypog from "../Components/AdviceTypog";
import AdviceDevider from "../Components/AdviceDevider";
import AdviceIcon from "../Components/AdviceIcon";

/** Page Styling */
/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    width: "20rem",
    padding: "1rem",
  },
  title: {
    color: theme.palette.adviceTitle.main,
  },
  mainAdvice: {
    color: theme.palette.adviceBody.main,
  },
}));

export default function AdviceCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  function handleChange() {
    const requestOptions = {
      method: "GET",
    };

    fetch("https://api.adviceslip.com/advice", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        props.setAdvice({
          ...props.advice,
          no: data.slip.id,
          advice: data.slip.advice,
        });
        console.log(props.advice.no);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.title}>
        <AdviceTypog
          text={"ADVICE #" + props.advice.no}
          fonts={"12px"}
          variant={"adviceHeader"}
          weight={"500"}
        />
      </Grid>
      <Grid item className={classes.mainAdvice}>
        <AdviceTypog
          fonts={"28px"}
          weight={"800"}
          variant={"adviceBody"}
          text={'"' + props.advice.advice}
        />
      </Grid>
      <Grid item>
        <AdviceDevider />
      </Grid>
      <Grid item>
        <div onClick={handleChange}>
          <AdviceIcon />
        </div>
      </Grid>
    </Grid>
  );
}
