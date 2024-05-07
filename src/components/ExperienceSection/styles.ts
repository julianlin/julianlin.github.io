import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const CompanyContainer = styled.div`
  color: ${theme.colors.textSecondary};

  a {
    align-items: center;
    color: ${theme.colors.textSecondary};
    display: flex;
    text-decoration: none;

    &:visited: {
      color: ${theme.colors.textSecondary};
    }

    &:hover {
      color: ${theme.palette.secondary.main};

      svg {
        fill: ${theme.palette.secondary.main};
      }
    }

    svg {
      cursor: pointer;
      fill: ${theme.palette.primary.contrastText};
      height: 1rem;
      padding-left: ${theme.spacing[1]};
      width: 1rem;
    }
  }

  div {
    margin-bottom: ${theme.spacing[1]};
  }
`;

export const ContentWrapper = styled.div`
  border: 2px solid ${theme.palette.secondary.main};
  border-radius: 12px;
  color: ${theme.palette.primary.contrastText};
  max-width: 1200px;
  padding: ${theme.spacing[2]};
  margin: ${theme.spacing[2]};

  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: ${theme.spacing[3]};
    width: 100%;
  }
`;

export const ExperienceSectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${theme.spacing[2]} 0;
  width: 80%;
`;

export const EducationContainer = styled.div`
  color: ${theme.palette.primary.contrastText};

  div {
    margin-bottom: ${theme.spacing[1]};
  }
`;
