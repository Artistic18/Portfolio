import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavLinksExt,
} from './NavElements';

function Navbar({ toggle }) {
  const [navColor, setNavColor] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) setNavColor(true);
    else setNavColor(false);
  };
  window.addEventListener('scroll', handleScroll);

  console.log(navColor);

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: '1', width: '100%' }}>
      <Nav navColor={navColor}>
        <NavbarContainer>
          <NavLogo to="/">HB</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksExt>
                <Link
                  style={{
                    textDecoration: 'none',
                    background: '#f50057',
                    borderRadius: '10px',
                    padding: '0.5rem',
                    color: '#fff',
                  }}
                  to={{
                    pathname:
                      'https://drive.google.com/file/d/1KYNWZDvpS_6lN5u7_yUc0YIPVAtPO76e/view?usp=sharing',
                  }}
                  target="_blank"
                >
                  Resume/CV
                </Link>
              </NavLinksExt>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
