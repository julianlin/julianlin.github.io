import styled from '@emotion/styled';
import { breakpoints, spacing, theme } from '../../defaultTheme';

export const LinksSectionContainer = styled.section`
align-items: center;
background-color: ${theme.colors.primary};
color: ${theme.colors.contrast};
display: flex;
flex-direction: column;
padding-bottom: ${spacing.m};
padding-top: ${spacing.m};
width: 100%;

ul {
  padding: 0;
}

li {
  margin: ${spacing.m};
  margin-top: 0;

  a {
    align-items: center;
    border-radius: 4px;
    color: ${theme.colors.contrast};
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: ${spacing.s};
    text-decoration: none;
    width: ${spacing.xl};

    &:active {
      border: 1px solid ${theme.colors.contrast};
    }

    &:hover {
      background-color: ${theme.colors.light};

      svg {
        fill: ${theme.colors.light};
      }
    }

    &:visited: {
      color: ${theme.colors.contrast};
    }
  }
}

@media only screen and (min-width: ${breakpoints.medium}) {
  li {
    display: inline;
    float: left;
  }
}
`;