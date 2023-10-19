import { useState } from "react";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "../../services/UserService";

const DeleteModal = ({ show, handleClose, dataUserDelete, getUser }) => {
  const confirmDelete = async () => {
    try {
      let res = await deleteUser(dataUserDelete);
      console.log("check delete", res.data.status);
      if (res.data.status === "Success") {
        toast.success("Xóa thành công");
        handleClose();
        getUser(1);
      } else {
        toast.error("Xóa thất bại");
      }
    } catch (error) {
      console.log("Fetching deleteUser error", error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this user ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default DeleteModal;
