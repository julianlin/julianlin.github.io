import styled from '@emotion/styled';
import { theme } from '../../theme';

export const IntroSectionContainer = styled.section`
  align-items: center;
  color: ${theme.colors.textContrast};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${theme.spacing[4]};
  width: 100%;

  img {
    border-radius: 50%;
    padding-top: ${theme.spacing[2]};
  }
`;
