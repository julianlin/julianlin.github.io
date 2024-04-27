import { ModalProps } from '@mui/material';
import { FC } from 'react';
import { ModalContent, StyledModal } from './styles';

export const Modal: FC<ModalProps> = ({ ...props }) => {
  return (
    <StyledModal {...props}>
      <ModalContent>{props.children}</ModalContent>
    </StyledModal>
  );
};
