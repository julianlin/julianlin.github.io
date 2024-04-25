import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const LinksSectionContainer = styled.section`
  align-items: center;
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing[1]} 0;
  width: 100%;

  ul {
    padding: 0;
  }

  li {
    margin: ${theme.spacing[1]};
    margin-top: 0;

    a {
      align-items: center;
      border-radius: 4px;
      color: ${theme.colors.contrast};
      display: flex;
      font-weight: bold;
      justify-content: center;
      padding: ${theme.spacing[1]} ${theme.spacing[2]};
      text-decoration: none;
      width: ${theme.spacing[3]};

      &:active {
        border: 2px solid ${theme.colors.contrast};
      }

      &:hover {
        background-color: ${theme.palette.secondary.main};

        svg {
          fill: ${theme.palette.secondary.main};
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
