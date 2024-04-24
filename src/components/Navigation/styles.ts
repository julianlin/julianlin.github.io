import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const MobileNav = styled.div`
  width: 100%;

  div {
    float: left;

    svg {
      cursor: pointer;
      fill: 
      height: 40px;
      padding: 0;
      width: 40px;

      &:hover {
        fill: ${theme.colors.dark};
      }
    }

  }

  @media only screen and (min-width: ${breakpoints.small}) {
    display: none;
  }
`;
type MobileNavItemsType = {
  display: boolean;
};

export const MobileNavItems = styled.ul<MobileNavItemsType>`
  color: ${theme.palette.primary.contrastText};
  display: ${(p) => (p.display ? 'block' : 'none')};
  font-size: 1.5rem;
  padding-left: ${theme.spacing[1]};

  li {
    cursor: pointer;
    font-weight: bold;
    height: ${theme.spacing[3]};
    list-style-type: none;
    padding-bottom: ${theme.spacing[2]};

    &:hover {
      color: ${theme.colors.dark};
    }
  }
`;

export const NavItem = styled.a`
  background: none;
  border: none;
  color: ${theme.palette.primary.contrastText};
  cursor: pointer;
  fill: none;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: ${theme.spacing[2]};
  margin-right: ${theme.spacing[2]};
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid ${theme.colors.dark};
    color: ${theme.colors.dark};
  }

  @media only screen and (max-width: ${breakpoints.small}) {
    display: none;
  }
`;

export const NavItems = styled.div`
  margin-left: auto;
  margin-right: ${theme.spacing[3]};
`;

export const NavigationContainer = styled.nav`
  display: flex;
  min-height: 2rem;
  padding: 1rem;
  top: 0px;
  width: 100%;

  svg {
    margin-left: auto;
    padding-right: ${theme.spacing[3]};
  }
`;
