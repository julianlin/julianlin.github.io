import styled from '@emotion/styled';
import { Modal } from '@mui/material';

export const ModalContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  div {
    height: 100%;
  }

  video {
    max-height: 100%;
  }
`;

export const StyledModal = styled(Modal)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
