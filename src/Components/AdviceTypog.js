import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

/** Custom Pages */

/** Import MUI components */
import { Typography } from "@mui/material";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({}));

export default function AdviceTypog(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Typography
      style={{
        fontSize: props.fonts,
        fontWeight: props.weight,
        letterSpacing: props.letSpace,
        fontFamily: "Manrope",
      }}
    >
      {props.text}
    </Typography>
  );
}
