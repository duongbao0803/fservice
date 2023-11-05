import React from "react";
import "../assets/css/stylePaymentResult.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PaymentError = () => {
  const [paymentData, setPaymentData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const parsedData = {};

    queryParams.forEach((value, key) => {
      parsedData[key] = value;
    });
    setPaymentData(parsedData);
  }, []);

  return (
    <>
      <div class="outline">
        <div class="container payment-body">
          <div class="row payment-container payment-container__error">
            <div class="col-md-12 pay-header pay-header__error">
              <h6>THÔNG TIN THANH TOÁN</h6>
            </div>

            <div class="col-md-12 pay-img">
              <img
                src={require("../assets/img/failure-icon.png")}
                alt=""
                width="90px"
              />
              <h5>Thanh toán thất bại</h5>
            </div>
            <div class="col-md-12 payment-in4">
              <table>
                <tbody>
                  <tr>
                    <th>Khách hàng:</th>
                    <td>{localStorage.getItem("name")}</td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td>{localStorage.getItem("username")}</td>
                  </tr>
                  <tr>
                    <th>Mã đơn hàng:</th>
                    <td>{paymentData.vnp_TxnRef}</td>
                  </tr>
                  <tr>
                    <th>Số tiền:</th>
                    <td class="amout amout__error">
                      {paymentData.vnp_Amount} VND
                    </td>
                  </tr>
                  <tr>
                    <th>Mã giao dịch:</th>
                    <td>{paymentData.vnp_TransactionNo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-12 break">
              <div class="line-payment"></div>
              <span>Chi tiết</span>
              <div class="line-payment"></div>
            </div>
            <div class="col-md-12 payment-details">
              <table>
                <tbody>
                  <tr>
                    <th>Nội dung:</th>
                    <td>{paymentData.vnp_OrderInfo}</td>
                  </tr>
                  <tr>
                    <th>Mã ngân hàng:</th>
                    <td>{paymentData.vnp_BankCode}</td>
                  </tr>
                  <tr>
                    <th>Loại thanh toán:</th>
                    <td>{paymentData.vnp_CardType}</td>
                  </tr>
                  <tr>
                    <th>Mã giao dịch ngân hàng:</th>
                    <td>{paymentData.vnp_BankTranNo}</td>
                  </tr>
                  <tr>
                    <th>Ngày thanh toán:</th>
                    <td>{paymentData.vnp_PayDate}</td>
                  </tr>
                  <tr>
                    <th>Trạng thái:</th>
                    <td style={{ fontWeight: "bold", color: "#e74646" }}>
                      Huỷ thanh toán
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="thanks">
                <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</p>
                <p>Hẹn gặp lại!</p>
              </div>
              <div class="payment-footer">
                <p>
                  <a href="/">Trang chủ</a>
                </p>
                <p>
                  Cung cấp bởi{" "}
                  <a href="https://vnpay.vn/" target="_blank">
                    VNPAY
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentError;
