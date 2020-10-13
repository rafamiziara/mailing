import React from 'react';
import { Button, Modal, ModalContent } from './styles';

export default function SimpleModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} src="/add.svg" />
      {open ? (
        <Modal id="modal" open={open} onClick={(event) => {
          const modal = document.getElementById('modal')
          if (event.target === modal) {
            handleClose();
          }
        }}>
          <ModalContent>
            <h2>Alert!</h2>
            <p>{props.text}</p>
          </ModalContent>
        </Modal>
      ) : (<div></div>)}
    </div>
  );
}