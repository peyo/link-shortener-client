import React from "react";
import Link from "./Link";
import { useQuery } from "@apollo/client";
import GET_LINKS from "../graphql/queries/GetAllLinks";

// @Material-ui
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "21px 0"
  },
  box: {
    minHeight: "60vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "9px",
    paddingRight: "9px"
  },
  query: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function LinkList() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) {
    return (
      <Typography component={"span"}>
        <div className={classes.box}>
          <span className={classes.grid}>Fetching</span>
        </div>
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography component={"span"}>
        <div className={classes.box}>
          <span className={classes.grid}>Error! ${error.message}</span>;
        </div>
      </Typography>
    );
  }

  const linksToRender = data.allLinks;

  return (
    <Typography component={"span"}>
      <div className={classes.root}>
        <Box className={classes.box}>
          {linksToRender.map((link, index) => (
            <Link className={classes.link} key={link.id} link={link} />
          ))}
        </Box>
      </div>
    </Typography>
  );
}
