import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
    marginTop: '95.85vh',
    position: 'absolute',
    background: '#f500561e',
    width: '100%',
    height: '4.1vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '1vh',
    marginLeft: '5vw',
  },
  iconContainer: {
    marginTop: '-2vh',
    marginLeft: '80vw',
  },
  icons: {
    transform: 'scale(1.3)',
    color: '#fff',
    cursor: 'pointer',
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <div id="footer" className={classes.root}>
      <Typography id="footer-text" className={classes.typography}>
        © Designed and Developed By Hrishit Biswas, 2020
      </Typography>
      <div id="footer-icons" className={classes.iconContainer}>
        <FaGithub
          id="icon"
          onClick={() => window.open('https://github.com/Artistic18')}
          className={classes.icons}
        />
        <FaLinkedin
          id="icon"
          style={{ marginLeft: '3rem' }}
          onClick={() => window.open('https://www.linkedin.com/in/artistic18/')}
          className={classes.icons}
        />
        <FaTwitter
          id="icon"
          onClick={() => window.open('https://twitter.com/Hrishit15')}
          style={{ marginLeft: '3rem' }}
          className={classes.icons}
        />
      </div>
    </div>
  );
}

export default Footer;
