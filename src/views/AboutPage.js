import React from 'react';
import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

function About() {
  const classes = useStyles();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ height: '150vh' }}
    >
      <AboutInfo />
      <div id="aboutimg-container">
        <img
          id="about-img"
          className={classes.aboutSvg}
          src={AboutSvg}
          alt="about"
        />
      </div>
    </motion.div>
  );
}

export default About;
