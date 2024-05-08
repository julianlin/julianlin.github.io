import { Close, Menu } from '@mui/icons-material';
import { FC, RefObject, useState } from 'react';
import {
  MobileNav,
  MobileNavItems,
  NavItem,
  NavItems,
  NavigationContainer,
} from './styles';
import { Drawer } from '@mui/material';

type NavigationProps = {
  experienceRef: RefObject<HTMLElement>;
  linksRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
};

export const Navigation: FC<NavigationProps> = ({
  experienceRef,
  linksRef,
  skillsRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClickNavItem = (ref: RefObject<HTMLElement>) => {
    if (ref.current) window.scrollTo(0, ref.current.offsetTop - 64);
  };

  const Links = [
    {
      name: 'Experience',
      ref: experienceRef,
    },
    {
      name: 'Skills',
      ref: skillsRef,
    },
    {
      name: 'Links',
      ref: linksRef,
    },
  ];

  return (
    <NavigationContainer>
      <MobileNav>
        <div>
          {menuOpen ? (
            <Close onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} />
          )}
          <Drawer
            anchor='top'
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <MobileNavItems>
              <Close onClick={() => setMenuOpen(false)} />
              {Links.map((link) => (
                <li onClick={() => onClickNavItem(link.ref)}>{link.name}</li>
              ))}
            </MobileNavItems>
          </Drawer>
        </div>
      </MobileNav>
      <NavItems>
        {Links.map((link) => (
          <NavItem onClick={() => onClickNavItem(link.ref)}>
            {link.name}
          </NavItem>
        ))}
      </NavItems>
    </NavigationContainer>
  );
};
