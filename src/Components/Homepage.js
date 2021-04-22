import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";

import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Userdetail from "./Userdetail";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 524,
    borderRadius: "5px",
    paddingLeft: "160px"
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
    paddingTop: "150px",
    backgroundColor: "#3e56c8",
    color: "#fff",
    borderRadius: "25px"
  },
  TabPanel: {
    width: "900px",
    color: "#000"
  }
}));

export default function VerticalTabs() {
  let userData = useHistory().location.state.data;
  console.log(userData);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="row">
      <br></br> <br></br>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Posts" {...a11yProps(1)} />
          <Tab label="Gallery" {...a11yProps(2)} />
          <Tab label="Todo" {...a11yProps(3)} />
        </Tabs>
        <TabPanel className={classes.TabPanel} value={value} index={0}>
          <Userdetail prop={userData}></Userdetail>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h2>Post Coming Soon</h2>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h2>Gallery Coming Soon</h2>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h2>ToDo Coming Soon</h2>
        </TabPanel>
      </div>
    </div>
  );
}
