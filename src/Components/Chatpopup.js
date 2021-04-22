import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chatbox from "./Chatbox";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1)
  },
  btn: {
    float: "left",
    padding: "10px 0px",
    backgroundColor: "#fff",
    position: "relative",
    left: "36px",
    top: "-0px"
  }
}));

export default function Chatpopup(prop) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        className={classes.btn}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        ❮ Chat with me
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Typography className={classes.typography}>
          <Chatbox></Chatbox>
        </Typography>
      </Popover>
    </div>
  );
}
