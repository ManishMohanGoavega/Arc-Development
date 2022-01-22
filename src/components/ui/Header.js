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
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles, useTheme } from "@mui/styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

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
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.75em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5.5rem",
    },
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
  drawerIconContainer: {
    "&.MuiIconButton-root": {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  drawerIcon: {
    "&.MuiSvgIcon-root": {
      height: "50px",
      width: "50px",
    },
  },
  drawerContainer: {
    "&.MuiPaper-root": {
      backgroundColor: theme.palette.common.blue,
    },
  },
  drawerText: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  selectedDrawerText: {
    ...theme.typography.tab,
    color: "white",
    opacity: 1,
  },
  drawerItem: {
    "&.MuiListItem-root.Mui-selected": {
      backgroundColor: "#08619e",
    },
  },
  drawerEstimateItem: {
    "&.MuiListItem-root": {
      "&.Mui-selected": {
        backgroundColor: theme.palette.common.orange,
      },
      "&:hover": {
        backgroundColor: "#ffaa60",
      },
    },
  },
  estimate: {
    "&.MuiListItem-root": {
      backgroundColor: theme.palette.common.orange,
    },
  },
  zIndex:{
    "&.MuiAppBar-root":{
      zIndex: theme.zIndex.modal + 1
    }
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const { value, setValue, selectedIndex, setSelectedIndex } = props

  const MenuItems = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...MenuItems, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          if (route.selectedIndex && selectedIndex !== route.selectedIndex) {
            setSelectedIndex(route.selectedIndex);
          }
          break;
        default:
          break;
      }
    });
  }, [value, selectedIndex, MenuItems, routes]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabsContainer}
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            value={index}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.link}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        disableRipple
        component={Link}
        to="/estimate"
        color="secondary"
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
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
        keepMounted
        style={{zIndex: 1302}}
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
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawerContainer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
            key={`${route}${route.activeIndex}`}
              button
              divider
              className={classes.drawerItem}
              selected={value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              component={Link}
              to={route.link}
            >
              <ListItemText
                className={
                  value === route.activeIndex
                    ? classes.selectedDrawerText
                    : classes.drawerText
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            classes={{ button: classes.estimate }}
            className={classes.drawerEstimateItem}
            selected={value === 5}
            button
            disableRipple
            divider
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            component={Link}
            to="/estimate"
          >
            <ListItemText
              className={
                value === 5 ? classes.selectedDrawerText : classes.drawerText
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer}>
        <MenuIcon
          className={classes.drawerIcon}
        />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.zIndex} >
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
