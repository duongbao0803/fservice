import React, { useState, useEffect } from "react";
import { formatDate } from "../../utils/tools";
import { getApartment, getApartmentPackage } from "../../services/UserService";
import {
  Link,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Rightbar() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [apartments, setApartmentData] = useState([]);
  const [apartmentsPackage, setApartmentPackageData] = useState([]);
  const username = localStorage.getItem("username");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state !== null) {
      handleApartmentClick(state.apartment);
    }
  }, []);

  useEffect(() => {
    fetchApartment();
    if (selectedApartment) {
      fetchApartmentPackage(selectedApartment.id);
    }
  }, [selectedApartment]);

  const handleApartmentClick = (apartment) => {
    setShow(true);
    setSelectedApartment(apartment);
  };

  const fetchApartment = async () => {
    try {
      let res = await getApartment(username);
      if (res && res.status === 200) {
        setApartmentData(res.data);
      } else {
        setApartmentData([]);
      }
    } catch (Error) {
      console.log("error fetching: ", Error);
    }
  };

  const fetchApartmentPackage = async (id) => {
    try {
      let res = await getApartmentPackage(id);
      if (res.status === 200 && res.data) {
        setApartmentPackageData(res.data);
      } else {
        setApartmentPackageData([]);
      }
    } catch (Error) {
      console.log("error fetching package: ", Error);
    }
  };

  const handleClick = (id) => {
    navigate(`/user/manage-package/${id}`, {
      state: {
        selectedApartment: selectedApartment,
      },
    });
  };

  return (
    <div className="right-bar mb-5">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar-main" style={{ padding: "20px" }}>
        <div className="chooseHouse">
          <div
            className="choose d-flex justify-content-left"
            style={{
              flexWrap: "wrap",
              gap: "20px",
              // justifyContent: "left",
            }}
          >
            {apartments.map((apartment, index) => (
              <NavLink
                to={`/user/manage-package/apartment/${apartment.id}`}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => handleApartmentClick(apartment)}
              >
                {apartment.roomNo} - {apartment.type.building.name}
              </NavLink>
            ))}
          </div>
          <div className="apartment-package">
            {show === true ? (
              apartmentsPackage.length > 0 ? (
                apartmentsPackage.map((packages, index) => (
                  <div className="orderedPackage" key={index}>
                    <div className="orderedPackage_main d-md-flex justify-content-between">
                      <div className="orderedPackage-name">
                        <span>
                          {packages.package.name} (Cho căn{" "}
                          {selectedApartment.type.type})
                        </span>
                      </div>
                      <div className="orderedPackage-status d-md-block">
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
        </div>
      </div>
    </div>
  );
}
export default Rightbar;
