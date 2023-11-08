import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getApartment } from "../../services/UserService";


function Rightbar_house() {
  const [apiData, setApiData] = useState(null);
  const [nameData, setNameData] = useState(null);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [apartments, setApartmentData] = useState([]);
  // const [currentApartment, setcurrentApartmentData] = useState({});
  const [apartmentsPackage, setApartmentPackageData] = useState([]);
  const username = localStorage.getItem("username");
  const [show, setShow] = useState(true);
  const navigate = useNavigate()

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

  const handleClick = (apartment) => {
    // console.log("check aID", id);
    navigate(`/user/manage-package/apartment/${apartment.id}`, {
      state: {
        apartment: apartment
      }
    })
    localStorage.setItem("show", show);


  }

  console.log();

  return (
    <div className="container">
      <h5 className="mb-4">Căn hộ của bạn</h5>
      <div className="right-bar_house">
        <div className="row">
          {/* <div className=""> */}
          {apartments.map((apartment) => (
            <div className="col-md-6 house-info">
              <div className="house-box">
                <div style={{ padding: "10px" }}>
                  <p className="fw-bold">
                    <i
                      className="fa-solid fa-house"
                      style={{ color: "#ff8228" }}
                    />
                    {apartment.type.building.name} - {apartment.roomNo}
                  </p>
                  <div className="house_info-address">
                    <table>
                      <tbody>
                        <tr>
                          <th>Địa chỉ:</th>
                          <td>
                            Toà {apartment.type.building.name} - Vinhomes Grand
                            Park
                          </td>
                        </tr>
                        <tr>
                          <th>Loại:</th>
                          {apartment.type.type == "1 PN" ? (
                            <td>1 Phòng ngủ</td>
                          ) : (
                            <td>2 Phòng ngủ</td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                    {/* <Link style={{ color: "inherit" }}> */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <ArrowForwardIcon
                        style={{ marginRight: "8px", color: "#ff8228" }}
                      />
                      <span onClick={() => handleClick(apartment)} style={{ cursor: "pointer" }}>
                        Gói dịch vụ đang sử dụng</span>
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-6">
            <div className="icon-box">
              <AddCircleOutlineIcon
                style={{ color: "#FFA15D" }}
              ></AddCircleOutlineIcon>
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Rightbar_house;
