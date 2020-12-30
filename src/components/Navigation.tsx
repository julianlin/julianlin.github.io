import React, { useState }from 'react';
import styled from 'styled-components';

import {ReactComponent as CloseIcon} from '../assets/close-icon.svg';
import {ReactComponent as MenuIcon} from '../assets/menu-icon.svg';

const MobileNav = styled.div`
  width: 100%;

  div {
    float: left;

    svg {
      cursor: pointer;
      fill: ${p => p.theme.colors.primary};
      height: 40px;
      padding: 0;
      width: 40px;

      &:hover {
        fill: ${p => p.theme.colors.dark};
      }
    }

  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.small}) {
    display: none;
  }
`;

type MobileNavItemsType = {
  display: boolean;
};

const MobileNavItems = styled.ul<MobileNavItemsType>`
  color: ${p => p.theme.colors.primary};
  display: ${p => p.display ? 'block' : 'none'};
  font-size: 1.5rem;
  padding-left: ${p => p.theme.spacing[1]};

  li {
    cursor: pointer;
    font-weight: bold;
    height: ${p => p.theme.spacing[3]};
    list-style-type: none;
    padding-bottom: ${p => p.theme.spacing[2]};

    &:hover {
      color: ${p => p.theme.colors.dark};
    }
  }
`;

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

  @media only screen and (max-width: ${p => p.theme.breakpoints.small}) {
    display: none;
  }
`;

const NavItems = styled.div`
  margin-left: auto;
  margin-right: ${p => p.theme.spacing[3]};
`;

const NavigationContainer = styled.nav`
  background-color: ${p => p.theme.colors.contrast};
  display: flex;
  min-height: 2rem;
  padding: 1rem;
  top: 0px;
  width: 100%;

  svg {
    margin-left: auto;
    padding-right: ${p => p.theme.spacing[3]};
  }
`;


const Navigation = (props: any) => {
  const { pageRef, profileRef, experienceRef, linksRef } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const onClickNavItem = (ref: any) => {
    window.scrollTo(0, ref.current.offsetTop - 64);
  };


  const Links = [
    {
      name: 'About Me',
      ref: profileRef
    },
    {
      name: 'Experience',
      ref: experienceRef
    },
    {
      name: 'Links',
      ref: linksRef
    }
  ]

  return (
    <NavigationContainer>
      <MobileNav>
        <div>
          {
            menuOpen
              ? <CloseIcon onClick={() => setMenuOpen(false)}/>
              : <MenuIcon onClick={() => setMenuOpen(true)}/>
          }
          <MobileNavItems display={menuOpen}>
            {
              Links.map(link =>
                <li onClick={() => onClickNavItem(link.ref)}>
                  {link.name}
                </li>
              )
            }
          </MobileNavItems>
        </div>
      </MobileNav>
      <NavItems>
        {
          Links.map(link =>
            <NavItem onClick={() => onClickNavItem(link.ref)}>
              {link.name}
            </NavItem>
          )
        }
      </NavItems>
    </NavigationContainer>
  )
};

export default Navigation;