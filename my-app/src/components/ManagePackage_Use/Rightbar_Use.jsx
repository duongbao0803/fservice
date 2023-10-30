import React from "react";



function Rightbar() {

  return (
    <div className="right-bar_use">
    <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
    <div className="right_bar_use-main">
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
                <div className="inside-details_1">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="inside-details-main">
                            <span>Dịch vụ: </span>
                            <strong>Tổng vệ sinh nhà cửa</strong>
                        </div>
                        <span>24.10.2023 3:00 PM</span>
                        <span className="status-waiting">ĐANG CHỜ</span>
                    </div>
                    </div>
                    <div className="inside-details_1">
                        <p>Ngày thực hiện: 24.10.2023</p>
                        <p>Giờ hẹn: 3:00 PM - 5:00 PM</p>
                        <p>Nhân viên: Dương Tôn Bảo</p>
                        <p>Số điện thoại: 0999 113 114</p>
                        <p>Ghi chú:</p>
                    </div>
                </div>
                  <div className="inside-table">
                <div className="inside-details_2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="inside-details-main">
                            <span>Dịch vụ: </span>
                            <strong>Giặt ủi quần áo</strong>
                        </div>
                        <span>23.10.2023 9:20 PM</span>
                        <span className="status-completed">ĐÃ HOÀN THÀNH</span>
                    </div>
                    <div className="inside-details_2">
                        <p>Ngày thực hiện: 23.10.2023</p>
                        <p>Giờ hẹn: 9:00 PM - 10:00 PM</p>
                        <p>Nhân viên: Dương Tôn Bảo</p>
                        <p>Số điện thoại: 0999 113 114</p>
                        <p>Ghi chú:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>






  );
}

export default Rightbar;