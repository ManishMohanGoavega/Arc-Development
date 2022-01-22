import React from "react";
import { makeStyles } from "@mui/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
  footerAdornment: {
    width: "25em",
    verticalAlign: "bottom",
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
    zIndex: 1303,
  },
  link: {
    "&.MuiGrid-root": {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none",
    },
  },
  gridItem: {
    "&.MuiGrid-root": {
      margin: "3em",
    },
  },
  icon: {
    height: "4rem",
    width: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: "2.5rem",
      width: "2.5rem",
    }
  },
  iconContainer: {
    "&.MuiGrid-root": {
      position: "absolute",
      right: '1.5rem',
      marginTop: "-6rem",
      [theme.breakpoints.down("sm")]: {
        right: '0.6rem',
      }
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  const { setValue, setSelectedIndex } = props;

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.gridContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => setValue(0)}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        className={classes.footerAdornment}
        alt="black decorative slash"
        src={footerAdornment}
      />
      <Grid
        container
        spacing={2}
        justifyContent="flex-end"
        className={classes.iconContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
