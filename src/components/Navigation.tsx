import React from 'react';
import styled from 'styled-components';
import {ReactComponent as MenuIcon} from '../assets/menu-icon.svg';

const NavItem = styled.a`
  background: none;
  border: none;
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
  fill: none;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: ${p => p.theme.spacing[2]};
  margin-right: ${p => p.theme.spacing[2]};
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.dark};
  }
`;

const NavItems = styled.div`
`;

const NavigationContainer = styled.nav`
  background-color: ${p => p.theme.colors.contrast};
  display: flex;
  height: 2rem;
  padding: 1rem;
  top: 0px;
  width: 100%;

  div {
    margin-left: auto;
    margin-right: ${p => p.theme.spacing[3]};
  }

  svg {
    margin-left: auto;
    padding-right: ${p => p.theme.spacing[3]};
  }
`;

const Navigation = (props: any) => {
  const { pageRef, profileRef, experienceRef, linksRef } = props;

  const onClickNavItem = (ref: any) => {
    window.scrollTo(0, ref.current.offsetTop - 64);
  };

  return (
    <NavigationContainer>
      <NavItems>
        <NavItem onClick={() => onClickNavItem(profileRef)}>
          About Me
        </NavItem>
        <NavItem onClick={() => onClickNavItem(experienceRef)}>
          Experience
        </NavItem>
        <NavItem onClick={() => onClickNavItem(linksRef)}>
          Links
        </NavItem>
      </NavItems>
    </NavigationContainer>
  )
};

export default Navigation;