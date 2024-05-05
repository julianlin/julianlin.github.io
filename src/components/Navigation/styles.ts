import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const MobileNav = styled.div`
  padding: 0 ${theme.spacing[2]};
  width: 100%;

  div {
    float: left;

    svg {
      cursor: pointer;
      fill: ${theme.colors.contrast};
      height: 40px;
      padding: 0;
      width: 40px;

      &:hover {
        fill: ${theme.palette.primary.dark};
      }
    }

  }

  @media only screen and (min-width: ${breakpoints.small}) {
    display: none;
  }
`;

export const MobileNavItems = styled.div`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
  cursor: pointer;
  font-size: 1.5rem;
  padding: ${theme.spacing[2]};

  li {
    cursor: pointer;
    font-weight: bold;
    height: ${theme.spacing[3]};
    list-style-type: none;
    padding-bottom: ${theme.spacing[2]};

    &:hover {
      color: ${theme.palette.primary.dark};
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
    border-bottom: 2px solid ${theme.palette.primary.dark};
    color: ${theme.palette.primary.dark};
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
