import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../utils/cus-axios";


function Rightbar() {
  const [apiData, setApiData] = useState(null);
  const [nameData, setNameData] = useState(null);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [apartments, setApartmentData] = useState([]);
  const [apartmentsPackage, setApartmentPackageData] = useState([]);

  useEffect(() => {
    fetchApartment();
  }, []);

  useEffect(() => {
    fetchApartmentPackage();
  }, []);
  
  const fetchApartment = async () => {
    try {
      let response = await config.get(
        `https://fservices.azurewebsites.net/api/apartments?username=${localStorage.getItem(
          "username"
        )}`
      );
      console.log("check apartment:", response.data);
      setApartmentData(response.data);
    } catch (Error) {
      console.log("error fetching: ", Error);
    }
  };

  const fetchApartmentPackage = async () => {
    try {
      let response = await config.get(
        `https://fservices.azurewebsites.net/api/apartment-packages/apartment2`
      );
      console.log("check apartment package:", response);
      setApartmentPackageData(response.data);
    } catch (Error) {
      console.log("error fetching package: ", Error);
    }
  };

   
  const handleApartmentClick = async (apartmentId) => {
    try {
      const response = await config.get(
        `https://fservices.azurewebsites.net/api/apartment-packages/${apartmentId}`
      );
      setSelectedApartment(response.data);
    } catch (error) {
      console.log("error fetching apartment package: ", error);
    }
  };
  
  return (
    <div className="right-bar">
    <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
    <div className="right_bar-main" style={{ padding: "20px" }}>
      <div className="chooseHouse pb-3">
        <div className="choose">
          {apartments.map((apartment) => (
            <a
              key={apartment.id}
              style={{ padding: "0 10px" }}
              onClick={() => handleApartmentClick(apartment.id)}
            >
              {apartment.type.building.name} - {apartment.roomNo}
            </a>
          ))}
        </div>
        <div className="orderedPackage">
            {apartmentsPackage.map((packages, index) => (
              <>
                <div className="orderedPackage">
                  <div className="orderedPackage_main d-flex justify-content-between">
                    <div className="orderedPackage-name ">
                      <span>{packages.package.name} (Cho căn 1PN)</span>
                    </div>
                    <div className="orderedPackage-status">
                      <span>Trạng thái: </span>
                      <span>{packages.packageStatus}</span>
                    </div>
                  </div>
                  <div className="info-ordered">
                    <table className="info_ordered-table">
                      <tbody>
                        <tr />
                        <tr />
                        <tr>
                          <td>Căn hộ:</td>
                          <td>S101-0310-Vinhomes Grand Park</td>
                        </tr>

                        <tr>
                          <td>Áp dụng từ:</td>
                          <td>{packages.startDate} - {packages.endDate}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="button d-flex justify-content-end">
                      <button>Xem chi tiết</button>
                    </div>

                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rightbar;