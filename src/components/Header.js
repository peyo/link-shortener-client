import React from "react";

// @Material-ui
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    minHeight: "60vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px"
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Grid>
        <Typography variant="h6">
          <div>
            Shonk is a link management platform to brand, track, and share
            shortened links using a custom domain.
          </div>
        </Typography>
      </Grid>
    </Box>
  );
}
