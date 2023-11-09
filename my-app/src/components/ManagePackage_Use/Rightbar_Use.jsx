import React from "react";
import { Steps, Row, Col } from 'antd';

function Rightbar() {
  const description = '';

  return (
    <div className="right-bar_use">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar_use-main" style={{ padding: '20px' }}>
        <div className="chooseHouse_use pb-3">
          <a href="#">Căn hộ 1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#">Căn hộ 2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#">Căn hộ 3</a>
        </div>

        <div className="orderedPackage_use">
          <div className="orderedPackage_use_main d-flex justify-content-between">
            <div className="orderedPackage_use-name">
              <span>COMBO VỆ SINH NHÀ Ở (Cho căn 1PN)</span>
            </div>
            <div className="orderedPackage_use-status">
              <span>Trạng thái: </span>
              <span className="status-active">ĐANG HOẠT ĐỘNG</span>
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
            <div className="inside-table">
              <div className="row_use row">
                <div className="col-md-6">
                  <div className="inside-details-main d-flex align-items-center">
                    <h6 className="mb-3" style={{marginRight: '50px'}}>Dịch vụ: </h6>
                    <h5 className="mb-3"><span style={{ color: '#ff8228', fontWeight: 'bold' }}> Tổng vệ sinh nhà cửa</span></h5>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                  <span>24.10.2023 3:00 PM</span>
                </div>
              </div>
              <Row gutter={12}>
                <Col md={10}>
                  <Steps style={{ minHeight: '30vh' }}
                    direction="vertical"
                    current={0}
                    items={[
                      { title: 'Waiting' },
                      { title: 'In Progress' },
                      { title: 'Finished' },
                    ]}
                  />
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
              </Row>
            </div>

            </div>
          </div>
        </div>
      </div>
  

  );
}

export default Rightbar;
