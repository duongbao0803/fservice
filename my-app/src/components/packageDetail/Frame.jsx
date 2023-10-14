import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PackageDetail from "../../page/packageDetail";
import { useParams } from "react-router-dom";
import { Routes, Route, Link, redirect } from "react-router-dom";

const Frame = () => {
  const [APIData, setAPIData] = useState({});
  const [serviceData, setServiceData] = useState([]);
  const [packageDetails, setPackageDetails] = useState([]);
  let { id } = useParams();
  const baseURL = `https://fservices.azurewebsites.net/api/packages/${id}?typeId=${2}`;

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(baseURL);
        console.log("api", response);
        setAPIData(response.data);

        const details = response.data.packageDetails;
        setPackageDetails(details);

        const serviceIds = details.map((detail) => detail.serviceId);
        const serviceResponses = await Promise.all(
          serviceIds.map((id) =>
            axios.get(`https://fservices.azurewebsites.net/api/services/${id}`)
          )
        );
        const services = serviceResponses.map((resp) => resp.data);

        setServiceData(services);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    }

    fetchUserData();
  }, [id]);
  return (
    <>
      {/* package-detail */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content-package-detail">
              <h5 className="package-name">{APIData?.name}</h5>
              <p>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </p>
              <p className="package-duration">
                Thời hạn: {APIData?.duration} tuần
              </p>
              <p>
                Giá: <span> {APIData?.price}</span> đồng
              </p>
              <div className="button-container">
                <button type="button" id="order-now-button">
                  {" "}
                  <Link
                    to="/orderPage"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "800",
                    }}
                  >
                    Đặt mua
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content-package-detail">
              <h5>Chi tiết gói: </h5>
              <p>{APIData?.description}</p>
              <div className="Include">
                <p>Gói dịch vụ bao gồm: </p>
                {serviceData.map((service, idx) => (
                  <p key={idx}>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#03AC00" }}
                    />
                    <span> {packageDetails[idx]?.quantity}</span> lần{" "}
                    <span>{service.name}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Frame;
