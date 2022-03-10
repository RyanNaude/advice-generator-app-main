import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

/** Custom Pages */

/** Import MUI components */
import { Typography } from "@mui/material";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    // color: theme.palette.primary.main,
  },
  adviceHeader: {
    ...theme.typography.adviceHeader,
  },
  adviceBody: {
    ...theme.typography.adviceBody,
  },
}));

export default function AdviceTypog(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Typography
      className={classes.root}
      style={{ fontSize: props.fonts, fontWeight: props.weight }}
    >
      {props.text}
    </Typography>
  );
}
