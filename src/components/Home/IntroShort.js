import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: 'white',
    fontFamily: 'Roboto',
    marginTop: '30vh',
    marginLeft: '15vw',
    position: 'absolute',
  },
  typography1: {
    fontSize: '2.5rem',
  },
  typography2: {
    fontSize: '2.5rem',
  },
  name: {
    fontSize: '4rem',
    color: '#eb7734',
    fontWeight: 'bold',
  },
});

const introVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

function IntroShort() {
  const classes = useStyles();
  return (
    <div id="introShort" className={classes.root}>
      <Typography className={classes.typography1}>Hi,</Typography>
      <Typography
        style={{ marginTop: '-4.5vh' }}
        className={classes.typography2}
      >
        I'm{' '}
        <motion.span
          variants={introVariant}
          initial="hidden"
          animate="visible"
          id="name"
          className={classes.name}
        >
          Hrishit Biswas
        </motion.span>
      </Typography>
    </div>
  );
}

export default IntroShort;
