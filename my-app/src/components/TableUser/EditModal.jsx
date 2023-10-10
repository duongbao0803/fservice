import { useState } from "react";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editUser } from "../../services/UserService";

const EditModal = ({ show, handleClose, dataUserEdit, handleEditInfoUser }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleEditUser = async () => {
    let res = await editUser(name, phoneNumber);
    if (res && res.updateAt) {
      toast.success("Lưu thành công");
      handleEditInfoUser({
        phoneNumber: phoneNumber,
        name: name,
      });
      handleClose();
    } else {
      toast.error("Lưu thất bại");
    }
  };

  useEffect(() => {
    if (show) {
      setName(dataUserEdit.name);
      setPhoneNumber(dataUserEdit.phoneNumber);
    }
  }, [dataUserEdit]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>phoneNumber</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default EditModal;
