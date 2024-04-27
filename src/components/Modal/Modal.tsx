import { Modal as MuiModal, ModalProps } from '@mui/material';
import { FC } from 'react';

export const Modal: FC<ModalProps> = ({ ...props }) => {
  return <MuiModal {...props}></MuiModal>;
};
