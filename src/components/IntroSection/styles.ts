import styled from '@emotion/styled';
import { theme } from '../../theme';

export const IntroSectionContainer = styled.section`
  align-items: center;
  color: ${theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${theme.spacing[4]};
  width: 100%;

  img {
    border-radius: 50%;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`;