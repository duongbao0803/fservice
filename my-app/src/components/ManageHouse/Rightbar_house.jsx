import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getApartment } from "../../services/UserService";
import AddHouse from "./AddHouse";
import Skeleton from "react-loading-skeleton";

function Rightbar_house() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [apartments, setApartmentData] = useState([]);
  const username = localStorage.getItem("username");
  const [show, setShow] = useState(true);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchApartment();
  }, [selectedApartment]);

  const fetchApartment = async () => {
    try {
      let res = await getApartment(username);
      if (res && res.data && res.status === 200) {
        setApartmentData(res.data);
      } else {
        setApartmentData([]);
      }
      setIsLoading(false);
    } catch (Error) {
      console.log("error fetching: ", Error);
      setIsLoading(false);
    }
  };

  const handleClick = (apartment) => {
    navigate(`/user/manage-package/apartment/${apartment.id}`, {
      state: {
        apartment: apartment,
      },
    });
    localStorage.setItem("show", show);
  };

  const handleAdd = () => {
    setIsShowAdd(true);
  };

  return (
    <div className="container">
      <h5 className="mb-4">Căn hộ của bạn</h5>
      {isShowAdd === true ? (
        <AddHouse />
      ) : (
        <div className="right-bar_house">
          <div className="add-apartment">
            <div className="add-apartment__text">
              <Link onClick={handleAdd}>+ Thêm căn hộ</Link>
            </div>
          </div>
          {isLoading ? (
            <div className="row">
              {[1, 2].map((index) => (
                <div className="col-md-6 house-info" key={index}>
                  <div className="house-box">
                    <div style={{ padding: "10px" }}>
                      <Skeleton height={20} width={200} />
                      <div className="house_info-address">
                        <table>
                          <tbody>
                            <tr>
                              <th>
                                {" "}
                                <Skeleton width={100} />{" "}
                              </th>
                              <td>
                                <Skeleton width={200} />
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <Skeleton width={150} />
                              </th>
                              <td>
                                <Skeleton width={150} />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Skeleton width={50} />
                          <Skeleton width={150} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {apartments.length > 0 ? (
                <div className="row">
                  {apartments.map((apartment) => (
                    <div className="col-md-6 house-info" key={apartment.id}>
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
                                    Toà {apartment.type.building.name} -
                                    Vinhomes Grand Park
                                  </td>
                                </tr>
                                <tr>
                                  <th>Loại:</th>
                                  <td>
                                    {apartment.type.type === "1 PN"
                                      ? "1 Phòng ngủ"
                                      : "2 Phòng ngủ"}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <ArrowForwardIcon
                                style={{
                                  marginRight: "8px",
                                  color: "#ff8228",
                                }}
                              />
                              <span
                                onClick={() => handleClick(apartment)}
                                style={{ cursor: "pointer" }}
                              >
                                Gói dịch vụ đang sử dụng
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <span
                  style={{
                    color: "#ff7800",
                    fontWeight: "700",
                    paddingLeft: "10px",
                    pointerEvents: "none",
                  }}
                >
                  KHÔNG CÓ CĂN HỘ
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Rightbar_house;
