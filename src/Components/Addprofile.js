import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";

import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },

  large: {
    width: "100px",
    height: "100px",
    Align: "center",
    marginLeft: "80px"
  },
  small: {
    width: "40px"
  },
  main: {
    paddingBottom: "30px",
    borderBottom: "1px solid #e2e2e2"
  },
  sub: {
    paddingTop: "10px",
    paddingLeft: "40px",
    borderBottom: "1px solid #e2e2e2",
    textAlign: "center",
    width: "300px"
  },
  sub1: {
    paddingTop: "10px",
    paddingLeft: "90px",
    borderBottom: "1px solid #e2e2e2",
    textAlign: "center",
    width: "300px"
  }
}));
export default function Addprofile(prop) {
  const classes = useStyles();
  console.log(prop.data.name);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <p>{prop.data.name}</p>
      </Button>
      <Menu
        className={classes.sub}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Avatar
          alt="Remy Sharp"
          src={prop.data.profilepicture}
          className={classes.large}
        />
        <br></br>
        <b>{prop.data.name}</b>
        <br></br>
        {prop.data.email}
        <MenuItem className={classes.sub} onClick={handleClose}>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/44.jpg"
            className={classes.small}
          />
          Clementine Bauch
        </MenuItem>

        <MenuItem className={classes.sub} onClick={handleClose}>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/women/35.jpg"
            className={classes.small}
          />
          Mrs. Dennis Schulist
        </MenuItem>

        <MenuItem className={classes.sub1} onClick={handleClose}>
          <Link
            to={{
              pathname: "/",
              state: { id: "" }
            }}
          >
            {" "}
            <a class="btn-small red lighten-1">Logout</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
