import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chatpopup from "./Chatpopup";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import Chatbox from "./Chatbox";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1)
  },
  btn: {
    float: "right",
    padding: "10px 40px",
    backgroundColor: "#3e56c8"
  },
  list: {
    padding: "10px",
    position: "relative",
    left: "0px"
  },
  sub: {
    paddingTop: "0px",
    paddingLeft: "0px",
    borderBottom: "1px solid #e2e2e2",
    textAlign: "center",
    width: "200px"
  }
}));

export default function Userpopup(prop) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //console.log(prop.name.name);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        className={classes.btn}
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Chats ▲
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
          <div>
            {" "}
            <ul className="collection with-header">
              <li className="collection-header">
                <h6>
                  {" "}
                  <i class="small material-icons"> chat_bubble</i> &nbsp;Chats ▼
                  .
                </h6>
              </li>

              <li className="collection-item">
                <MenuItem className={classes.sub} onClick={handleClose}>
                  <Avatar
                    alt="Remy Sharp"
                    src={prop.name.profilepicture}
                    className={classes.small}
                  />
                  {prop.name.name}
                </MenuItem>
              </li>
              <li className="collection-item">
                <MenuItem className={classes.sub} onClick={handleClose}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://randomuser.me/api/portraits/women/36.jpg"
                    className={classes.small}
                  />
                  Clementine Bauch
                </MenuItem>
              </li>
              <li className="collection-item">
                <MenuItem className={classes.sub} onClick={handleClose}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://randomuser.me/api/portraits/women/35.jpg"
                    className={classes.small}
                  />
                  Mrs. Dennis Schulist 🟢
                </MenuItem>
                <div>
                  <Chatpopup></Chatpopup>
                </div>
              </li>
            </ul>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
