import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getApartment } from "../../services/UserService";

function Rightbar_house() {
    const [apiData, setApiData] = useState(null);
    const [nameData, setNameData] = useState(null);
    const [selectedApartment, setSelectedApartment] = useState(null);
    const [apartments, setApartmentData] = useState([]);
    // const [currentApartment, setcurrentApartmentData] = useState({});
    const [apartmentsPackage, setApartmentPackageData] = useState([]);
    const username = localStorage.getItem("username");
    const [show, setShow] = useState(false);


    useEffect(() => {
        fetchApartment();
    }, [selectedApartment]);

    const fetchApartment = async () => {
        try {
            let response = await getApartment(username);
            console.log("check apartment:", response.data);
            setApartmentData(response.data);
        } catch (Error) {
            console.log("error fetching: ", Error);
        }
    };

    return (
        <div className="container">
            <div className="right-bar_house">
                <h5 className="mb-4">Căn hộ của bạn</h5>
                <div className="row right_bar-main_house">
                    <div className="col-md-4 row_house">
                            {apartments.map((apartment) => (
                                <div className="house-info">
                                    <p className="fw-bold">
                                        <i className="fa-solid fa-house" style={{ color: '#ff8228' }} />
                                        {apartment.type.building.name} - {apartment.roomNo}
                                    </p>
                                    <div className="house_info-address">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Địa chỉ:</td>
                                                    <td>{apartment.type.building.name} - Vinhomes Grand Park</td>
                                                </tr>
                                                <tr>
                                                    <td>Loại:</td>
                                                    <td>{apartment.type.type}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Link to="/managepackage" style={{ color: 'inherit', textDecoration: 'underline' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <ArrowForwardIcon style={{ marginRight: '8px', color: '#ff8228' }} />
                                                <span>Gói dịch vụ đang sử dụng</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            <div className='col-md-4'>
                                <div className="icon-box">
                                    {/* You can place your '+' icon SVG or Font Awesome icon here */}
                                    <AddCircleOutlineIcon style={{ color: '#FFA15D' }}></AddCircleOutlineIcon>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rightbar_house;
