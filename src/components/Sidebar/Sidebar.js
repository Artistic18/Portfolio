import React from 'react';
import { Link } from 'react-router-dom';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarLinkExt,
} from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">
            Home
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/projects">
            Projects
          </SidebarLink>
          <SidebarLinkExt onClick={toggle}>
            <Link
              style={{
                textDecoration: 'none',
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
          </SidebarLinkExt>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
