import React, { useEffect } from "react";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext, customTheme } from "../ThemeContext/ThemeContext.jsx";
// import "./Modal.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { getCustomerConfirm } from "../../services/UserService.js";
import { useParams } from "react-router-dom";
import { formatDate, formatTime } from "../../utils/tools.js";
import { toast } from "react-toastify";

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

  return (
   
    <div className="confirm modal" style={{ backgroundColor: theme.background }}>
      <div className="confirm modal-content">
        <div className="confirm modal-header">
          <h5>CHI TIẾT CÔNG VIỆC</h5>
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
    <h6>STAFF</h6>
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
        <tr>
          <th>Đánh giá:</th>
          <td>
            <input
              type="text"
              name="feedback"
              value={feedBack}
              onChange={(e) => setFeedBack(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <th>Rate sao:</th>
          <td>
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </td>
        </tr>
      </tbody>
    </table>
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
