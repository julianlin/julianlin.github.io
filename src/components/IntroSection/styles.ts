import styled from '@emotion/styled';
import { theme } from '../../theme';

export const IntroSectionContainer = styled.section`
  align-items: center;
  color: ${theme.colors.textContrast};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${theme.spacing[4]};
  width: 100%;
`;

export const ProfilePicture = styled.img`
  border-radius: 60%;
  margin-top: ${theme.spacing[4]};
`;
