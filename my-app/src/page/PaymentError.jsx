import React from "react";
import "../assets/css/stylePaymentResult.css";

const PaymentError = () => {
    return (
        <>
        <div class="outline">
        <div class="container payment-body">
            <div class="row payment-container payment-container__error">
                <div class="col-md-12 pay-header pay-header__error">
                    <h6>THÔNG TIN THANH TOÁN</h6>
                </div>

                <div class="col-md-12 pay-img">
                    <img src={require("../assets/img/failure-icon.png")} alt="" width="90px"/>
                    <h5>Thanh toán thất bại</h5>
                </div>
                <div class="col-md-12 payment-in4">
                    <table>
                        <tbody>
                            <tr>
                                <th>Khách hàng:</th>
                                <td>Dương Tôn Bảo</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>duongbao2k3@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Mã đơn hàng:</th>
                                <td>ORDERCODE</td>
                            </tr>
                            <tr>
                                <th>Số tiền:</th>
                                <td class="amout amout__error">2.130.000 VND</td>
                            </tr>
                            <tr>
                                <th>Mã giao dịch:</th>
                                <td>2112122121</td>
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
                                <td>Thanh toan cho Dich vu tron goi Premium</td>
                            </tr>
                            <tr>
                                <th>Mã ngân hàng:</th>
                                <td>TP BANK</td>
                            </tr>
                            <tr>
                                <th>Loại thanh toán:</th>
                                <td>VISA</td>
                            </tr>
                            <tr>
                                <th>Mã giao dịch ngân hàng:</th>
                                <td>54325626226</td>
                            </tr>
                            <tr>
                                <th>Ngày thanh toán:</th>
                                <td>03/11/2023 21:25</td>
                            </tr>
                            <tr>
                                <th>Trạng thái:</th>
                                <td style={{fontWeight:"bold", color:"#e74646"}}>Huỷ thanh toán</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="thanks">
                        <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</p>
                        <p>Hẹn gặp lại!</p>
                    </div>
                    <div class="payment-footer">
                        <p><a href="/">Trang chủ</a></p>
                        <p>Cung cấp bởi <a href="https://vnpay.vn/" target="_blank">VNPAY</a></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
        </>
      
    );
  };
  
  export default PaymentError;