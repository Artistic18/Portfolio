import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IntroShort from '../components/Home/IntroShort';
import InfoShort from '../components/Home/InfoShort';
import Contact from '../components/Home/Contact';
import DevImage from '../assests/dev.svg';
import { Button, makeStyles } from '@material-ui/core';
import '../App.css';

const useStyles = makeStyles({
  devImage: {
    height: '60vh',
    width: '60vh',
    marginLeft: '50vw',
    marginTop: '5vh',
  },
  svgCicle: {
    opacity: '0.2',
    marginTop: '20vh',
    marginLeft: '10vw',
    position: 'absolute',
  },
  svgBlob: {
    position: 'absolute',
    height: '70vh',
    opacity: '0.05',
    marginLeft: '40vw',
    marginTop: '-35vh',
  },
});

const imageVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

const containerVariants = {
  hidden: {
    opacity: 1,
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

function Home() {
  const classes = useStyles();
  return (
    <div>
      <svg
        className={classes.svgBlob}
        id="svgBlob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F50057"
          d="M35.1,-45.3C48.2,-38.7,63.5,-32.1,65.1,-22.3C66.7,-12.4,54.6,0.7,49.9,16.5C45.1,32.2,47.6,50.6,40.5,50.4C33.4,50.1,16.7,31.2,5.1,24.2C-6.6,17.3,-13.2,22.2,-17.9,21.7C-22.7,21.2,-25.5,15.2,-32.2,7.4C-39,-0.3,-49.5,-9.9,-50.6,-19.5C-51.6,-29,-43.3,-38.5,-33.3,-46.2C-23.3,-53.8,-11.6,-59.6,-0.3,-59.1C11,-58.6,21.9,-52,35.1,-45.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        width="419"
        height="397"
        viewBox="0 0 419 397"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.svgCicle}
        id="svgCircle"
      >
        <ellipse cx="209.5" cy="198.5" rx="209.5" ry="198.5" fill="#F50057" />
      </svg>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="Home"
      >
        <IntroShort />
        <motion.img
          id="devImage"
          className={classes.devImage}
          src={DevImage}
          alt="devSvg"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        />
        <InfoShort />
        <Contact />
      </motion.div>
    </div>
  );
}

export default Home;
