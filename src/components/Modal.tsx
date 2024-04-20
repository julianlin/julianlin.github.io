import styled from '@emotion/styled';
import { Dispatch, FC, SetStateAction } from 'react';
import { theme } from '../theme';

import Video from '../assets/squat.mp4';

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const ModalContainer = styled.div`
  background-color: ${theme.colors.modalBackground};
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
`;

type ModalType = {
  display: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<ModalType> = ({ display, setDisplayModal }) => {
  if (!display) {
    return null;
  }

  return (
    <ModalContainer>
      <ContentWrapper onClick={() => setDisplayModal(false)}>
        <video controls autoPlay src={Video} />
      </ContentWrapper>
    </ModalContainer>
  );
};

export default Modal;
