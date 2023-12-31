import { useState } from "react";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editUser, usingPackage } from "../../services/UserService";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../UsingModal/UsingModal.css";

const UsingModal = ({
  show,
  handleClose,
  dataUserAdd,
  selectedServiceId,
  id,
  selectedServiceName,
  apartment,
  getApartmentPackage,
}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");
  const [time, setTime] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [noteError, setNoteError] = useState("");

  const currentHour = new Date().getHours();

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const validateName = () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      setNameError("Tên khách hàng không được để trống");
      return false;
    }

    if (trimmedName.length < 2) {
      setNameError("Tên phải dài hơn 2 kí tự");
      return false;
    }

    if (/[0-9]/.test(trimmedName)) {
      setNameError("Tên không được chứa số");
      return false;
    }

    setNameError("");
    return true;
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!phoneRegex.test(phoneNumber.trim())) {
      setPhoneNumberError("Số điện thoại phải có 10 số");
      return false;
    } else {
      setPhoneNumberError("");
      return true;
    }
  };

  const validateNote = () => {
    if (note.trim().length > 200) {
      setNoteError("Ghi chú phải ít hơn 200 kí tự");
      return false;
    } else {
      setNoteError("");
      return true;
    }
  };

  const handleUsingPackage = async () => {
    const isNameValid = validateName();
    const isPhoneNumberValid = validatePhoneNumber();
    const isNoteValid = validateNote();

    if (isNameValid && isPhoneNumberValid && isNoteValid && time !== "") {
      try {
        handleClose();

        const res = await usingPackage({
          apartmentPackageId: id,
          serviceId: selectedServiceId,
          customerName: name,
          customerPhone: phoneNumber,
          note: note,
          shiftTime: Number(time),
        });

        if (res && res.status === 200) {
          getApartmentPackage();
          toast.success("Sử dụng thành công");
        }
      } catch (error) {
        console.log("Error Using Service", error);
        toast.error("Xảy ra sự cố");
      }
    } else {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    }
  };

  return (
    <>
      <Modal show={show} dialogClassName="UsingModal">
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#ff8228" }}
          onClick={handleClose}
        >
          <Modal.Title
            className="h6"
            style={{ color: "white", marginLeft: "10px" }}
          >
            Sử Dụng Dịch Vụ
          </Modal.Title>
        </Modal.Header>
        <div className="mt-3" style={{ marginLeft: "15px" }}>
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
                  <p>{apartment?.type?.type}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ padding: "15px" }}>
          <div className="form_table">
            <p
              style={{
                color: "#ff8228",
                fontSize: "18px",
                fontWeight: "bold",
                // borderBottom: '2px solid #d9d9d9'
              }}
            >
              {selectedServiceName}
            </p>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-5" controlId="formName">
                  <Form.Label>Tên khách hàng</Form.Label>
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
                <Form.Group className="mb-5" controlId="formPhone">
                  <Form.Label>Số điện thoại</Form.Label>
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
                <Form.Group className="mb-5" controlId="formNote">
                  <Form.Label>Ghi chú cho nhân viên</Form.Label>
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
                  <Form.Label style={{ marginRight: "10px" }}>
                    Giờ thực hiện
                  </Form.Label>
                  <FormControl sx={{ minWidth: 130 }} size="small">
                    <InputLabel id="demo-select-small-label">Chọn</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={time}
                      label="Time"
                      onChange={handleChange}
                    >
                      javascript Copy
                      <MenuItem
                        value="0"
                        disabled={currentHour < 7 || currentHour >= 9}
                      >
                        7:00 AM - 9:00 AM
                      </MenuItem>
                      <MenuItem value="1" disabled={currentHour >= 11}>
                        9:00 AM - 11:00 AM
                      </MenuItem>
                      <MenuItem value="2" disabled={currentHour >= 15}>
                        1:00 PM - 3:00 PM
                      </MenuItem>
                      <MenuItem value="3">3:00 PM - 5:00 PM</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Form>
            </Modal.Body>
          </div>
        </div>
        <Modal.Footer style={{ border: "none" }}>
          <Button
            variant="secondary"
            className="modal-btn-close"
            onClick={() => handleClose()}
          >
            HUỶ
          </Button>
          <Button
            variant="primary"
            className="modal-btn-save"
            onClick={() => handleUsingPackage()}
          >
            SỬ DỤNG
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UsingModal;
