import React from "react";
import "../css/styleOrder.css";

// import { IntroService } from "../data";

function Order() {
  return (
    <div>
      <>
        <section>
          <div className="container first-line">
            <div className="row">
              <div className="col-md-12">
                <div className="location">
                  <i
                    className="fa-solid fa-house"
                    style={{ color: "#ff8228" }}
                  />{" "}
                  Trang chủ -&gt; Xác nhận dịch vụ
                </div>
              </div>
            </div>
          </div>
          <div className="container form">
            <div className="form-title text-center">
              <span>VỆ SINH PHÒNG KHÁCH</span>
            </div>
            <div className="main-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="work-info">
                    <div className="title work_info-title">
                      <span>
                        <strong>THÔNG TIN LÀM VIỆC</strong>
                      </span>
                    </div>
                    <div className="work_info-test">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Nơi làm việc
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Nơi làm việc"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label col-lg-12 col-md-12 col-12 col-sm-12"
                          style={{ padding: 0 }}
                        >
                          Số nhà / Căn hộ
                        </label>
                        <select
                          className="form-select form-select-lg mb-3 col-lg-12 col-md-12"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="work-date">
                        <div className="row">
                          <div className="col-6 col-md-6 col-lg-6 col-sm-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label col-md-12"
                                style={{ padding: 0 }}
                              >
                                Chọn ngày làm
                              </label>
                              <select
                                className="form-select form-select-md mb-3 col-md-12"
                                aria-label=".form-select-md example"
                              >
                                <option selected>Open this select menu</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-6 col-md-6 col-lg-6 col-sm-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label col-md-12"
                                style={{ padding: 0 }}
                              >
                                Chọn giờ làm
                              </label>
                              <select
                                className="form-select form-select-md mb-3 col-md-12"
                                aria-label=".form-select-md example"
                              >
                                <option selected>Open this select menu</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-info">
                    <div className="title service_info-title">
                      <span>
                        <strong>THÔNG TIN DỊCH VỤ</strong>
                      </span>
                    </div>
                    <div className="service_info-test">
                      <div className="row">
                        <div className="col-sm-6 col-md-4 col-4">
                          <span>Loại dịch vụ:</span>
                          <span>Số lần:</span>
                          <span>Thời hạn:</span>
                          <span>Loại phòng:</span>
                          <span>Giá tiền</span>
                        </div>
                        <div className="col-sm-6 col-md-8 col-8">
                          <span>
                            <strong>Vệ sinh phòng khách</strong>
                          </span>
                          <span>4 lần</span>
                          <span>4 tuần (kể từ ngày bắt đầu)</span>
                          <span>1 phòng ngủ</span>
                          <span>
                            <strong>250.000đ</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-info">
                    <div className="title contact_info-title">
                      <span>
                        <strong>THÔNG TIN LIÊN HỆ</strong>
                      </span>
                    </div>
                    <div className="contact_info-test">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Họ và tên người liên hệ
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Họ và tên"
                        />
                      </div>
                      <div className="work-date">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Số điện thoại
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="0909 113 114"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="example@email.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Example textarea
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={2}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="payment-info">
                    <div className="title payment_info-title">
                      <span>
                        <strong>THÔNG TIN THANH TOÁN</strong>
                      </span>
                    </div>
                    <div className="payment_info-test">
                      <span>
                        <strong>Tổng tiền</strong>
                      </span>
                      <span style={{ color: "#ff8228" }}>
                        <strong>250.000đ</strong>
                      </span>
                      <p>
                        <strong>Chọn phương thức thanh toán</strong>
                      </p>
                      <div className="pay-by-cash">
                        <input type="radio" />
                        <img src="./img/logo_tienmat.png" alt="" width="40px" />
                        <span>Thanh toán bằng tiền mặt</span>
                      </div>
                      <div className="pay-by-cash">
                        <input type="radio" />
                        <img
                          src="./img/logoVNPAY_thanhtoan.png"
                          alt=""
                          width="40px"
                        />
                        <span>Thanh toán bằng VNPAY</span>
                      </div>
                      <div className="confirm">
                        <input type="checkbox" />
                        <span>
                          Nhấn "Xác nhận" đồng nghĩa với việc bạn đã đồng ý với
                          điều khoản dịch vụ của{" "}
                          <span style={{ fontWeight: "900" }}>FService</span>
                        </span>
                      </div>
                      <div className="order-confirm">
                        <button type="submit">Hủy đơn</button>
                        <button type="submit">Xác nhận</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line" />
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Order;
