import styled from '@emotion/styled';
import { breakpoints, theme } from './theme';

export const AppContainer = styled.div`
  background-color: ${theme.palette.primary.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 300px;
  width: 100%;
`;

export const ContentContainer = styled.div`
  align-items: center;
  background-color: ${theme.palette.primary.main};
  border-radius: 8px;
  box-shadow:
    rgba(15, 17, 21, 0.25) 0px 4px 6px,
    rgba(15, 17, 21, 0.1) 0px 5px 7px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing[4]};
  padding: ${theme.spacing[4]};
  width: 80%;

  @media only screen and (max-width: ${breakpoints.medium}) {
    padding: ${theme.spacing[4]} ${theme.spacing[1]};
    width: unset;
  }
`;
