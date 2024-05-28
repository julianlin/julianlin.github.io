import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const ColumnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing[3]};
  text-align: center;

  h3 {
    margin-top: ${theme.spacing[2]};
  }

  ul {
    color: ${theme.palette.primary.contrastText};
    line-height: 2rem;
    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      text-decoration: none;

      &:visited {
        color: ${theme.palette.primary.contrastText};
      }

      &:hover {
        color: ${theme.palette.secondary.main};

        svg {
          fill: ${theme.palette.secondary.main};
        }
      }
    }

    svg {
      cursor: pointer;
      fill: ${theme.palette.secondary.main};
      height: 1rem;
      padding-left: ${theme.spacing[1]};
      width: 1rem;
    }
  }

  svg {
    fill: ${theme.palette.secondary.main};
    height: ${theme.spacing[4]};
    width: ${theme.spacing[4]};
  }
`;

export const VideoItem = styled.li`
  cursor: pointer;
  &:hover {
    color: ${theme.palette.secondary.main};

    svg {
      fill: ${theme.palette.secondary.main};
    }
  }
`;

export const Columns = styled.div`
  border-radius: 12px;
  border: 2px solid ${theme.palette.secondary.main};
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  > div:not(:last-child) {
    border-bottom: 1px solid ${theme.palette.secondary.main};
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    > div:not(:last-child) {
      border-bottom: none;
      border-right: 2px solid ${theme.palette.secondary.main};
    }
    flex-direction: row;
    width: 100%;
  }
`;

export const ProfileSectionContainer = styled.section`
  align-items: center;
  color: ${theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};

  @media only screen and (max-width: ${breakpoints.medium}) {
    padding: ${theme.spacing[2]};
  }
`;
