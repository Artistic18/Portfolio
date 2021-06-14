import React from 'react';
import Particles from 'react-particles-js';

function Particle() {
  return (
    <Particles
      style={{ position: 'absolute' }}
      params={{
        particles: {
          color: {
            value: '#ffffff',
          },
          line_linked: {
            color: {
              value: '#000000',
            },
          },
          number: {
            value: 111,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          lineLinked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
        },
      }}
    />
  );
}

export default Particle;
