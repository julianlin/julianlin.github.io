import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const CompanyContainer = styled.div`
  color: ${theme.colors.textPrimary};

  a {
    align-items: center;
    color: ${theme.colors.textPrimary};
    display: flex;
    text-decoration: none;

    &:visited: {
      color: ${theme.colors.textPrimary};
    }

    &:hover {
      color: ${theme.colors.light};

      svg {
        fill: ${theme.colors.light};
      }
    }

    svg {
      cursor: pointer;
      fill: ${theme.colors.textPrimary};
      height: 1rem;
      padding-left: ${theme.spacing[1]};
      width: 1rem;
    }
  }

  div {
    margin-bottom: ${theme.spacing[1]};
  }

  h3 {
    color: ${theme.colors.darkText};
  }
`;

export const ContentWrapper = styled.div`
  border: 1px solid ${theme.colors.light};
  border-radius: 12px;
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
  margin-bottom: ${theme.spacing[2]};
  margin-top: ${theme.spacing[2]};
  width: 100%;
`;

export const EducationContainer = styled.div`
  color: ${theme.colors.textPrimary};

  div {
    margin-bottom: ${theme.spacing[1]};
  }

  h3 {
    color: ${theme.colors.darkText};
  }
`;
