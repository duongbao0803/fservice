import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../../utils/cus-axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import formatDate from "../../utils/tools";
import { getApartment, getApartmentPackage } from "../../services/UserService";
import { Link } from "react-router-dom";

function Rightbar() {
  const [apiData, setApiData] = useState(null);
  const [nameData, setNameData] = useState(null);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [apartments, setApartmentData] = useState([]);
  // const [currentApartment, setcurrentApartmentData] = useState({});
  const [apartmentsPackage, setApartmentPackageData] = useState([]);
  const username = localStorage.getItem("username");
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   fetchApartment();
  //   // fetchApartmentPackage();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://fservices.azurewebsites.net/api/apartment-packages/1",
  //       {
  //         headers: {
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6IjM0Yzc1Yjk1LTU2NDgtNGYzNC1hZTFhLTgxZDVhOGViOTI1OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg1MDQ4OTAsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.X2slzD2SnT1POsYc4dL3XE3i7mM3YTqId1hTeWi4oFc`,
  //         },
  //       }
  //     );
  //     setApiData(response.data);

  //     const packageId = response.data.packageId;

  //     // Construct the endpoint for the second API call (Replace this URL if it's different)
  //     const secondApiUrl = `https://fservices.azurewebsites.net/api/packages/${packageId}`;

  //     const nameResponse = await axios.get(secondApiUrl, {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6IjM0Yzc1Yjk1LTU2NDgtNGYzNC1hZTFhLTgxZDVhOGViOTI1OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg1MDQ4OTAsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.X2slzD2SnT1POsYc4dL3XE3i7mM3YTqId1hTeWi4oFc`,
  //       },
  //     });
  //     setNameData(nameResponse.data);

  //     const buildingsId = response.data.buildingsId;

  //     // Construct the endpoint for the second API call (Replace this URL if it's different)
  //     const thirdApiUrl = `https://fservices.azurewebsites.net/api/buildings/${buildingsId}`;

  //     const APIResponse = await axios.get(thirdApiUrl, {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6IjAzZDFkYWFmLWUyMjEtNDEzYS04OTU0LWM3Y2U4MWNkOGNhZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg0MjIzNjgsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.cPvt06FJTr67fJGIYibI1iDjGNVHZW0oeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6ImRkN2EwZjYzLWY0NzYtNDU1MS05N2FhLTIyMjk5ZGRiOWUyMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg0OTkzOTcsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.nVp8XlcS6TyfBzKo1t4nAvzphSmuuGx3Tq1HxDa9G78`, // Replace YOUR_TOKEN_HERE with your actual token
  //       },
  //     });
  //     setNameData(nameResponse.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     console.error("Error response:", error.response);
  //   }
  // };
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
      let response = await getApartment(username);
      console.log("check apartment:", response.data);
      setApartmentData(response.data);
    } catch (Error) {
      console.log("error fetching: ", Error);
    }
  };

  const fetchApartmentPackage = async (id) => {
    try {
      let response = await getApartmentPackage(id);
      console.log("check apartment package:", response);
      if (response.status === 200 && response.data) {
        setApartmentPackageData(response.data);
      }
    } catch (Error) {
      console.log("error fetching package: ", Error);
    }
  };

  const showModal = () => {};

  return (
    <div className="right-bar mb-4">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar-main" style={{ padding: "20px" }}>
        <div className="chooseHouse ">
          <div className="choose">
            {apartments.map((apartment, index) => (
              <a
                onClick={() => handleApartmentClick(apartment)}
                style={{ padding: "0 10px" }}
              >
                {apartment.type.building.name} - {apartment.roomNo}
              </a>
            ))}
          </div>
          <div className="apartment-package">
            {show === true ? (
              apartmentsPackage.map((packages, index) => (
                <>
                  <div className="orderedPackage">
                    <div className="orderedPackage_main d-flex justify-content-between">
                      <div className="orderedPackage-name ">
                        <span>{packages.package.name} (Cho căn 1PN)</span>
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
                          <tr />
                          <tr />
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
                          <button onClick={() => showModal()}>
                            <Link
                              to={`/user/managePackage-detail/${packages.id}?buildingName=${selectedApartment.type.building.name}&roomNo=${selectedApartment.roomNo}`}
                            >
                              Xem chi tiết
                            </Link>
                          </button>
                        </div>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </div>
                </>
              ))
            ) : (
              <span
                style={{
                  color: "#ff7800",
                  fontWeight: "700",
                  paddingLeft: "10px",
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
