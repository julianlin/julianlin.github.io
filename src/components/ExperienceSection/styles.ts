import styled from '@emotion/styled';
import { breakpoints, theme } from '../../defaultTheme';

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