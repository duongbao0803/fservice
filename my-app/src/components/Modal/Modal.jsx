import React from "react";
import { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext, customTheme } from '../ThemeContext/ThemeContext.jsx';
import './Modal.css'


function Modal({ isOpen, service, onClose }) {
    const theme = useContext(ThemeContext);

    if (!isOpen) return null;

    return (
        <div className="modal" style={{ backgroundColor: theme.background }}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5>CHI TIẾT CÔNG VIỆC</h5>
                    <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                    }}
                    onClick={onClose} >
                        <CloseIcon>ĐÓNG</CloseIcon>
                        </button>
                </div>
                <div className="modal-body">
                    <section className="job-details">
                        <h6>CÔNG VIỆC</h6>
                        <p style={{color: '#ff8228'}}>{service?.description || 'VỆ SINH NHÀ CỬA, BÀN GHẾ'}</p>
                        <div className="table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="td-title">Địa chỉ</td>
                                        <td>
                                            <p>{service?.address || 'Vinhomes Grand Park'}</p>
                                            <p>{service?.room || 'S101-Tầng 3-Số phòng 0309'}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td-title">Giờ làm việc</td>
                                        <td>
                                            <p>{service?.workingHours || '17/10/2023 7:00 AM - 11:00 AM'}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td-title">Ghi chú</td>
                                        <td>
                                            <p>{service?.notes || 'Làm nhanh giúp chị nhé em.'}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="contact-details">
                        <h6>LIÊN HỆ</h6>
                        <div className="table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="td-title">Khách Hàng</td>
                                        <td>
                                            <p>{service?.client || 'Dương Tôn Bảo'}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td-title">Số điện thoại:</td>
                                        <td>
                                            <p>{service?.phone || '0989898989'}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="Info-details">
                        <h6>THÔNG TIN</h6>
                        <div className="table">
                        <table>
                                <tbody>
                                    <tr>
                                        <td className="td-title">Trạng thái</td>
                                        <td>
                                            <p
                                             style={{
                                                color: 'white',
                                                backgroundColor: '#0A6EBD',
                                                borderRadius: '10px',
                                                width: '120px',
                                                padding: '3px',
                                                border: 'none',
                                                outline: 'none',
                                             }}
                                            >Đang chờ xử lí</p>
                                        </td>
                                        <td>
                                            <button 
                                            style={{
                                                color: 'white',
                                                backgroundColor: '#ff8228',
                                                borderRadius: '10px',
                                                width: '100px',
                                                padding: '5px',
                                                border: 'none',
                                                outline: 'none',
                                             }}
                                            >Nhận việc</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td-title">Ngày hoàn thành</td>
                                        <td>
                                            <p>10/10/2023</p>
                                        </td>
                                        <td>
                                            <button 
                                            style={{
                                                color: 'white',
                                                backgroundColor: '#03AC00',
                                                borderRadius: '10px',
                                                width: '100px',
                                                padding: '5px',
                                                border: 'none',
                                                outline: 'none',
                                             }}
                                             >Hoàn thành</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Modal;