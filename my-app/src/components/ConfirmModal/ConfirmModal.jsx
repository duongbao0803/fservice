import React from "react";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext, customTheme } from "../ThemeContext/ThemeContext.jsx";
import "./Modal.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { getCustomerConfirm } from "../../services/UserService.js";
import { formatDate, formatTime } from "../../utils/tools.js";
import { toast } from "react-toastify";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function Modal({
  isOpen,
  onClose,
  selectedSworkingHistory,
  staffInfoOrder,
  selectedCompleteTime,
  selectedShiftTime,
  selectedServiceName,
  state,
}) {
  const [rating, setValue] = useState(5);
  const [feedBack, setFeedBack] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const [activeSuccess, setActiveSuccess] = useState(false);
  const [activeError, setActiveError] = useState(false);
  const theme = useContext(ThemeContext);
  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const res = await getCustomerConfirm(selectedSworkingHistory, {
        id: selectedSworkingHistory,
        status: 2,
        feedback: feedBack,
        isConfirm: true,
        rating: rating,
      });
      if (res && res.status === 200) {
        setIsConfirm(res.data.isConfirm);
        toast.success("Xác nhận thành công");
        onClose();
      } else {
        setIsConfirm(res.data.isConfirm);
        toast.error("Xác nhận thất bại");
      }
    } catch (error) {
      console.log("Error Submitting ", error);
    }
  };

  const handleClickSuccess = () => {
    console.info('You clicked the Chip.');
    setActiveSuccess(!activeSuccess);
    setActiveError(false);

  };
  const handleClickError = () => {
    console.info('You clicked the Chip.');
    setActiveError(!activeError);
    setActiveSuccess(false);
  };


  return (

    <div className="confirm modal" style={{ backgroundColor: theme.background }}>
      <div className="confirm modal-content">
        <div className="confirm modal-header">
          <h5>XÁC NHẬN CÔNG VIỆC</h5>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
            onClick={onClose}
          >
            <CloseIcon>ĐÓNG</CloseIcon>
          </button>
        </div>
        <div className="confirm modal-body">
          <section className="confirm modal-job">
            <h6>DỊCH VỤ</h6>
            <table className="modal-confirm_table">
              <tbody>
                <tr>
                  <th>Thông tin căn hộ:</th>
                  <td>{state.selectedApartment.roomNo} - {state.selectedApartment.type.building.name} - Vinhomes Grand Park</td>
                </tr>
                <tr>
                  <th>Giờ làm việc:</th>
                  <td>{selectedShiftTime}</td>
                </tr>
                <tr>
                  <th>Tên dịch vụ:</th>
                  <td>{selectedServiceName}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="confirm modal-contact">
            <h6>NHÂN VIÊN THỰC HIỆN</h6>
            <table className="modal-confirm_table">
              <tbody>
                <tr>
                  <th>Tên nhân viên:</th>
                  <td>{staffInfoOrder.name}</td>
                </tr>
                <tr>
                  <th>Số điện thoại:</th>
                  <td>{staffInfoOrder.phoneNumber}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{staffInfoOrder.email}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="confirm modal-Info">
            <h6>CÔNG VIỆC</h6>
            <table className="modal-confirm_table">
              <tbody>
                <tr>
                  <th>Thời gian hoàn thành:</th>
                  <td>{formatDate(selectedCompleteTime)} - {formatTime(selectedCompleteTime)}</td>
                </tr>
              </tbody>
            </table>
            <div className="rating mt-3">
              <h5 style={{ fontWeight: '600' }}>ĐÁNH GIÁ</h5>
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>

              <input
                type="text"
                name="feedback"
                value={feedBack}
                onChange={(e) => setFeedBack(e.target.value)}
                className="form-control"
                style={{ width: '60%', marginBottom: '20px' }}
              />
              <Stack direction="row" spacing={1}>
                <Chip className={activeSuccess ? 'active' : ''}
                  label="Đã hoàn thành"
                  variant="outlined"
                  onClick={handleClickSuccess}
                  sx={{
                    borderColor: 'green',
                    color: activeSuccess ? '#fff' : 'green',
                    backgroundColor: activeSuccess ? 'green' : 'transparent',
                    '&:hover': {
                      backgroundColor: activeSuccess ? 'lightgreen' : 'transparent',
                      color: activeSuccess ? 'black' : 'green',
                    },
                  }}
                />
                <Chip
                  label="Chưa hoàn thành"
                  variant="outlined"
                  onClick={handleClickError}
                  sx={{
                    borderColor: 'red',
                    color: activeError ? '#fff' : 'red',
                    backgroundColor: activeError ? 'red' : 'transparent',
                    '&:hover': {
                      backgroundColor: activeError ? 'lightred' : 'transparent',
                      color: activeError ? 'black' : 'red',
                    },
                  }}


                />
              </Stack>
            </div>

          </section>
        </div>

        <div
          className="function-button"
          style={{ textAlign: "right", margin: "10px" }}
        >
          <div className="modal-btn">
            <button
              style={{
                color: "white",
                backgroundColor: "#03AC00",
                borderRadius: "10px",
                minWidth: "120px",
                padding: "5px",
                border: "none",
                outline: "none",
              }}
              onClick={onClose}
            >
              Đóng
            </button>
            <button
              style={{
                color: "white",
                backgroundColor: "#ff8228",
                borderRadius: "10px",
                minWidth: "120px",
                padding: "5px",
                border: "none",
                outline: "none",
                marginLeft: "10px",
              }}
              onClick={handleSubmit}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Modal;
