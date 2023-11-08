import React from "react";

function AddHouse() {

    return (
        <div className="container">
            <h5 className="mb-4">Căn hộ của bạn</h5>
            <div className="right-bar_house add-apartment">
                <p style={{fontWeight:"bold"}}>Thêm căn hộ tại Vinhomes Grand Park</p>
                <div style={{width:"80%"}}>
                    <div className="building mb-3">
                        <p>Chọn toà nhà:</p>
                        <select className="form-select" name="" id="">
                            <option value="" disabled>Chọn toà nhà</option>
                            <option value="">Chọn toà nhà</option>
                            <option value="">Chọn toà nhà</option>
                            <option value="">Chọn toà nhà</option>
                        </select>
                    </div>
                    <div className="floor mb-3">
                        <p>Chọn tầng:</p>
                        <select className="form-select" name="" id="">
                            <option value="" disabled>Chọn tầng</option>
                            <option value="">Chọn tầng</option>
                            <option value="">Chọn tầng</option>
                        </select>
                    </div>
                    <div className="apartment mb-3">
                        <p>Chọn căn hộ:</p>
                        <select className="form-select" name="" id="">
                            <option value="" disabled>Chọn căn hộ</option>
                            <option value="">Chọn căn hộ</option>
                            <option value="">Chọn căn hộ</option>
                        </select>
                    </div>
                    <div className="apartment-info mb-3">
                        <p style={{fontWeight:"bold"}}>Thông tin căn hộ</p>
                        <table>
                            <tr>
                                <th>Địa chỉ:</th>
                                <td>Số 3001 - Toà S101 - Vinhomes Grand Park</td>
                            </tr>
                            <tr>
                                <th>Loại phòng:</th>
                                <td>1 phòng ngủ</td>
                            </tr>
                        </table>
                    </div>
                    <div className="add-btn">
                        <button>Thêm căn hộ</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default AddHouse;