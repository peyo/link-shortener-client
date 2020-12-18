import React from "react";

// @Material-UI
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

// Services
import { copyToClipboard } from "../services/CopyToClipboard";

const useStyles = makeStyles({
  link: {
    width: "300px",
    margin: "21px 0"
  },
  button: {
    border: "none",
    background: "none"
  },
  shortLink: {
    display: "flex"
  },
  shortLinkText: {
    width: "auto"
  }
});

function handleOnClick(e) {
  e.preventDefault();
  copyToClipboard("mytext");
}

export default function Link(props) {
  const classes = useStyles();
  return (
    <div className={classes.link} key={props.link.id}>
      <ListItem>{props.link.slug}</ListItem>
      <ListItem>{props.link.description}</ListItem>
      <ListItem>{props.link.link}</ListItem>
      <div className={classes.shortLink}>
        <ListItem id="mytext" className={classes.shortLinkText}>
          {props.link.shortLink}
        </ListItem>
        <button
          className={classes.button}
          id="TextToCopy"
          onClick={(e) => handleOnClick(e)}
        >
          <img alt="copy short link" src="./copy.png" width="18px" />
        </button>
      </div>
    </div>
  );
}
