import React, { Modal } from "react";
import { Modal } from "react-bootstrap";

function RegisterModal() {
  return (
    <Modal show="" onHide="">
      <Modal.Header closeButton>
        <Modal.Title>Cadastro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Cadastre aqui sua conta</p>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterModal;
