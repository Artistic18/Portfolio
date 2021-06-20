import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    marginTop: '80vh',
    marginLeft: '45vw',
  },
  typography: {
    color: '#f50057',
    fontSize: '1.5rem',
    marginLeft: '-1.2rem',
    fontFamily: 'Kaushan Script',
  },
  iconContainer: {
    marginTop: '1vh',
    marginLeft: '-0.5vw',
  },
  icons: {
    transform: 'scale(2)',
    color: '#fff',
    cursor: 'pointer',
  },
});

function Contact() {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.root}>
      <Typography className={classes.typography}>Connect With Me</Typography>
      <div className={classes.iconContainer}>
        <FaGithub
          onClick={() => window.open('https://github.com/Artistic18')}
          className={classes.icons}
        />
        <FaLinkedin
          style={{ marginLeft: '3rem' }}
          onClick={() => window.open('https://www.linkedin.com/in/artistic18/')}
          className={classes.icons}
        />
        <FaTwitter
          onClick={() => window.open('https://twitter.com/Hrishit15')}
          style={{ marginLeft: '3rem' }}
          className={classes.icons}
        />
      </div>
    </div>
  );
}

export default Contact;
