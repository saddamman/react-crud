import { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalBackDrop from './ModalBackDrop';
import { Card } from '../UI/Card';
import closeIcon from '../../assets/close-icon.svg';

const CommanModal = forwardRef(({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRoot = document.getElementById('modal-root');
  const modalBackdrop = document.getElementById('modal-backdrop');

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <>
      {createPortal(
        <ModalBackDrop onClick={() => setIsOpen(false)} />,
        modalBackdrop
      )}
      {createPortal(
        <div className="z-modalZIndex md:w-[500px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            className="p-2 rounded-full absolute right-3 top-3 bg-pink-500"
            onClick={() => setIsOpen(false)}
          >
            <img src={closeIcon} alt="close-btn" className="w-4 invert" />
          </button>
          <Card className="modal-content md:w-[500px] bg-white rounded-xl py-5">
            {children}
          </Card>
        </div>,
        modalRoot
      )}
    </>
  );
});
CommanModal.displayName = 'CommanModal';

export default CommanModal;
