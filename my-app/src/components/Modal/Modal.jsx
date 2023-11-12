import React, { useEffect } from "react";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext, customTheme } from "../ThemeContext/ThemeContext.jsx";
import "./Modal.css";
import { formatDate } from "../../utils/tools.js";
import { confirmWork, getOrder } from "../../services/UserService.js";
import Info from "../confirm/Info.jsx";
import { toast } from "react-toastify";
import { useState } from "react";

function Modal({
  isOpen,
  service,
  onClose,
  staffData,
  info,
  building,
  roomNo,
  fetchStaff,
}) {
  useEffect(() => {
    if (info.status.includes("Working") || info.status.includes("Completed")) {
      setJobAccepted(true);
    } else {
      setJobAccepted(false);
    }
  }, [info.status]);

  const [jobAccepted, setJobAccepted] = useState(false);
  const theme = useContext(ThemeContext);
  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const res = await getOrder(info.id, {
        id: info.id,
        status: 1,
      });

      if (res && res.status === 200) {
        toast.success("Nhận việc thành công");
        onClose();
        fetchStaff();
        setJobAccepted(true);
      } else {
        toast.success("Nhận việc thất bại");
      }
    } catch (error) {
      console.log("Error Submitting Order", error);
    }
  };
  const handleConfirm = async () => {
    try {
      const res = await confirmWork(info.id, {
        id: info.id,
        status: 2,
      });

      if (res && res.status === 200) {
        toast.success("Hoàn thành công việc");
        onClose();
        fetchStaff();
      } else {
        toast.success("Hoàn thành công việc thất bại");
      }
    } catch (error) {
      console.log("Error Completing Service", error);
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
            <h6>CÔNG VIỆC</h6>
            <p style={{ color: "#ff8228", fontWeight: "bold" }}>
              {service?.description || "VỆ SINH NHÀ CỬA, BÀN GHẾ"}
            </p>
            <div className="modal-table">
              <table>
                <tbody>
                  <tr>
                    <td className="modal-title">Địa chỉ:</td>
                    <td>
                      <p>"Vinhomes Grand Park"</p>
                      <p>
                        Tòa {building} - Phòng {roomNo}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">Giờ làm việc:</td>
                    <td>
                      <p>
                        {formatDate(info?.apartmentPackage.startDate)} -{" "}
                        {info?.shiftTime}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">Ghi chú:</td>
                    <td>
                      <p>{info?.note}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="contact-details">
            <h6>LIÊN HỆ</h6>
            <div className="modal-table">
              <table>
                <tbody>
                  <tr>
                    <td className="modal-title">Khách Hàng:</td>
                    <td>
                      <p>{info?.customerName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">Số điện thoại:</td>
                    <td>
                      <p>{info?.customerPhone}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="Info-details">
            <h6>THÔNG TIN</h6>
            <div className="modal-table">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td className="modal-title">Trạng thái:</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "#0A6EBD",
                          borderRadius: "10px",
                          minWidth: "110px",
                          padding: "5px",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            color: "white",
                            padding: "0",
                            margin: "0",
                          }}
                        >
                          {info?.status}
                        </p>
                      </div>
                    </td>
                    <td>
                      {info.status.includes("Working") ||
                      info.status.includes("Completed") ? (
                        " "
                      ) : (
                        <div className="modal-btn">
                          <button
                            style={{
                              color: "white",
                              backgroundColor: "#ff8228",
                              borderRadius: "10px",
                              minWidth: "120px",
                              padding: "5px",
                              border: "none",
                              outline: "none",
                            }}
                            onClick={() => handleSubmit()}
                          >
                            Nhận việc
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">
                      <p>Ngày hoàn thành:</p>
                    </td>
                    <td>
                      {info.completeDate ? (
                        <p>{formatDate(info?.completeDate)}</p>
                      ) : (
                        ""
                      )}
                    </td>
                    {jobAccepted && !info.status.includes("Completed") && (
                      <td>
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
                            onClick={() => handleConfirm()}
                          >
                            Hoàn thành
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Modal;
