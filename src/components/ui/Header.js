import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    paddingBottom: "3rem",
  },
  logo: {
    height: "7rem",
  },
  logoContainer: {
    "&.MuiButton-root": {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    "&.MuiTab-root": {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
      opacity: 0.7,
      "&.MuiTab-root.Mui-selected": {
        opacity: 1,
        color: "white",
      },
    },
  },
  button: {
    "&.MuiButton-root": {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
    },
  },
  menu: {
    "&.MuiPopover-paper": {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: 0,
    },
  },
  menuTabs: {
    "&.MuiMenuItem-root": {
      ...theme.typography.tab,
      minWidth: 10,
      paddingTop: "10px",
      paddingBottom: "10px",
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
      "&.Mui-selected": {
        backgroundColor: "#08619e",
      },
    },
  },
}));

const Header = (props) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1 ) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [value, selectedIndex]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const classes = useStyles();

  const MenuItems = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="Company logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabsContainer}
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab
                className={classes.tab}
                value={0}
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={(event) => handleClick(event)}
                className={classes.tab}
                value={1}
                label="Services"
                component={Link}
                to="/services"
              />
              <Tab
                className={classes.tab}
                value={2}
                label="The Revolution"
                component={Link}
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                value={3}
                label="About Us"
                component={Link}
                to="/about"
              />
              <Tab
                className={classes.tab}
                value={4}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClick={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              disableAutoFocusItem
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              elevation={0}
            >
              {MenuItems.map((option, index) => (
                <MenuItem
                  key={index}
                  component={Link}
                  classes={{ root: classes.menuTabs }}
                  // className={classes.menuTabs}---> both works
                  to={option.link}
                  onClick={(event) => {
                    handleMenuItemClick(event, index);
                    setValue(1);
                    handleClose();
                  }}
                  selected={index === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
