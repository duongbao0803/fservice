import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Routes, Route, Link, redirect } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import BasicRating from "./Star";
import PriceFormat from "./PriceFormat";
import Order from "../OrderCart/Order";
import { toast } from "react-toastify";
import config from "../../utils/cus-axios";
import { ro } from "date-fns/locale";

const Frame = () => {
  const [APIData, setAPIData] = useState({});
  const [serviceData, setServiceData] = useState([]);
  const [packageName, setPackageName] = useState("");

  const [packageDetails, setPackageDetails] = useState([]);
  const [room, setRoom] = useState([]);
  const [price, setPrice] = useState([]);

  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFrame();
  }, []);

  const fetchFrame = async () => {
    try {
      // Choose price
      const res = await config.get(`/api/packages/${id}`);
      setPrice(res.data.packagePrices);
      setPackageName(res.data.name);

      const prices = price.map((typePrice) => typePrice.typeId);

      //Load description
      const response = await config.get(`/api/packages/${id}?typeId=${1}`);
      setAPIData(response.data);

      //Load Service
      const details = response.data.packageDetails;
      setPackageDetails(details);

      const serviceIds = details.map((detail) => detail.serviceId);
      const serviceResponses = await Promise.all(
        serviceIds.map((id) => config.get(`/api/services/${id}`))
      );
      const services = serviceResponses.map((resp) => resp.data);

      setServiceData(services);

      //Load building
      const building = await config.get("/api/types");

      setRoom(building.data);
      console.log("check room:", room);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
      setLoading(false);
    }
  };

  // filter package
  const packageTypeIds = price.map((price) => price.typeId);
  const filterPackagePrice = room.filter((room) =>
    packageTypeIds.includes(room.id)
  );

  const handleSubmit = () => {
    console.log("check name: ", packageName);
    if (localStorage.getItem("isLogged") === "true") {
      navigate(`/detail/${id}/${encodeURIComponent(packageName)}`);
    } else {
      navigate("/authen");
      toast.warning("You must login before ordering package");
    }
  };

  const style = {
    border: "1px solid #333",
    padding: "8px",
    textAlign: "center",
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
                    <th style={style}>Tòa</th>
                    <th style={style}>Phòng</th>
                    <th style={style}>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {room.map((room, index) => (
                    <tr>
                      <td style={style}>{room.building.name}</td>
                      <td style={style}>{room.type}</td>
                      <td style={style}>
                        <PriceFormat price={price[index].price} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="button-container">
                <button
                  type="button"
                  id="order-now-button"
                  onClick={handleSubmit}
                >
                  Đặt mua
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
