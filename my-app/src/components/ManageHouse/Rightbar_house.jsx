import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Rightbar_house() {
    return (
        <div className="right-bar_house">
            <h5 className="mb-4">Căn hộ của bạn</h5>
            <div className="right_bar-main_house">
                <div className="row_house">
                    <div className="col-md-5">
                        <div className="house-info">
                            <p className="fw-bold">
                                <i className="fa-solid fa-house" style={{ color: '#ff8228' }} />
                                Căn hộ 1
                            </p>
                            <div className="house_info-address">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Địa chỉ:</td>
                                            <td>Vinhomes Grand Park S101 - Tầng 3 - 0308</td>
                                        </tr>
                                        <tr>
                                            <td>Loại:</td>
                                            <td>1 Phòng ngủ</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <ArrowForwardIcon style={{ marginRight: '8px', color: '#ff8228' }} />
                                        <span>Gói dịch vụ đang sử dụng</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="icon-box">
                        {/* You can place your '+' icon SVG or Font Awesome icon here */}
                        <AddCircleOutlineIcon style={{ color: '#FFA15D' }}></AddCircleOutlineIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rightbar_house;
