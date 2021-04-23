import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Scrollbars } from "react-custom-scrollbars";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",

    borderRadius: "43px",
    backgroundColor: theme.palette.background.paper
  },
  card: {
    color: "#fff"
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://panorbit.in/api/users.json`)
      .then((results) => results.json())

      .then((data) => {
        //console.log(data.users);
        setUser(data.users);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/LtqWQfw/back.png)"
      }}
    >
      <div className="container">
        <br></br> <br></br> <br></br>
        <h4 className="white-text">Select an account</h4>
        <br></br>
        <br></br>
        <div className={classes.card}>
          <div>
            <Scrollbars style={{ height: 300 }}>
              <List className={classes.root}>
                {user.map((user) => {
                  return (
                    <div key={user.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={user.profilepicture} />
                        </ListItemAvatar>
                        <Link
                          to={{
                            pathname: "/Homepage",
                            state: { data: user }
                          }}
                        >
                          <ListItemText
                            primary={user.name}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.inline}
                                  color="textPrimary"
                                ></Typography>{" "}
                              </React.Fragment>
                            }
                          />
                        </Link>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </div>
                  );
                })}
              </List>
            </Scrollbars>
          </div>
        </div>
      </div>
    </div>
  );
}
