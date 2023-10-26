import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, Link, redirect } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import BasicRating from "./Star";
import PriceFormat from "./PriceFormat";
import Order from "../OrderCart/Order";

const Frame = () => {
  const [APIData, setAPIData] = useState({});
  const [serviceData, setServiceData] = useState([]);
  const [packageName, setPackageName] = useState("");

  const [packageDetails, setPackageDetails] = useState([]);
  const [room, setRoom] = useState([]);
  const [price, setPrice] = useState([]);

  let { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFrame();
  }, []);

  const fetchFrame = async () => {
    try {
      // Choose price
      const res = await axios.get(
        `https://fservices.azurewebsites.net/api/packages/${id}`
      );
      setPrice(res.data.packagePrices);
      setPackageName(res.data.name);

      //Load description
      const response = await axios.get(
        `https://fservices.azurewebsites.net/api/packages/${id}?typeId=${1}`
      );
      setAPIData(response.data);

      //Load Service
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

      //Load building
      const building = await axios.get(
        "https://fservices.azurewebsites.net/api/types"
      );

      setRoom(building.data);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content-package-detail">
              <h5 className="package-name">{APIData?.name}</h5>
              <p style={{ fontWeight: 900, display: "flex" }}>
                Đánh giá:
                <BasicRating></BasicRating>
              </p>
              <p className="package-duration" style={{ fontWeight: 900 }}>
                Thời hạn: <span>{APIData?.duration} tuần</span>
              </p>
              <table border={1} className="listPrice">
                <thead>
                  <tr>
                    <th>Tòa</th>
                    <th>Phòng</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {room.map((room, index) => (
                    <tr>
                      <td>{room.building.name}</td>
                      <td>{room.type}</td>
                      <td>
                        <PriceFormat price={price[index].price} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="button-container">
                <button type="button" id="order-now-button">
                  {" "}
                  <Link
                    to={`/detail/${id}/${encodeURIComponent(packageName)}`}
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
                <p style={{ fontWeight: 900 }}>Gói dịch vụ bao gồm: </p>

                {serviceData.map((service, idx) => (
                  <p key={idx}>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#03AC00" }}
                    />
                    <span> {packageDetails[idx]?.quantity}</span> lần{" "}
                    <span style={{ textTransform: "lowercase" }}>
                      {service.name}
                    </span>
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
