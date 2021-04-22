import React from "react";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";
import Map from "./Map";
import Addprofile from "./Addprofile";

import Userpopup from "./Userpopup";
import Chatbox from "./Chatbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },

  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  main: {
    paddingBottom: "40px",
    borderBottom: "1px solid #e2e2e2"
  },
  sub: {
    paddingTop: "10px",
    borderRight: "1px solid #e2e2e2"
  }
}));
function Userdetail(prop) {
  console.log(prop.prop.address.geo);
  const classes = useStyles();
  return (
    <div className="row">
      <div className={classes.main}>
        <div class="col s6 left-align">Profile</div>
        <div class="col s6 right-align">
          <Addprofile data={prop.prop}></Addprofile>
        </div>
      </div>
      <br></br>
      <div>
        <div class="col m4 left-align">
          <div className={classes.sub}>
            <h6>{prop.prop.name}</h6>
            <Avatar
              alt="Remy Sharp"
              src={prop.prop.profilepicture}
              className={classes.large}
            />
            <h6>email : {prop.prop.email}</h6>
            <h6>Phone : {prop.prop.phone}</h6>
            <h6>Website: {prop.prop.website}</h6>
            <h6>Company</h6>
            <h6>Name : {prop.prop.company.name}</h6>
            <h6>catchphrase : {prop.prop.company.catchPhrase}</h6>
            <h6>base : {prop.prop.company.bs}</h6>
          </div>
        </div>

        <div class="col m6 left-align">
          <h6>Address :</h6>
          <h6>Street : {prop.prop.address.street}</h6>
          <h6>Suite : {prop.prop.address.suite}</h6>
          <h6>City : {prop.prop.address.city}</h6>
          <h6>Zipcode: {prop.prop.address.zipcode}</h6>
          <br></br>
          <Map prop={prop.prop.address.geo}></Map>
          <p className="right-align">
            lat : <b>{prop.prop.address.geo.lat}</b> long:
            <b>{prop.prop.address.geo.lng}</b>
          </p>
        </div>
        <div class="col m12 left-align">
          <Userpopup name={prop.prop}></Userpopup>
        </div>
      </div>
    </div>
  );
}

export default Userdetail;
