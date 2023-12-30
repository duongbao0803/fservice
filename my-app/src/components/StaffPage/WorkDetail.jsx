import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./WorkDetail.css";
import { Steps } from "antd";
import { Rating } from "@mui/material";
import {
  confirmWork,
  getApartmentId,
  getOrder,
  getWorkDetail,
} from "../../services/UserService";
import { toast } from "react-toastify";
import { formatDate, formatTime } from "../../utils/tools";

function WorkDetail({ id }) {
  const { Step } = Steps;
  const { state } = useLocation();
  const [jobAccepted, setJobAccepted] = useState(false);
  const [currentSteps, setCurrentSteps] = useState(0);
  const [workDetail, setWorkDetail] = useState({});
  const [apartmentInfo, setApartmentInfo] = useState({});
  const [workStatus, setWorkStatus] = useState("");
  const [rating, setRating] = React.useState(2);

  useEffect(() => {
    if (workStatus?.includes("Working") || workStatus?.includes("Completed")) {
      setJobAccepted(true);
    } else {
      setJobAccepted(false);
    }
    // fetchStaff(1);

    setCurrentSteps(
      workStatus?.includes("Pending")
        ? 0
        : workStatus?.includes("Working")
        ? 1
        : workStatus?.includes("Completed")
        ? 3
        : -1
    );
  }, [workStatus]);

  // const fetchStaff = async (pageNum) => {
  //   try {
  //     const res = await getStaffWorkPaging(
  //       localStorage.getItem("username"),
  //       pageNum
  //     );
  //     if (res && res.status === 200) {
  //     }
  //   } catch (Error) {
  //     console.log("Error fetching: ", Error);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const res = await getOrder(id, {
        id: id,
        status: 1,
      });
      if (res && res.status === 200) {
        toast.success("Nhận việc thành công");
        await getWork(id);
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
      const res = await confirmWork(id, {
        id: id,
        status: 2,
      });
      if (res && res.status === 200) {
        getWork(id);
        toast.success("Hoàn thành công việc");
      } else {
        toast.success("Hoàn thành công việc thất bại");
      }
    } catch (error) {
      console.log("Error Completing Service", error);
    }
  };

  // new
  useEffect(() => {
    getWork(id);
  }, [id]);

  const getWork = async (id) => {
    try {
      const res = await getWorkDetail(id);
      if (res && res.status === 200) {
        setWorkDetail(res.data);
        setWorkStatus(res.data.status);
        await fetchApartment(res.data.apartmentPackage.apartmentId);
        setRating(res.data.rating);
      }
    } catch (Error) {
      console.log("Error fetching: ", Error);
    }
  };

  const fetchApartment = async (id) => {
    try {
      const response = await getApartmentId(id);
      if (response && response.data && response.status === 200) {
        setApartmentInfo(response.data);
      }
    } catch (error) {
      console.error("Error fetching apartment:", error);
      return null;
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="workdetail">
          <div className="mt-4" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-12 mb-4">
                <h5 style={{ color: "#ff8228" }}>
                  <Link to={"/staff/work"} style={{ color: "#000" }}>
                    Danh sách công việc
                  </Link>{" "}
                  <ArrowRightIcon /> Công việc chi tiết
                </h5>
              </div>
              <div className="col-md-8">
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <div className="mb-3">
                    <h6 className="section-title">CÔNG VIỆC</h6>
                    <table className="table-work">
                      <tbody>
                        <tr>
                          <td className="table-title">Công việc:</td>
                          <td>
                            <p>
                              {" "}
                              {workDetail?.service?.name ||
                                "VỆ SINH NHÀ CỬA, BÀN GHẾ"}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-title">Địa chỉ:</td>
                          <td>
                            <p>
                              {" "}
                              Tòa {apartmentInfo?.type?.building?.name} - Phòng{" "}
                              {apartmentInfo?.roomNo} - Vinhomes Grand Park
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-title">Loại căn hộ:</td>
                          <td>
                            <p>{apartmentInfo?.type?.type}</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-title">Giờ làm việc:</td>
                          <td>
                            <p>
                              {" "}
                              {formatDate(workDetail?.createdDate)} -{" "}
                              {workDetail?.shiftTime}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-title">Ghi chú:</td>
                          <td>
                            <p>{workDetail?.note}</p>
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
                            <p>{workDetail?.customerName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-title">Điện thoại:</td>
                          <td>
                            <p>{workDetail?.customerPhone}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="mb-3"
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <h6 className="section-title">TRẠNG THÁI</h6>
                  <div className="mt-3">
                    <Steps direction="vertical" current={currentSteps}>
                      <Step
                        title="Đang chờ"
                        description={
                          <div>
                            <p className="text-date">
                              {formatDate(workDetail?.createdDate)} -{" "}
                              {formatTime(workDetail?.createdDate)}
                            </p>
                            {!jobAccepted &&
                            !workStatus?.includes("Completed") &&
                            !workStatus?.includes("Working") ? (
                              <button
                                className="btn-work"
                                onClick={() => handleSubmit()}
                              >
                                Nhận việc
                              </button>
                            ) : null}
                          </div>
                        }
                      />
                      <Step
                        title="Đang thực hiện"
                        description={
                          <div>
                            {workDetail?.workingDate !== null ? (
                              <p className="text-date">
                                {formatDate(workDetail?.workingDate)} -{" "}
                                {formatTime(workDetail?.workingDate)}
                              </p>
                            ) : (
                              ""
                            )}

                            {jobAccepted &&
                              !workStatus?.includes("Completed") && (
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
                          workStatus?.includes("Pending") ||
                          workStatus?.includes("Working") ? (
                            ""
                          ) : (
                            <div>
                              <p className="text-date">
                                {formatDate(workDetail?.completeDate)} -{" "}
                                {formatTime(workDetail?.completeDate)}
                              </p>

                              {workDetail?.isConfirm === null ? (
                                <p style={{ padding: "10px 0" }}>
                                  <i
                                    className="fa-solid fa-spinner"
                                    style={{ color: "#9AA14B" }}
                                  ></i>
                                  <span style={{ color: "#9AA14B" }}>
                                    {" "}
                                    Chưa xác nhận
                                  </span>
                                </p>
                              ) : workDetail?.isConfirm === true ? (
                                <p style={{ padding: "10px 0" }}>
                                  <i
                                    className="fa-solid fa-check"
                                    style={{ color: "#03AC00" }}
                                  />
                                  <span style={{ color: "#03AC00" }}>
                                    {" "}
                                    Đã xác nhận hoàn thành
                                  </span>
                                </p>
                              ) : workDetail?.isConfirm === false ? (
                                <p style={{ padding: "10px 0" }}>
                                  <i
                                    class="fa-solid fa-xmark"
                                    style={{ color: "#952323" }}
                                  ></i>
                                  <span style={{ color: "#952323" }}>
                                    {" "}
                                    Không hoàn thành
                                  </span>
                                </p>
                              ) : null}
                            </div>
                          )
                        }
                      />
                    </Steps>
                  </div>
                </div>
                <div
                  className="mb-3"
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <h6 className="section-title">ĐÁNH GIÁ</h6>
                  {workDetail?.isConfirm !== null ? (
                    <div>
                      <table className="feedback-table">
                        <tr>
                          <td>
                            <p>Độ hài lòng:</p>
                          </td>
                          <td>
                            <Rating
                              name="simple-controlled"
                              value={rating}
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
                            <p>{workDetail?.feedback || ""}</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <div>
                      <p>Khách hàng chưa đánh giá</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetail;
