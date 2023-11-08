import React, { useState, useEffect } from "react";
import formatDate from "../../utils/tools";
import { getApartment, getApartmentPackage } from "../../services/UserService";
import { Link, NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";

function Rightbar() {
  const [apiData, setApiData] = useState(null);
  const [nameData, setNameData] = useState(null);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [apartments, setApartmentData] = useState([]);
  const [apartmentsPackage, setApartmentPackageData] = useState([]);
  const username = localStorage.getItem("username");
  const [show, setShow] = useState(false);
  const [noPackage, setNoPackage] = useState(false);
  const navigate = useNavigate()
  const {state} = useLocation()
  
 useEffect(() => {
  if (state !== null) {
    handleApartmentClick(state.apartment)
  }
}, []);


  useEffect(() => {
    fetchApartment();
    if (selectedApartment) {
      console.log("checlk selected", selectedApartment.id);
      fetchApartmentPackage(selectedApartment.id);
    }
  }, [selectedApartment]);

 
  const handleApartmentClick = (apartment) => {
    console.log("check log", apartment);
    setShow(true);
    setSelectedApartment(apartment);
  };

  const fetchApartment = async () => {
    try {
      let response = await getApartment(username);
      console.log("check apartment", response.data);
      setApartmentData(response.data);
    } catch (Error) {
      console.log("error fetching: ", Error);
    }
  };

  const fetchApartmentPackage = async (id) => {
    try {
      let response = await getApartmentPackage(id);
      if (response.status === 200 && response.data) {
        setApartmentPackageData(response.data);
      } else {
        setApartmentPackageData([]);
        noPackage(true);
      }
    } catch (Error) {
      console.log("error fetching package: ", Error);
    }
  };

  const handleClick = (id) => {
    console.log("check apartment", selectedApartment);
    navigate(`/user/manage-package/${id}`,
      {
        state: {
          selectedApartment : selectedApartment
        },
      })
  }


  return (
    <div className="right-bar mb-4">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar-main" style={{ padding: "20px" }}>
        <div className="chooseHouse ">
          <div className="choose">
            {apartments.map((apartment, index) => (
              <NavLink
                to={`/user/manage-package/apartment/${apartment.id}`}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
                onClick={() => handleApartmentClick(apartment)}
                style={{ marginRight: "20px" }}
              >
                {apartment.roomNo} - {apartment.type.building.name}
              </NavLink>
            ))}
          </div>
          <div className="apartment-package">
            {show ===  true ? (
              apartmentsPackage.length > 0 ? (
                apartmentsPackage.map((packages, index) => (
                  <div className="orderedPackage" key={index}>
                    <div className="orderedPackage_main d-flex justify-content-between">
                      <div className="orderedPackage-name">
                        <span>{packages.package.name} (Cho căn {selectedApartment.type.type})</span>
                      </div>
                      <div className="orderedPackage-status">
                        {packages.packageStatus === "Active" ? (
                          <span className="box-status box-status__active">
                            ĐANG HOẠT ĐỘNG
                          </span>
                        ) : packages.packageStatus === "Disable" ? (
                          <span className="box-status box-status__disable">
                            KHÔNG KHẢ DỤNG
                          </span>
                        ) : packages.packageStatus === "Expired" ? (
                          <span className="box-status box-status__expired">
                            ĐÃ HẾT HẠN
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="info-ordered">
                      <table className="info_ordered-table">
                        <tbody>
                          <tr>
                            <td>Căn hộ:</td>
                            <td>
                              {selectedApartment.type.building.name} -{" "}
                              {selectedApartment.roomNo} - Vinhomes Grand Park
                            </td>
                          </tr>
                          <tr>
                            <td>Áp dụng từ:</td>
                            <td>
                              {formatDate(packages.startDate)} -{" "}
                              {formatDate(packages.endDate)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {packages.packageStatus !== "Disable" ? (
                        <div className="button d-flex justify-content-end">
                          <button onClick={() => handleClick(packages.id)}>
                              Xem chi tiết
                          </button>
                        </div>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <span
                  style={{
                    color: "#ff7800",
                    fontWeight: "700",
                    paddingLeft: "10px",
                    pointerEvents: "none",
                  }}
                >
                  KHÔNG CÓ GÓI DỊCH VỤ
                </span>
              )
            ) : (
              <span
                style={{
                  color: "#ff7800",
                  fontWeight: "700",
                  paddingLeft: "10px",
                  pointerEvents: "none",
                }}
              >
                VUI LÒNG CHỌN CĂN HỘ
              </span>
            )}
          </div>
          {/* <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack> */}
        </div>
      </div>
    </div>
  );
}
export default Rightbar;
