import { useRef, FC, PropsWithChildren, MutableRefObject } from 'react';

import ReactModal, { Styles } from 'react-modal';
import Icon from '../Icon/Icon';
import { Close } from './Modal.styled';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  classWrap?: string;
  classOverlay?: string;
  classButtonClose?: string;
  initialFocus?: MutableRefObject<HTMLElement | null>;
  video?: boolean;
}

ReactModal.setAppElement('#root');

const customStyles: Styles = {
  overlay: { zIndex: 10, overflowX: 'auto' },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    position: 'absolute',
    width: 'auto',
    padding: '32px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, visible, onClose }) => {
  let modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <ReactModal
      contentRef={(instance) => instance && (modalRef.current = instance)}
      isOpen={visible}
      style={customStyles}>
      <Close onClick={onClose}>
        <Icon name="close" />
      </Close>
      <div>{children}</div>
    </ReactModal>
  );
};

export default Modal;
