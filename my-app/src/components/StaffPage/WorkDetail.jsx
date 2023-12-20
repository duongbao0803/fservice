import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./WorkDetail.css";
import { Button, Steps } from "antd";
import { Rating } from "@mui/material";
import { confirmWork, getOrder } from "../../services/UserService";
import { toast } from "react-toastify";
import { formatDate } from "../../utils/tools";

function WorkDetail() {
  const { Step } = Steps;
  const { state } = useLocation();

  useEffect(() => {
    if (
      state.info.status.includes("Working") ||
      state.info.status.includes("Completed")
    ) {
      setJobAccepted(true);
    } else {
      setJobAccepted(false);
    }
  }, [state.info.status]);

  const [jobAccepted, setJobAccepted] = useState(false);

  const [value, setValue] = React.useState(2);

  const handleSubmit = async () => {
    try {
      const res = await getOrder(state.info.id, {
        id: state.info.id,
        status: 1,
      });

      if (res && res.status === 200) {
        toast.success("Nhận việc thành công");
        // state.fetchStaff();
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
      const res = await confirmWork(state.info.id, {
        id: state.info.id,
        status: 2,
      });
      console.log("check log", res);

      if (res && res.status === 200) {
        toast.success("Hoàn thành công việc");
        state.fetchStaff();
      } else {
        toast.success("Hoàn thành công việc thất bại");
      }
    } catch (error) {
      console.log("Error Completing Service", error);
    }
  };

  return (
    <>
      <div className="mt-4">
        <h5 style={{ color: "#ff8228" }}>
          <Link to={"/staff/work"} style={{ color: "#000" }}>
            Danh sách công việc
          </Link>{" "}
          <ArrowRightIcon /> Công việc chi tiết
        </h5>
      </div>

      <div className="staff-container mt-3" style={{ overflow: "scroll" }}>
        <div className="data-table">
          <div className="mt-4" style={{ height: 500, width: "100%" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <h6 className="section-title">CÔNG VIỆC</h6>
                  <table className="table-work">
                    <tbody>
                      <tr>
                        <td className="table-title">Công việc:</td>
                        <td>
                          <p>
                            {" "}
                            {state.info?.service.name ||
                              "VỆ SINH NHÀ CỬA, BÀN GHẾ"}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Địa chỉ:</td>
                        <td>
                          <p>
                            {" "}
                            Tòa {state.apartmentInfo.building} - Phòng{" "}
                            {state.apartmentInfo.roomNo} - Vinhomes Grand Park
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Loại căn hộ:</td>
                        <td>
                          <p>{state.apartmentInfo.type.type}</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Giờ làm việc:</td>
                        <td>
                          <p>
                            {" "}
                            {formatDate(state.info?.createdDate)} -{" "}
                            {state.info?.shiftTime}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Ghi chú:</td>
                        <td>
                          <p>{state.info?.note}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mb-3">
                  <h6 className="section-title">LIÊN HỆ</h6>
                  <table className="table-work">
                    <tbody>
                      <tr>
                        <td className="table-title">Khách hàng:</td>
                        <td>
                          <p>{state.info?.customerName}</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Điện thoại:</td>
                        <td>
                          <p>{state.info?.customerPhone}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="section-title">ĐÁNH GIÁ</h6>
                <div>
                  <table className="feedback-table">
                    <tr>
                      <td>
                        <p>Độ hài lòng:</p>
                      </td>
                      <td>
                        <Rating
                          name="simple-controlled"
                          value={4}
                          readOnly
                          sx={{ fontSize: "1.8rem" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Nhận xét:</p>
                      </td>
                      <td>
                        <p>Làm tốt lắm</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h6 className="section-title">THÔNG TIN</h6>
              <div className="mt-3">
                <Steps
                  direction="horizontal"
                  current={
                    state?.info?.status.includes("Pending")
                      ? 0
                      : state?.info?.status.includes("Working")
                      ? 1
                      : state?.info?.status.includes("Completed")
                      ? 3
                      : -1
                  }
                >
                  <Step
                    title="Đang chờ"
                    description={
                      <div>
                        <p className="text-date">17.12.2023 - 7:00</p>
                        {state?.info?.status.includes("Completed") ||
                        state?.info?.status.includes("Working") ? (
                          ""
                        ) : (
                          <button
                            className="btn-work"
                            onClick={() => handleSubmit()}
                          >
                            Nhận việc
                          </button>
                        )}
                      </div>
                    }
                  />
                  <Step
                    title="Đang thực hiện"
                    description={
                      <div>
                        <p className="text-date">17.12.2023 - 7:30</p>
                        {jobAccepted &&
                          !state?.info?.status.includes("Completed") && (
                            <button
                              className="btn-work btn-active"
                              onClick={() => handleConfirm()}
                            >
                              Hoàn thành
                            </button>
                          )}
                      </div>
                    }
                  />
                  <Step
                    title="Đã hoàn thành"
                    description={
                      <div>
                        <p className="text-date">17.12.2023 - 8:00</p>
                        <p style={{ fontSize: "15px", padding: "3px" }}>
                          <i
                            className="fa-solid fa-spinner"
                            style={{ color: "#9AA14B" }}
                          ></i>
                          <span style={{ color: "#9AA14B" }}>
                            {" "}
                            Đang chờ xác nhận
                          </span>
                        </p>
                      </div>
                    }
                  />
                </Steps>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetail;
