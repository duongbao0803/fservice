import React from "react";
import { Steps, Row, Col } from "antd";
import { getUsingHistory } from "../../services/UserService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Pagination } from "@mui/material";

function Rightbar() {
  const { Step } = Steps;
  const { id } = useParams();
  const [totalPage, setTotalPage] = useState(0);

  console.log("check apmPID", id);

  // You could format your dates here using a library like moment.js or date-fns
  const waitingTime = " 03:00 PM"; // dynamic in practice
  const finishedTime = " 05:00 PM"; // dynamic in practice

  useEffect(() => {
    viewWorkingHistory(1);
  }, []);

  const viewWorkingHistory = async (pageNum) => {
    try {
      const res = await getUsingHistory(id, pageNum);
      console.log("check ", res.data);
    } catch (error) {
      console.log("Error Viewing Hisotry", error);
    }
  };

  const handlePageClick = (e) => {
    viewWorkingHistory(+e.selected + 1);
  };

  return (
    <div className="info-ordered_use">
      <div className="inside-table">
        <div className="d-flex justify-content-between">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            Dịch vụ:{" "}
            <span style={{ color: "#ff8228" }}>Tổng vệ sinh nhà cửa</span>
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#757575",
            }}
          >
            24.10.2023
          </p>
        </div>
        <div className="row_use row">
          <div className="col-md-4">
            <Steps
              direction="vertical"
              current={0}
              style={{ minHeight: "30vh" }}
            >
              <Step title="Đang chờ" description={` ${waitingTime}`} />
              <Step title="Đang thực hiện" />
              <Step title="Đã hoàn thành" description={`${finishedTime}`} />
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
                      <td>24.10.2023</td>
                    </tr>
                    <tr>
                      <th>Giờ hẹn:</th>
                      <td>3:00 PM - 5:00 PM</td>
                    </tr>
                    <tr>
                      <th>Nhân viên:</th>
                      <td>Dương Tôn Bảo</td>
                    </tr>
                    <tr>
                      <th>Số điện thoại:</th>
                      <td>0909113114</td>
                    </tr>
                    <tr>
                      <th>Ghi chú:</th>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={totalPage}
        marginPagesDisplayed={1}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      <Pagination count={10} />
    </div>

    //     </div>
    //   </div>
    // </div>
  );
}

export default Rightbar;
