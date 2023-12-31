import React from "react";
import { Steps } from "antd";
import { getStaffByUsingId, getUsingHistory } from "../../services/UserService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { formatDate, formatTime } from "../../utils/tools";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

function Rightbar({ state }) {
  const { Step } = Steps;
  const { id } = useParams();
  const [totalPage, setTotalPage] = useState(0);
  const [workingHistory, setWorkingHistory] = useState([]);
  const [staffInfo, setStaffInfo] = useState([]);
  const [staffIds, setStaffIds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSworkingHistory, setSelectedWorkingHistory] = useState("");
  const [statusHistory, setStatusHistory] = useState("");
  const [staffInfoOrder, setStaffInfoOrder] = useState({});
  const [selectedCompleteTime, setSelectedCompleteTime] = useState("");
  const [selectedShiftTime, setSelectedShiftTime] = useState("");
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const [selectedCreateDate, setSelectedCreateDate] = useState("");

  useEffect(() => {
    viewWorkingHistory(1);
  }, []);

  const viewWorkingHistory = async (pageNum) => {
    try {
      const res = await getUsingHistory(id, pageNum);
      if (res && res.status === 200) {
        const xPaginationHeader = res.headers?.["x-pagination"];
        if (xPaginationHeader) {
          const paginationData = JSON.parse(xPaginationHeader);
          const sumPage = paginationData.TotalPages;
          setTotalPage(sumPage);
        }
        setWorkingHistory(res.data);
        const staffIds = res.data.map(
          (workingHistory) => workingHistory.staffId
        );
        getStaffInfo(staffIds);
      } else {
        setWorkingHistory([]);
        setStaffIds([]);
      }
    } catch (error) {
      console.log("Error Viewing Hisotry", error);
    }
  };

  const getStaffInfo = async (staffIds) => {
    try {
      const fetchStaffInfo = [];

      for (const staffId of staffIds) {
        try {
          const res = await getStaffByUsingId(staffId);
          if (res && res.status === 200) {
            fetchStaffInfo.push(res.data);
          } else {
            fetchStaffInfo.push(null);
          }
        } catch (error) {
          console.log("Error Fetching Staff Information", error);
        }
      }
      setStaffInfo(fetchStaffInfo);
    } catch (error) {
      console.log("Error Fetching Staff Information", error);
      return [];
    }
  };

  const handlePageClick = (newPage) => {
    viewWorkingHistory(newPage);
  };

  const handleConfirmModal = (
    id,
    info,
    completeTime,
    shiftTime,
    serviceName,
    createDate
  ) => {
    setIsOpen(true);
    setSelectedWorkingHistory(id);
    setStaffInfoOrder(info);
    setSelectedCompleteTime(completeTime);
    setSelectedShiftTime(shiftTime);
    setSelectedServiceName(serviceName);
    setSelectedCreateDate(createDate);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {workingHistory && workingHistory.length > 0 ? (
        <div className="info-ordered_use">
          {workingHistory.map(
            (workingHistory, index) =>
              staffInfo[index] && (
                <div className="inside-table" key={index}>
                  <div className="d-flex justify-content-between">
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Dịch vụ:{" "}
                      <span style={{ color: "#ff8228" }}>
                        {workingHistory?.service?.name}
                      </span>
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#757575",
                      }}
                    >
                      {formatDate(workingHistory?.createdDate)}
                    </p>
                  </div>
                  <div className="row_use row">
                    <div className="col-md-4">
                      <Steps
                        direction="vertical"
                        current={
                          workingHistory?.status?.includes("Pending")
                            ? 0
                            : workingHistory?.status?.includes("Working")
                            ? 1
                            : workingHistory?.status?.includes("Completed")
                            ? 3
                            : -1
                        }
                        style={{ minHeight: "30vh", marginTop: "8px" }}
                      >
                        <Step
                          title="Đang chờ"
                          description={` ${formatDate(
                            workingHistory?.createdDate
                          )} - ${formatTime(workingHistory?.createdDate)}`}
                        />
                        <Step title="Đang thực hiện" />
                        {workingHistory?.status?.includes("Completed") ? (
                          <Step
                            title="Đã hoàn thành"
                            description={`${formatDate(
                              workingHistory?.completeDate
                            )} - ${formatTime(workingHistory?.completeDate)}`}
                          />
                        ) : (
                          <Step title="Đã hoàn thành" />
                        )}
                      </Steps>
                    </div>
                    <div className="col-md-8">
                      <div className="inside-details">
                        <div
                          className="inside-details__table"
                          style={{ fontSize: "16px" }}
                        >
                          <table>
                            <tbody>
                              <tr>
                                <th>Ngày thực hiện:</th>
                                <td>
                                  {formatDate(workingHistory?.createdDate)}
                                </td>
                              </tr>
                              <tr>
                                <th>Giờ hẹn:</th>
                                <td>{workingHistory?.shiftTime}</td>
                              </tr>

                              <>
                                <tr>
                                  <th>Nhân viên:</th>
                                  <td>{staffInfo[index]?.name}</td>
                                </tr>
                                <tr>
                                  <th>Số điện thoại:</th>
                                  <td>{staffInfo[index]?.phoneNumber}</td>
                                </tr>
                              </>

                              <tr>
                                <th>Ghi chú:</th>
                                <td>{workingHistory?.note}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {workingHistory?.status.includes("Completed") ? (
                      <div className="feedback-btn">
                        {workingHistory?.isConfirm !== null ? (
                          <div style={{ color: "#03AC00" }}>
                            <i className="fa-solid fa-check" />
                            <span> Đã xác nhận</span>
                          </div>
                        ) : (
                          <button
                            className="confirm"
                            onClick={() =>
                              handleConfirmModal(
                                workingHistory.id,
                                staffInfo[index],
                                workingHistory?.completeDate,
                                workingHistory?.shiftTime,
                                workingHistory?.service.name,
                                workingHistory?.createdDate
                              )
                            }
                          >
                            Xác nhận
                          </button>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              )
          )}
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Pagination
              count={totalPage}
              onChange={(event, value) => handlePageClick(value)}
              defaultPage={1}
              siblingCount={0}
            />
          </div>
        </div>
      ) : (
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            textAlign: "center",
            color: "#ff7f34",
          }}
        >
          Bạn chưa sử dụng dịch vụ
        </p>
      )}

      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        selectedSworkingHistory={selectedSworkingHistory}
        statusHistory={statusHistory}
        staffInfoOrder={staffInfoOrder}
        selectedCompleteTime={selectedCompleteTime}
        selectedShiftTime={selectedShiftTime}
        selectedServiceName={selectedServiceName}
        selectedCreateDate={selectedCreateDate}
        state={state}
      ></ConfirmModal>
    </>
  );
}

export default Rightbar;
