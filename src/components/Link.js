import React from "react";

// @Material-UI
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

// Services
import { copyToClipboard } from "../services/CopyToClipboard";

// CopyToClipboard
import Copy from "../assets/copy.png";

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

function handleOnClick(e, id) {
  e.preventDefault();
  copyToClipboard(id);
}

export default function Link(props) {
  const classes = useStyles();
  return (
    <div className={classes.link} key={props.link.id}>
      <ListItem>{props.link.slug}</ListItem>
      <ListItem>{props.link.description}</ListItem>
      <ListItem>{props.link.link}</ListItem>
      <div className={classes.shortLink}>
        <ListItem id={props.link.id} className={classes.shortLinkText}>
          {props.link.shortLink}
        </ListItem>
        <button
          className={classes.button}
          id="TextToCopy"
          onClick={(e) => handleOnClick(e, props.link.id)}
        >
          <img alt="copy short link" src={Copy} width="18px" />
        </button>
      </div>
    </div>
  );
}
