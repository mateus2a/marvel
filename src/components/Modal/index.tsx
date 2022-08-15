import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import Close from '../../assets/close.svg';

import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
  contentLabel: string;
}

function Modal({ children, isOpen, onRequestClose, contentLabel }: ModalProps) {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '750px',
          background: '#fff',
        },
        overlay: {
          backgroundColor: '#000000bb',
        },
      }}
    >
      <S.Container>
        <button type="button" onClick={onRequestClose}>
          <img src={Close} alt="Fechar modal" />
        </button>
        {children}
      </S.Container>
    </ReactModal>
  );
}

export default Modal;
