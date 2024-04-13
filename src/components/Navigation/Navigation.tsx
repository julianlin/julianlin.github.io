import { Close, Menu } from '@mui/icons-material';
import { useState } from 'react';
import { MobileNav, MobileNavItems, NavItem, NavItems, NavigationContainer } from './styles';

const Navigation = (props: any) => {
  const { profileRef, experienceRef, linksRef } = props;
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
              ? <Close onClick={() => setMenuOpen(false)}/>
              : <Menu onClick={() => setMenuOpen(true)}/>
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