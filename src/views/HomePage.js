import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import IntroShort from '../components/Home/IntroShort';
import InfoShort from '../components/Home/InfoShort';
import Contact from '../components/Home/Contact';
import DevImage from '../assests/dev.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  devImage: {
    height: '60vh',
    width: '60vh',
    marginLeft: '50vw',
    marginTop: '5vh',
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
  );
}

export default Home;
