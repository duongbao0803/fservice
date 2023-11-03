import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import "../../assets/css/styleorderPackage.css";

function Package() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage = async () => {
    try {
      const response = await axios.get(
        "https://fservices.azurewebsites.net/api/packages"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching package:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="banner" />
      <div className="container">
        <div className="search-filter">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-6">
              <div className="search">
                <input type="text" placeholder="Search here..." />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <div className="filter">
                <span>Sắp xếp theo: </span>
                <select name="" id="">
                  <option value={1}></option>
                  <option value={1}>Sort</option>
                  <option value={1}>Sort</option>
                </select>
              </div>
            </div>
          </div>
          <div className="list_package">
            {loading
              ? Array.from({ length: 5 }).map((_) => (
                  <div className="row list_package-row">
                    <div className="col-md-4">
                      <div className="list_package-img">
                        <Skeleton height={270} width={"100%"} />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h4>
                        <Skeleton width={300} />
                      </h4>
                      <p>
                        <Skeleton count={4} />
                      </p>
                      <span>
                        <span style={{ color: "#ff7f00", fontWeight: "700" }}>
                          <Skeleton width={150} />
                        </span>
                      </span>
                      <div>
                        <Skeleton width={100} />
                      </div>
                    </div>
                  </div>
                ))
              : data.map((packageList) => (
                  <div className="row list_package-row" key={packageList.id}>
                    <div className="col-md-4">
                      <div className="list_package-img">
                        <img
                          src={packageList.image}
                          alt=""
                          style={{
                            width: "100%",
                            height: "270px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h4>{packageList.name}</h4>
                      <p>{packageList.description}</p>
                      <span>
                        Chỉ từ:{" "}
                        <span style={{ color: "#ff7f00", fontWeight: "700" }}>
                          {packageList.price}đ
                        </span>
                      </span>
                      <div>
                        <Link to={`/detail/${packageList.id}`}>
                          Tìm hiểu thêm
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
