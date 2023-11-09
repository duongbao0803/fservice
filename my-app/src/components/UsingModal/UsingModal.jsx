import { useState } from "react";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editUser } from "../../services/UserService";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../UsingModal/UsingModal.css'


const UsingModal = ({ show, handleClose, dataUserAdd }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [note, setNote] = useState('');
  const [time, setTime] = useState('');

  const [nameError, setNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [noteError, setNoteError] = useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const validateName = () => {
    const trimmedName = name.trim();


    if (!trimmedName) {
      setNameError('Name is required.');
      return false;
    }


    if (trimmedName.length < 2) {
      setNameError('Name must be at least 2 characters long.');
      return false;
    }


    if (/[0-9]/.test(trimmedName)) {
      setNameError('Name must not contain numbers.');
      return false;
    }


    setNameError('');
    return true;
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!phoneRegex.test(phoneNumber.trim())) {
      setPhoneNumberError('Invalid phone number.');
      return false;
    } else {
      setPhoneNumberError('');
      return true;
    }
  };

  const validateNote = () => {
    if (note.trim().length > 200) {
      setNoteError('Note must be less than 200 characters.');
      return false;
    } else {
      setNoteError('');
      return true;
    }
  };

  const handleUsingPackage = async () => {
    const isNameValid = validateName();
    const isPhoneNumberValid = validatePhoneNumber();
    const isNoteValid = validateNote();

    if (isNameValid && isPhoneNumberValid && isNoteValid) {
      try {

        handleClose();
      } catch (error) {
        toast.error('An error occurred!');

      }
    } else {

      toast.error('Please correct the errors before saving.');
    }
  };


  const closeAndResetModal = () => {
    setName('');
    setPhoneNumber('');
    setNote('');
    setTime('');
    setNameError('');
    setPhoneNumberError('');
    setNoteError('');
    handleClose();
  };

  return (
    <>

      <Modal show={true} onHide={handleClose} dialogClassName="UsingModal">
        <Modal.Header closeButton style={{ backgroundColor: '#ff8228' }}>
          <Modal.Title style={{ color: 'white' }}>Sử Dụng Dịch Vụ</Modal.Title>
        </Modal.Header>
        <div>
          <table className="apartment-table">
            <tbody>
              <tr>
                <th className="apartment-info">
                  <p>Căn hộ:</p>
                </th>
                <td className="apartment-detail">
                  <p>0301 - S101</p>
                </td>
              </tr>
              <tr>
                <th className="apartment-info">
                  <p>Loại căn hộ:</p>
                </th>
                <td className="apartment-detail">
                  <p>1 Phòng Ngủ</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ padding: '15px' }}>
          <div className="form_table">
            <h5 style={{
              color: '#ff8228',
              borderBottom: '2px solid #d9d9d9'
            }}>
              Tổng vệ sinh nhà cửa
            </h5>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onBlur={validateName}
                    isInvalid={!!nameError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {nameError}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    onBlur={validatePhoneNumber}
                    isInvalid={!!phoneNumberError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {phoneNumberError}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNote">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={note}
                    onChange={(e) => {
                      setNote(e.target.value);
                    }}
                    onBlur={validateNote}
                    isInvalid={!!noteError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {noteError}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="time_selected">
                  <Form.Label style={{ marginRight: '10px' }}>Giờ thực hiện</Form.Label>
                  <FormControl sx={{ minWidth: 130 }} size="small">
                    <InputLabel id="demo-select-small-label">Chọn</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={time}
                      label="Time"
                      onChange={handleChange}
                    >
                      <MenuItem value="7-9">7:00 AM - 9:00 AM</MenuItem>
                      <MenuItem value="9-11">9:00 AM - 11:00 AM</MenuItem>
                      <MenuItem value="13-15">1:00 PM - 3:00 PM</MenuItem>
                      <MenuItem value="15-17">3:00 PM - 5:00 PM</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Form>
            </Modal.Body>
          </div>
        </div>
        <Modal.Footer style={{border: 'none'}}>
          <Button variant="secondary" className="modal-btn-close" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="modal-btn-save" onClick={() => handleUsingPackage()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default UsingModal;
