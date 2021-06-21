import React from 'react';
import { makeStyles } from '@material-ui/core';
import AboutInfo from '../components/About/AboutInfo';
import AboutSvg from '../assests/about.svg';

const useStyles = makeStyles({
  aboutSvg: {
    height: '20rem',
    width: '20rem',
    marginLeft: '65vw',
    marginTop: '15vh',
  },
  footer: {
    marginTop: '10vh',
  },
});

function About() {
  const classes = useStyles();
  return (
    <div style={{ height: '150vh' }}>
      <AboutInfo />
      <div id="aboutimg-container">
        <img
          id="about-img"
          className={classes.aboutSvg}
          src={AboutSvg}
          alt="about"
        />
      </div>
    </div>
  );
}

export default About;
