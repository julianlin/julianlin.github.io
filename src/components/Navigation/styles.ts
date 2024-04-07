import styled from '@emotion/styled';
import { breakpoints, theme } from '../../defaultTheme';

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