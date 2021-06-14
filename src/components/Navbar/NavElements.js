import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: transparent;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #f50057;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  font-family: 'Kaushan Script', cursive;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-110%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
  &:after {
    content: '';
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.5s ease, background-color 0.5s ease;
  }
`;
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;
  font-family: Roboto;
  margin-left: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  &.active {
    border-bottom: 3px solid #f50057;
  }
  &:hover {
    color: #f50057;
    font-weight: bold;
    font-size: 1.3rem;
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const NavLinksExt = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;
  font-family: Roboto;
  margin-left: 50px;
  font-size: 1.3rem;
  font-weight: bold;
`;
