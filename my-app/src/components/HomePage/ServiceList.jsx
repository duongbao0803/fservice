import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import config from "../../utils/cus-axios";
// import { service } from "../../data";

function ServiceList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage = async () => {
    try {
      const response = await config.get("/api/packages");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching package:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mb-5 mt-5">
      <div className="content service-list">
        <div className="row row-content mb-3">
          <div className="col-12 col-sm-12 col-md-12">
            <h2 className="mb-4">Những gói dịch vụ chúng tôi cung cấp</h2>
          </div>
        </div>

        <div className="row row-content service d-flex justify-center">
          {loading
            ? Array.from({ length: 3 }).map((_) => (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4"
                  style={{ position: "relative" }}
                >
                  <div className="service-img mb-3">
                    <Skeleton height={300} width={"100%"} />
                  </div>
                  <div className="service-details pb-4">
                    <h5>
                      <Skeleton width={120} />
                    </h5>
                    <p className="text-justify">
                      <Skeleton count={5} />
                    </p>
                    <div style={{ position: "absolute", bottom: "0" }}>
                      <Skeleton width={100} />
                    </div>
                  </div>
                </div>
              ))
            : data.map((packages) => (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4"
                  style={{ position: "relative" }}
                  key={packages.id}
                >
                  <Link
                    to={`/detail/${packages.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="service-img mb-3">
                      <img
                        src={packages.image}
                        alt="Dọn phòng"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="service-details pb-4">
                      <h5>{packages.name}</h5>
                      <p className="text-justify">{packages.description}</p>
                      <div style={{ position: "absolute", bottom: "0" }}>
                        Tìm hiểu thêm
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
