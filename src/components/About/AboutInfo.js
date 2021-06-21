import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
  },
  typography: {
    color: '#fff',
    marginTop: '18vh',
    marginLeft: '30vw',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  about: {
    color: '#fff',
    width: '30vw',
    marginTop: '4vh',
    marginLeft: '30vw',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
});

function AboutInfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography id="about-title" className={classes.typography}>
        Me Talking About <span style={{ color: '#eb7734' }}>Myself</span>
      </Typography>
      <Typography id="about-text" className={classes.about}>
        A <span style={{ color: '#eb7734' }}>Full Stack Developer</span> from{' '}
        <span style={{ color: '#eb7734' }}>Kolkata, India</span>. I am also an
        undergraduate student pursuing B.Tech in CSCE in KIIT University,
        Bhubaneswar.
      </Typography>
      <Typography id="about-text" className={classes.about}>
        When I am not coding or pushing pixels you will find me playing games or
        listening to music.
      </Typography>
    </div>
  );
}

export default AboutInfo;
