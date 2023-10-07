import React, { Component } from "react";
import { useState, useEffect } from "react";
import PackageDetail from "../../page/packageDetail";
import { useParams } from "react-router-dom";

const Frame = () => {
  const [APIData, setAPIData] = useState();
  const [APIData1, setAPIData1] = useState();
  let { id } = useParams();
  const baseURL = `https://fservices.azurewebsites.net/api/packages/6`;

  useEffect(() => {
    async function fetchUserData() {
      const res = await fetch(baseURL);
      if (res.ok) {
        const data = await res.json();
        setAPIData(data);
        console.log(data.packageDetails[0].serviceId);
        const respone = await fetch(
          `https://fservices.azurewebsites.net/api/services/${data.packageDetails[0].serviceId}`
        );
        if (respone.ok) {
          const data = await respone.json();
          setAPIData1(data);
          console.log(data.name);
        }
      } else throw new Error(`HTTP Status: ${res.status}`);
    }
    fetchUserData();
  }, []);

  return (
    <>
      {/* package-detail */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content-package-detail">
              <p className="package-name">{APIData?.name}</p>
              <p>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </p>
              <p className="package-duration">
                Hình thức: mỗi tuần {APIData?.duration} lần.{" "}
              </p>
              <p>
                Giá: <span> {APIData?.price}/4 tuần</span>
              </p>
              <div className="button-container">
                <button type="button" id="order-now-button">
                  Đặt ngay
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content-package-detail">
              <p>Chi tiết gói: </p>
              <p>{APIData?.description}</p>
              <div className="Include">
                <p>Gói dịch vụ bao gồm: </p>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "#03AC00" }}
                  />
                  {APIData1?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Frame;
