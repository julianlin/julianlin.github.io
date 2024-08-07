import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const Summary = styled.div`
  align-items: center;
  color: ${theme.colors.contrast};
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding-bottom: ${theme.spacing[2]};
  padding-left: ${theme.spacing[2]};
  padding-right: ${theme.spacing[2]};
  text-align: center;

  p {
    margin-bottom: ${theme.spacing[2]};
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    max-width: 640px;
  }
`;
