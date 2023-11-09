import React from "react";
import { Steps, Row, Col } from 'antd';


function Rightbar() {
  const { Step } = Steps;

  // You could format your dates here using a library like moment.js or date-fns
  const waitingTime = " 03:00 PM"; // dynamic in practice
  const finishedTime = " 05:00 PM"; // dynamic in practice

  return (
    <div className="right-bar_use mb-5">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar_use-main" style={{ padding: '20px' }}>
        <div className="chooseHouse_use pb-3">
          <div className="choose">
            <a href style={{ borderBottom: "3px solid #ff8228" }}>
              {/* {apartment?.roomNo} - {apartment?.type?.building?.name} */}
              Căn hộ 1
            </a>
          </div>
        </div>

        <div className="orderedPackage_use">
          <div className="orderedPackage_use_main d-flex justify-content-between">
            <div className="orderedPackage_use-name">
              <span>COMBO VỆ SINH NHÀ Ở (Cho căn 1PN)</span>
            </div>
            <div className="orderedPackage_use-status">
              <span className="box-status box-status__active">ĐANG HOẠT ĐỘNG</span>
            </div>
          </div>

          <div className="info-ordered_use">
            <table className="info_ordered_use-table">
              <tbody>
                <tr>
                  <td>Căn hộ:</td>
                  <td>S101-0310-Vinhomes Grand Park</td>
                </tr>
                <tr>
                  <td>Áp dụng từ:</td>
                  <td>01/10/2023 - 31/10/2023</td>
                </tr>
              </tbody>
            </table>

            <div className="choose-details_table">
              <tr>
                <td>
                  <span >
                    Dịch vụ
                  </span>
                </td>
                <td>
                  <span style={{ borderBottom: "3px solid #ff8228" }}>Sử dụng</span>
                </td>
              </tr>
            </div>

            <div className="inside-table">
              <div className="d-flex justify-content-between">
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Dịch vụ: <span style={{ color: '#ff8228' }}>Tổng vệ sinh nhà cửa</span>
                </p>
                <p style={{fontWeight:"bold", fontSize: "18px", color:"#757575"}}>24.10.2023</p>
              </div>
              <div className="row_use row">
                <div className="col-md-4">
                  <Steps direction="vertical" current={0} style={{ minHeight: '30vh' }}>
                    <Step title="Đang chờ" description={` ${waitingTime}`} />
                    <Step title="Đang thực hiện" />
                    <Step title="Đã hoàn thành" description={`${finishedTime}`} />
                  </Steps>
                </div>
                <div className="col-md-8">
                  <div className="inside-details">
                    <div className="inside-details__table" style={{ fontSize: '16px' }}>
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
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
              {/* <Row gutter={12}>
                <Col md={10}>
                  <Steps direction="vertical" current={0} style={{ minHeight: '30vh' }}>
                    <Step title="Waiting" description={` ${waitingTime}`} />
                    <Step title="In Progress" />
                    <Step title="Finished" description={`${finishedTime}`} />
                  </Steps>
                </Col>
                <Col md={12}>

                  <div className="inside-details">
                    <div className="inside-details__table" style={{ fontSize: '16px' }}>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <p> Ngày thực hiện:</p>
                            </th>
                            <td>
                              <p> 24.10.2023</p>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <p>Giờ hẹn:</p>
                            </th>
                            <td>
                              <p>3:00 PM - 5:00 PM</p>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <p>Nhân viên:</p>
                            </th>
                            <td>
                              <p>Dương Tôn Bảo</p>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <p>Số điện thoại:</p>
                            </th>
                            <td>
                              <p> 0909113114</p>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <p>Ghi chú:</p>
                            </th>

                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </Col>
              </Row> */}
            </div>

          </div>
        </div>
      </div>
    </div>


  );
}

export default Rightbar;
