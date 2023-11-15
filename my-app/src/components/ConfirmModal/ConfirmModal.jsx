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
    <div className="modal" style={{ backgroundColor: theme.background }}>
      <div className="modal-content">
        <div className="modal-header">
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
        <div className="modal-body">
          <section className="job-details">
            <h6>DỊCH VỤ</h6>
            <div className="modal-table">
              <div>
                <p className="modal-title">Thông tin căn hộ:</p>
                <p>
                  {state.selectedApartment.roomNo} -{" "}
                  {state.selectedApartment.type.building.name} - Vinhomes Grand
                  Park
                </p>
              </div>
              <div>
                <td className="modal-title">Giờ làm việc:</td>
                <p>{selectedShiftTime}</p>
              </div>
              <div>
                <p className="modal-title">Tên dịch vụ</p>
                <p>{selectedServiceName}</p>
              </div>
            </div>
          </section>
          <section className="contact-details">
            <h6>STAFF</h6>
            <div className="modal-table">
              <div>
                <p className="modal-title">Tên nhân viên:</p>

                <p>{staffInfoOrder.name}</p>
              </div>
              <div>
                <p className="modal-title">Số điện thoại:</p>

                <p>{staffInfoOrder.phoneNumber}</p>
              </div>
              <div>
                <p className="modal-title">Email</p>

                <p>{staffInfoOrder.email}</p>
              </div>
            </div>
          </section>
          <section className="Info-details">
            <h6>CÔNG VIỆC</h6>
            <div className="modal-table">
              <p className="modal-title">Thời gian hoàn thành</p>
              <p>
                {formatDate(selectedCompleteTime)} -{" "}
                {formatTime(selectedCompleteTime)}
              </p>

              <p className="modal-title">Đánh giá</p>

              <input
                type="text"
                name="feedback"
                value={feedBack}
                onChange={(e) => setFeedBack(e.target.value)}
              />
              <p className="modal-title">Rate sao</p>

              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
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
