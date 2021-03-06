import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./Modal";

interface ModalAlert {
  okText?: string,
  children?: React.ReactNode,
  title?: React.ReactNode,
  isOpen?: boolean,
  onDismiss?: () => void,
  toggle?: () => void,
}

const ModalAlert: React.FC<ModalAlert> = ({ onDismiss, toggle, children, title, isOpen, okText = "ok" }) => {
  const onDissmissClick = () => {
    if (onDismiss) {
      onDismiss();
    }
    toggle();
  };
  return (
      <Modal unmountOnClose isOpen={isOpen} toggle={onDissmissClick}>
          <ModalHeader toggle={onDissmissClick}>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={onDissmissClick}>
                  {okText}
              </Button>
          </ModalFooter>
      </Modal>
  );
};

ModalAlert.displayName = "ModalAlert";
export default ModalAlert;
