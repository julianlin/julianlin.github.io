import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const ColumnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing[3]};
  text-align: center;

  ul {
    color: ${theme.palette.primary.contrastText};
    line-height: 2rem;
    list-style-type: none;
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
        color: ${theme.colors.light};

        svg {
          fill: ${theme.colors.light};
        }
      }
    }

    svg {
      cursor: pointer;
      fill: ${theme.colors.secondary};
      height: 1rem;
      padding-left: ${theme.spacing[1]};
      width: 1rem;
    }
  }

  svg {
    fill: ${theme.colors.secondary};
    height: ${theme.spacing[4]};
    width: ${theme.spacing[4]};
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    height: 600px;
    margin: 0;
    width: 100%;
  }
`;

export const VideoItem = styled.li`
  cursor: pointer;
  &:hover {
    color: ${theme.colors.light};

    svg {
      fill: ${theme.colors.light};
    }
  }
`;

export const Columns = styled.div`
  border-radius: 12px;
  border: 2px solid ${theme.colors.light};
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing[2]};
  max-width: 1200px;

  > div:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.light};
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    > div:not(:last-child) {
      border-bottom: none;
      border-right: 2px solid ${theme.colors.light};
    }
    flex-direction: row;
    width: 100%;
  }
`;

export const Summary = styled.div`
  align-items: center;
  color: ${theme.colors.contrast};
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding-bottom: ${theme.spacing[4]};
  padding-left: ${theme.spacing[2]};
  padding-right: ${theme.spacing[2]};
  text-align: center;

  @media only screen and (min-width: ${breakpoints.medium}) {
    max-width: 640px;
  }
`;

export const ProfileSectionContainer = styled.section`
  align-items: center;
  color: ${theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing[4]};
`;
